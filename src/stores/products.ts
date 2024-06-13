import { writable } from 'svelte/store';
import type { Product } from '../models/product';
import { getProducts, getProduct, updateProduct, createProduct, deleteProduct } from '../services/productService';

export const products = writable<Product[]>([]);
export const product = writable<Product>();
export const loading = writable<Boolean>(false);
export const noProducts = writable<Boolean>(false);

export const fetchProducts = async () => {
    loading.set(true)
    try {
        const data = await getProducts();

        if (data.length === 0) {
            noProducts.set(true)
        }
        products.set(data);

    } catch (error) {
        console.error('Error fetching products:', error);
    }
    loading.set(false)
};

export const fetchProduct = async (_id: string) => {
    loading.set(true)
    try {
        const data = await getProduct(_id);
        product.set(data);
    } catch (error) {
        console.error('Error fetching product:', error);
    }
    loading.set(false)
};

export const editProduct = async (_id: string, product: Product) => {
    loading.set(true)
    try {
        const productUpdated = await updateProduct(_id, product);
        products.update(products => products.map(product => product._id === _id ? productUpdated : product));
    } catch (error) {
        console.error('Error editing product:', error);
    }
    loading.set(false)
};


export const addProduct = async (product: Product) => {
    loading.set(true)
    try {
        const newProduct = await createProduct(product);
        products.update(products => [...products, newProduct]);
    } catch (error) {
        console.error('Error adding product:', error);
    }
    loading.set(false)
}

export const removeProduct = async (_id: string) => {
    loading.set(true)
    try {
        await deleteProduct(_id);
        products.update(products => products.filter(product => product._id !== _id));
    } catch (error) {
        console.error('Error removing product:', error);
    }
    loading.set(false)
}
