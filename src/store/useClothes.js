import { create } from "zustand";
import { addNewClothes, getClothes } from "../services/clothes";

export const useClothes = create((set, get) => ({
  clothes: [],
  filter: "all",
  clothesPhoto: null,
  setClothes: (clothes) => set(() => ({ clothes })),
  setFilter: (filter) => set(() => ({ filter })),
  filteredClothes: () => {
    return get().filter === "all"
      ? get().clothes
      : get().clothes.filter((item) => item.type === get().filter)
  },
  fetchClothes: async () => {
    const clothes = await getClothes()

    set(() => ({ clothes }))
  },
  addNewClothes: async ({ name, type, color, image }) => {
    const response = await addNewClothes({ name, type, color, image })

    return response
  }
}));
