import { create } from "zustand";
import { CardSize } from "../types";

interface SizeStore {
  cardSize: CardSize;
  setCardSize: (size: CardSize) => void;
}

const useCardSizeStore = create<SizeStore>((set) => ({
  cardSize: "S",
  setCardSize: (size: CardSize) => set({ cardSize: size }),
}));

export default useCardSizeStore;
