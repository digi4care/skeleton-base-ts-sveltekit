// src/lib/config/website.ts
import {
	PUBLIC_FRONTEND_URL,
	PUBLIC_SITE_NAME,
	PUBLIC_SITE_DESCRIPTION,
	PUBLIC_SITE_SHORT_DESCRIPTION
} from '$env/static/public';

const website = {
	entity: 'Digi4Care',
	author: 'Chris Engelhard',
	ogLanguage: 'en_US',
	siteLanguage: 'en-US',
	siteTitle: PUBLIC_SITE_NAME,
	siteShortTitle: PUBLIC_SITE_SHORT_DESCRIPTION,
	description: PUBLIC_SITE_DESCRIPTION,
	siteUrl: PUBLIC_FRONTEND_URL,
	backgroundColor: '#1b4079',
	themeColor: '#d62828',
	contactEmail: 'ask@digi4care.com',
	facebookUsername: 'digi4care',
	facebookAuthorPageName: 'digi4care',
	githubPage: 'digi4care',
	linkedinProfile: 'digi4care',
	telegramUsername: 'digi4care',
	tiktokUsername: 'digi4care',
	twitterUsername: 'digi4care',
	twitterUserId: '123456789',
	wireUsername: 'digi4care'
};

export { website as default };
