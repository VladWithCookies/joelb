import { getYear } from 'date-fns';

export const CREDITS_LINK = 'https://vladwithcookies.github.io/';
export const API_URL = `https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}/environments/master`;

export const CURRENT_YEAR = getYear(new Date());

export const PAGINATION_LIMIT = 6;

export const EN_LANGUAGE = 'en';
export const CS_LANGUAGE = 'cs';
export const SR_LANGUAGE = 'sr';
export const AVAILABLE_LANGUAGES = [EN_LANGUAGE, CS_LANGUAGE, SR_LANGUAGE];
