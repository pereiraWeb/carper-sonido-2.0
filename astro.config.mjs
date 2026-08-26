// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';
import { business } from './src/config/business.ts';
import { getConfigIssues } from './src/lib/configCheck.ts';

/**
 * Fails `astro build` (production builds, including on Vercel) if
 * `src/config/business.ts` still has placeholder values — e.g. the
 * default "Business Name" or "https://example.com". This never runs during
 * `astro dev`/`astro preview` (the `astro:build:start` hook only fires for
 * `astro build`), so it can't get in the way of local development.
 *
 * Set `SKIP_CONFIG_GUARD=true` to bypass intentionally, e.g. for a
 * staging/demo deploy that's meant to still show placeholder data.
 */
function productionConfigGuard() {
  return {
    name: 'production-config-guard',
    hooks: {
      'astro:build:start': () => {
        if (process.env.SKIP_CONFIG_GUARD === 'true') return;

        const issues = getConfigIssues();
        if (issues.length === 0) return;

        const details = issues.map((issue) => `  - ${issue.field}: ${issue.message}`).join('\n');
        throw new Error(
          `\nProduction build blocked: src/config/business.ts still has placeholder values:\n${details}\n\n` +
            'Fix these before publishing, or set SKIP_CONFIG_GUARD=true to bypass on purpose (e.g. a staging/demo build).\n',
        );
      },
    },
  };
}

// https://astro.build/config
export default defineConfig({
  // Single source of truth for the production domain — reused for the
  // canonical URLs built in `src/lib/seo.ts`, the sitemap below, and
  // absolute URLs in JSON-LD (`Breadcrumbs.astro`, `*Schema.astro`). Change
  // it in `src/config/business.ts` (`siteUrl`), never here.
  site: business.siteUrl,

  // The site stays fully static except for on-demand routes that opt out of
  // prerendering (e.g. `src/pages/api/contact.ts`), which the Vercel adapter
  // renders on request as a serverless function.
  output: 'static',
  adapter: vercel(),

  // Canonical URLs never have a trailing slash (see `getSeoMeta` in
  // `src/lib/seo.ts`) — enforce the same policy at the routing level so
  // every internal link, redirect and generated page agrees with them.
  trailingSlash: 'never',

  build: {
    // Astro's default ("auto") only inlines a page's CSS into the HTML when
    // it's under ~4kb, and externalizes it (a separate render-blocking
    // `<link>` request) above that. This site's *entire* combined CSS is
    // still just a few dozen KB, so "always" inlining it removes that extra
    // request/round-trip on every page — measurably faster First Contentful
    // Paint (verified with Lighthouse; see README section 16). The
    // trade-off is that pages can no longer share one cached external
    // stylesheet across navigations — a bad trade for a large app with
    // many repeat page views per session, but a good one here: a small
    // marketing site where most sessions only ever view a handful of pages.
    inlineStylesheets: 'always',
  },

  // Add entries here whenever a page's slug changes after going live, so old
  // links/bookmarks/search results 301 to the new URL instead of 404ing —
  // e.g. `'/services/old-slug': '/services/new-slug'`. Astro turns these
  // into real redirects at build time.
  redirects: {
    '/contact': '/contacto',
    '/teletrabajo': '/services/teletrabajo',
    '/instalaciones': '/services/instalaciones',
    '/alquiler': '/services/alquiler',
    '/alquileres-de-sonido-e-imagen': '/services/alquiler',
    '/control-de-ruidos': '/services/control-de-ruidos',
    '/servicio-tecnico': '/services/servicio-tecnico',
    '/servicio-tecnico-2': '/services/servicio-tecnico',
    '/aviso-legal': '/legal/legal-notice',
    '/politica-de-privacidad': '/legal/privacy',
    '/politica-de-cookies': '/legal/cookies',
    '/marcas': '/',
  },

  integrations: [
    sitemap({
      // Keep the conversion-tracking `/thank-you` page out of the sitemap
      // (it's not content to rank).
      filter: (page) => !page.includes('/thank-you'),
    }),
    productionConfigGuard(),
  ],
});
