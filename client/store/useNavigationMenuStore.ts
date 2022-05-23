import zustand from "zustand";

interface NavigationMenuStore {
  isNavigationMenuOpen: boolean;

  closeNavigationMenu: () => void;
  openNavigationMenu: () => void;
  toggleNavigationMenu: () => void;
}

const useNavigationMenuStore = zustand<NavigationMenuStore>((set) => ({
  isNavigationMenuOpen: false,

  closeNavigationMenu: () => set({ isNavigationMenuOpen: false }),
  openNavigationMenu: () => set({ isNavigationMenuOpen: true }),

  toggleNavigationMenu: () =>
    set((state) => ({ isNavigationMenuOpen: !state.isNavigationMenuOpen })),
}));

export default useNavigationMenuStore;
