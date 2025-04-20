import { create } from 'zustand';
import { StoreApi, UseBoundStore } from 'zustand';

type WithSelectors<S> = S extends { getState: () => infer T }
  ? S & { use: { [K in keyof T]: () => T[K] } }
  : never;

const createSelectors = <S extends UseBoundStore<StoreApi<object>>>(
  _store: S
) => {
  let store = _store as WithSelectors<typeof _store>;
  store.use = {};
  for (let k of Object.keys(store.getState())) {
    (store.use as any)[k] = () => store((s) => s[k as keyof typeof s]);
  }
  return store;
};

interface Category {
  id: string;
  label: string;
  icon: string;
}

interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  oldPrice?: number;
  rating: number;
  image: string;
}

interface HomeState {
  categories: Category[];
  curatedProducts: Product[];
}

const useHomeStoreBase = create<HomeState>(() => ({
  categories: [
    { id: '1', label: 'Women', icon: require('@/assets/images/women.png') },
    { id: '2', label: 'Men', icon: require('@/assets/images/women.png') },
    { id: '3', label: 'Teens', icon: require('@/assets/images/women.png') },
    { id: '4', label: 'Kids', icon: require('@/assets/images/women.png') },
    { id: '5', label: 'Baby', icon: require('@/assets/images/women.png') },
  ],
  curatedProducts: [
    {
      id: '1',
      name: 'Oversized Fit Printed Miami',
      brand: 'H&M',
      price: 295,
      oldPrice: 550,
      rating: 4.9,
      image: require('@/assets/images/shirt1.png'),
    },
    {
      id: '2',
      name: 'Printed Sweatshirt',
      brand: 'H&M',
      price: 314,
      rating: 4.8,
      image: require('@/assets/images/shirt1.png'),
    },
  ],
}));

export const useHomeStore = createSelectors(useHomeStoreBase);
