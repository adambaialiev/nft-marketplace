import { create } from "zustand";

interface AuthStore {
  address?: string;
  setAddress: (address: string) => void;
}

const useAuthStore = create<AuthStore>((set) => ({
  address: undefined,
  setAddress: (address: string) => set({ address }),
}));

export default useAuthStore;
