import type { Product } from '../models/product';
const API_URL = import.meta.env.VITE_API_URL;

const productsEndpoint = `${API_URL}/api/products`;

export const getProducts = async (): Promise<Product[]> => {
  const response = await fetch(productsEndpoint);
  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }
  return response.json();
};

export const getProduct = async (id: string): Promise<Product> => {
  const response = await fetch(`${productsEndpoint}/${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch product');
  }
  return response.json();
};

export const createProduct = async (product: Product): Promise<Product> => {
  const response = await fetch(productsEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(product),
  });

  if (!response.ok) {
    throw new Error('Failed to create product');
  }
  return response.json();
};

export const updateProduct = async (_id: string, product: Product): Promise<Product> => {
  const response = await fetch(`${productsEndpoint}/${_id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(product),
  });

  if (!response.ok) {
    throw new Error('Failed to update product');
  }
  return response.json();
};

export const deleteProduct = async (id: string): Promise<void> => {
  const response = await fetch(`${productsEndpoint}/${id}`, {
    method: 'DELETE',
  });

  if (!response.ok) {
    throw new Error('Failed to delete product');
  }
};
