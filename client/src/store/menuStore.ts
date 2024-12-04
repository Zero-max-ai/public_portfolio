import { create } from "zustand";

interface MenuState {
  isOpen: boolean;
  toggleMenu: () => void;
}

const useMenuStore = create<MenuState>((set) => ({
  isOpen: false,
  toggleMenu: () => set((state) => ({ isOpen: !state.isOpen })),
}));

export default useMenuStore;
