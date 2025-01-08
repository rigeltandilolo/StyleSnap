import { create } from "zustand";

export const useNavbar = create((set) => ({
  currentPage: '/',
  setCurrentPage: (page) => set(() => ({ currentPage: page }))
}))