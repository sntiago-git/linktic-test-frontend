import { writable } from 'svelte/store';
import type { Order } from '../models/order';
import { getOrders, getOrder, createOrder, updateOrder, deleteOrder } from '../services/orderService';

export const orders = writable<Order[]>([]);
export const order = writable<Order>();
export const loading = writable<Boolean>(false);
export const noOrders = writable<Boolean>(false);

export const fetchOrders = async () => {

    loading.set(true)
    try {
        const data = await getOrders();

        if (data.length === 0) {
            noOrders.set(true)
        }

        orders.set(data);
    } catch (error) {
        console.error('Error fetching orders:', error);
    }
    loading.set(false)
};



export const fetchOrder = async (_id: string) => {
    loading.set(true)
    try {
        const data = await getOrder(_id);
        order.set(data);
    } catch (error) {
        console.error('Error fetching order:', error);
    }
    loading.set(false)
};

export const editOrder = async (_id: string, order: Order) => {
    loading.set(true)
    try {
        const orderUpdated = await updateOrder(_id, order);
        orders.update(orders => orders.map(order => order._id === _id ? orderUpdated : order));
    } catch (error) {
        console.error('Error editing order:', error);
    }
    loading.set(false)
};


export const addOrder = async (order: Order) => {
    loading.set(true)
    try {
        const newOrder = await createOrder(order);
        orders.update(orders => [...orders, newOrder]);
    } catch (error) {
        console.error('Error adding order:', error);
    }
    loading.set(false)
}

export const removeOrder = async (_id: string) => {
    loading.set(true)
    try {
        await deleteOrder(_id);
        orders.update(orders => orders.filter(order => order._id !== _id));
    } catch (error) {
        console.error('Error removing order:', error);
    }
    loading.set(false)
}
