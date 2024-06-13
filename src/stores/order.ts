import { writable } from 'svelte/store';
import type { Order } from '../models/order';
import { getOrders } from '../services/orderService';

export const orders = writable<Order[]>([]);

export const fetchOrders = async () => {
    try {
        const data = await getOrders();
        orders.set(data);
    } catch (error) {
        console.error('Error fetching orders:', error);
    }
};
