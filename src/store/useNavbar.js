import { create } from "zustand";

export const useNavbar = create((set) => ({
  currentPage: '/',
  hiddenNavbar: false,
  setCurrentPage: (page) => set(() => ({ currentPage: page })),
  setHiddenNavbar: (hiddenNavbar) => set(() => ({ hiddenNavbar }))
}))