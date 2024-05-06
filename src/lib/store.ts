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
}

type cartStore = {
    content: Product[];
    addItem: (item: any) => void;
    countItems: () => number;
    removeItemById: (id: any) => void;
};

export const useCartStore: any = create<cartStore>((set) => ({
    content: [],
    addItem: (product: any) =>
        set((state: any) => ({ content: [...state.content, product] })),
    countItems: () => useCartStore.getState().content.length,
    removeItemById: (id) =>
        set((state) => ({
            content: state.content.filter((item) => item.id !== id),
        })),
}));
