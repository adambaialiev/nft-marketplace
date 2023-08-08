import { create } from "zustand";

interface SearchStore {
  searchQuery: string;
  setSearchQuery: (value: string) => void;
}

const useSearchStore = create<SearchStore>((set) => ({
  searchQuery: "",
  setSearchQuery: (value: string) => set({ searchQuery: value }),
}));

export default useSearchStore;
