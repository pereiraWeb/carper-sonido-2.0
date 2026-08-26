import googleReviewsJson from '../data/google-reviews.json';

export type GoogleStarRating = 'ONE' | 'TWO' | 'THREE' | 'FOUR' | 'FIVE';

export interface GoogleReviewRaw {
	reviewer: { displayName: string };
	starRating: GoogleStarRating;
	comment?: string;
	createTime: string;
	updateTime: string;
	reviewReply?: { comment: string; updateTime: string };
	name: string;
}

export interface GoogleReview {
	id: string;
	author: string;
	initials: string;
	rating: number;
	quote: string;
	createdAt: string;
	/** ISO date for `<time datetime>`. */
	createdAtIso: string;
	verified: true;
}

const STAR_VALUES: Record<GoogleStarRating, number> = {
	ONE: 1,
	TWO: 2,
	THREE: 3,
	FOUR: 4,
	FIVE: 5,
};

const rawReviews = googleReviewsJson.reviews as GoogleReviewRaw[];

/** Keep the original language; drop Google's auto-translation block. */
export function originalComment(comment: string): string {
	const originalMarker = '(Original)';
	const translatedMarker = '(Translated by Google)';
	const originalIndex = comment.indexOf(originalMarker);
	if (originalIndex !== -1) {
		return comment.slice(originalIndex + originalMarker.length).trim();
	}
	const translatedIndex = comment.indexOf(translatedMarker);
	if (translatedIndex !== -1) {
		return comment.slice(0, translatedIndex).trim();
	}
	return comment.trim();
}

function initialsFromName(name: string): string {
	const words = name
		.replace(/[“”"']/g, ' ')
		.split(/\s+/)
		.filter((word) => word.length > 0);
	if (words.length === 0) return '?';
	if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
	return `${words[0][0]}${words[words.length - 1][0]}`.toUpperCase();
}

function formatReviewDate(iso: string): string {
	return new Date(iso).toLocaleDateString('es-ES', {
		month: 'long',
		year: 'numeric',
	});
}

function reviewId(name: string, index: number): string {
	const parts = name.split('/');
	return parts[parts.length - 1] || String(index);
}

/**
 * Five-star Google reviews that include a written comment.
 * Empty ratings and one-star posts stay in the source JSON but are not
 * shown on the homepage.
 */
export const googleReviews: GoogleReview[] = rawReviews
	.map((review, index) => {
		const quote = review.comment ? originalComment(review.comment) : '';
		return {
			id: reviewId(review.name, index),
			author: review.reviewer.displayName,
			initials: initialsFromName(review.reviewer.displayName),
			rating: STAR_VALUES[review.starRating],
			quote,
			createdAt: formatReviewDate(review.createTime),
			createdAtIso: review.createTime,
			verified: true as const,
		};
	})
	.filter((review) => review.rating === 5 && review.quote.length > 0);

export const googleReviewsContent = {
	eyebrow: 'Google',
	title: 'Opiniones verificadas',
	description:
		'Reseñas reales extraídas del perfil oficial de Google de Carper Sonido Profesional.',
	verifiedLabel: 'Verificada en Google',
	ctaText: 'Ver en Google',
	mapsUrl:
		'https://www.google.com/maps/search/?api=1&query=Carper+Sonido+Profesional+Pi+y+Margal+43+Vigo',
};
