import { getYear } from 'date-fns';

export const CREDITS_LINK = 'https://vladwithcookies.github.io/';
export const CURRENT_YEAR = getYear(new Date());
export const API_URL = `https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}/environments/master`;
