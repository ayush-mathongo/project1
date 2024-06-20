import {create} from 'zustand';
import { persist } from 'zustand/middleware';

export const useCounterStore = create(
  persist(
    (set) => ({
      count: 0,
      decrementCount: () => set((state:any) => ({ count: state.count - 1 })),
      incrementCount: () => set((state:any) => ({ count: state.count + 1 })),
    }),
    {
      name: 'counterStorage', 
      getStorage: () => localStorage, 
    }
  )
);
