import { create } from "zustand";

interface Product {
    id: number;
    title: string;
    image: string;
    price: number;
    rating: {
        rate: number;
        count: number;
    };
    quantity: number;
}

type CartStore = {
    content: Product[];
    addItem: (item: any) => void;
    countItems: () => number;
    removeItemById: (id: any) => void;
};

export const useCartStore: any = create<CartStore>((set) => ({
    content: [],
    addItem: (product: Product) =>
        set((state: CartStore) => {
            const existingItemIndex = state.content.findIndex(
                (item) => item.id === product.id
            );

            const newState = [...state.content];
            if (existingItemIndex !== -1) {
                // Product already exists, increase quantity by 1
                newState[existingItemIndex].quantity += 1;
            } else {
                // New product, add it with quantity 1
                newState.push({ ...product, quantity: 1 });
            }

            return { content: newState };
        }),
    removeItemCount: (product: Product) =>
        set((state: CartStore) => {
            const existingItemIndex = state.content.findIndex(
                (item) => item.id === product.id
            );

            const newState = [...state.content];
            if (existingItemIndex !== -1) {
                // Product already exists, increase quantity by 1
                newState[existingItemIndex].quantity -= 1;
            } else {
                // New product, add it with quantity 1
                newState.push({ ...product, quantity: 1 });
            }

            return { content: newState };
        }),
    countItems: () => useCartStore.getState().content.length,
    removeItemById: (id) =>
        set((state) => ({
            content: state.content.filter((item) => item.id !== id),
        })),
}));
