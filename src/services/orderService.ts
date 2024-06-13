import type { Order } from "../models/order";
const API_URL = import.meta.env.VITE_API_URL;

const ordersEndpoint = `${API_URL}/api/orders`;

export const getOrders = async (): Promise<Order[]> => {
    const response = await fetch(ordersEndpoint);
    if (!response.ok) {
        throw new Error("Failed to fetch orders");
    }
    return response.json();
};

export const getOrder = async (id: string): Promise<Order> => {
    const response = await fetch(`${ordersEndpoint}/${id}`);
    if (!response.ok) {
        throw new Error("Failed to fetch order");
    }
    return response.json();
};

export const createOrder = async (order: Order): Promise<Order> => {
    const response = await fetch(ordersEndpoint, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(order),
    });

    if (!response.ok) {
        throw new Error("Failed to create order");
    }
    return response.json();
};

export const updateOrder = async (id: string, order: Order): Promise<Order> => {
    const response = await fetch(`${ordersEndpoint}/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(order),
    });

    if (!response.ok) {
        throw new Error("Failed to update order");
    }
    return response.json();
};

export const deleteOrder = async (id: string): Promise<void> => {
    const response = await fetch(`${ordersEndpoint}/${id}`, {
        method: "DELETE",
    });

    if (!response.ok) {
        throw new Error("Failed to delete order");
    }
};
