import { Price } from './price';

export interface Inventory {
    id: string;
    name: string;
    description: string;
    price: Price[];
    tags: string[];
    categories: string[];
  }