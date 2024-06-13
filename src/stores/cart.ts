// stores/cartStore.ts
import { writable } from 'svelte/store';
import type { Product } from '../models/product';

export const isOpen = writable<Boolean>(false);

interface CartItem {
    product: Product;
    quantity: number;
}

interface Cart {
    items: CartItem[];
    total: number;
}

const createCartStore = () => {
    const { subscribe, set, update } = writable<Cart>({
        items: [],
        total: 0
    });

    return {
        subscribe,
        add: (product: Product) => {
            update(cart => {
                const existingItem = cart.items.find(item => item.product._id === product._id);
                if (existingItem) {
                    existingItem.quantity += 1;
                } else {
                    cart.items.push({ product, quantity: 1 });
                }
                cart.total += product.price;
                return cart;
            });
        },
        remove: (productId: string) => {
            update(cart => {
                const itemIndex = cart.items.findIndex(item => item.product._id === productId);
                if (itemIndex !== -1) {
                    const item = cart.items[itemIndex];
                    cart.total -= item.product.price * item.quantity;
                    cart.items.splice(itemIndex, 1);
                }
                return cart;
            });
        },
        clear: () => {
            set({ items: [], total: 0 });
        }
    };
}

export const cartStore = createCartStore();
