// src/lib/utils/SEOManager.ts
import website from '@/lib/config/website';
import ogSquareImageSrc from '@/lib/assets/home/home-open-graph-square.jpg';
import ogImageSrc from '@/lib/assets/home/home-open-graph.jpg';
import twitterImageSrc from '@/lib/assets/home/home-twitter.jpg';
import featuredImageSrc from '@/lib/assets/home/home.jpg';
import { VERTICAL_LINE_ENTITY } from '@/lib/constants/entities';

// TODO Add more seo elements.

// Default settings
const {
	author,
	entity,
	facebookAuthorPage,
	facebookPage,
	ogLanguage,
	siteLanguage,
	siteShortTitle,
	siteTitle,
	siteUrl,
	githubPage,
	linkedinProfile,
	telegramUsername,
	tiktokUsername,
	twitterUsername
} = website;

export class SEOManager {
	title;
	pageTitle;
	siteTitleAlt;
	metadescription;
	breadcrumbs;
	slug;
	url;
	article?;
	defaultAlt?;
	featuredImageAlt?;
	featuredImageSrc?;
	ogImageSrc?;
	ogSquareImageSrc?;
	twitterImageSrc?;
	entityMeta?;
	datePublished?;
	lastUpdated?;
	timeToRead?;

	constructor() {
		const { author, siteUrl } = website;

		this.title = 'Home';
		this.pageTitle = '';
		this.url = '';
		this.slug = '';
		this.defaultAlt = '';
		this.siteTitleAlt = siteShortTitle;
		this.metadescription = 'Standaard beschrijving';
		this.article = false;
		this.featuredImageAlt = 'Standaard afbeelding alt-tekst';
		this.featuredImageSrc = '/assets/images/featured/image.png';
		this.ogImageSrc = '/assets/images/og/image.png';
		this.ogSquareImageSrc = '/assets/images/og/square/image.png';
		this.twitterImageSrc = '/assets/images/twitter/image.png';
		this.timeToRead = 0;
		this.entityMeta = {
			url: `${siteUrl}/`,
			faviconWidth: 512,
			faviconHeight: 512,
			caption: author
		};
		this.breadcrumbs = [
			{
				name: 'Home',
				slug: ''
			}
		];
		this.datePublished = '2021-07-07T14:19:33.000+0100';
		this.lastUpdated = '2021-07-07T14:19:33.000+0100';
	}

	getSeoProps() {
		const url = `${siteUrl}/${this.slug}`;
		const pageTitle = `${this.title} ${VERTICAL_LINE_ENTITY} ${siteTitle}`;

		const featuredImage = this.featuredImageSrc
			? {
					url: this.featuredImageSrc,
					alt: this.featuredImageAlt,
					width: 672,
					height: 448,
					caption: 'Home page'
				}
			: undefined;

		const ogImage = this.ogImageSrc
			? {
					url: this.ogImageSrc,
					alt: this.featuredImageAlt
				}
			: undefined;

		const ogSquareImage = this.ogSquareImageSrc
			? {
					url: this.ogSquareImageSrc,
					alt: this.featuredImageAlt
				}
			: undefined;

		const twitterImage = this.twitterImageSrc
			? {
					url: this.twitterImageSrc,
					alt: this.featuredImageAlt
				}
			: undefined;

		return {
			title: this.title,
			pageTitle,
			slug: this.slug,
			url,
			article: this.article,
			entityMeta: this.entityMeta,
			datePublished: this.datePublished,
			lastUpdated: this.lastUpdated,
			breadcrumbs: this.breadcrumbs,
			metadescription: this.metadescription,
			defaultAlt: this.defaultAlt,
			siteTitleAlt: this.siteTitleAlt,
			featuredImage,
			ogImage,
			ogSquareImage,
			twitterImage,
			ogSquareImageSrc,
			ogImageSrc,
			twitterImageSrc,
			featuredImageSrc,
			VERTICAL_LINE_ENTITY,
			author,
			entity,
			facebookAuthorPage,
			facebookPage,
			ogLanguage,
			siteLanguage,
			siteShortTitle,
			siteTitle,
			siteUrl,
			githubPage,
			linkedinProfile,
			telegramUsername,
			tiktokUsername,
			twitterUsername,
			timeToRead: this.timeToRead
		};
	}
}
