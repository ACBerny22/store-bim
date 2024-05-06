import { create } from "zustand";

type cartStore = {
    content: string[];
    addItem: (item: any) => void;
    countItems: () => number;
};

export const useCartStore: any = create<cartStore>((set) => ({
    content: [],
    addItem: (product: any) =>
        set((state: any) => ({ content: [...state.content, product] })),
    countItems: () => useCartStore.getState().content.length,
}));
