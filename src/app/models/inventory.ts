import { Price } from './price';

export interface Inverntory {
    id: string;
    name: string;
    description: string;
    price: Price[];
    tags: string[];
  }