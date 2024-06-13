import type { Product } from './product';

export interface OrderProduct {
    _id?: string;
    product: Product;
    quantity: number;
}

export interface Order {
    _id?: string;
    products: OrderProduct[];
    totalAmount: number;
    customerName: string;
    customerEmail: string;
    createdAt: Date;
    updatedAt: Date;
}