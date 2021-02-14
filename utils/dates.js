import { format, parseISO } from 'date-fns';

export const asDate = date => format(parseISO(date), 'd MMM, yyyy');
