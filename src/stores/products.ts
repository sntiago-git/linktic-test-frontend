import { writable } from 'svelte/store';
import type { Product } from '../models/product';
import { getProducts } from '../services/productService';

export const products = writable<Product[]>([]);

export const fetchProducts = async () => {
    try {
        const data = await getProducts();
        products.set(data);
    } catch (error) {
        console.error('Error fetching products:', error);
    }
};
