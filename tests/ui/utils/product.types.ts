export type ProductName = 'blackEdition' | 'hotSavouryPouches' | 'readyToDrink' | 'completeNutritionBar' | 'dailyAZVitamins';

export interface ProductInformaion {
  name: string;
  price?: number;
  usesTags?: string;
  description?: string;
}

export const products: Record<ProductName, ProductInformaion> = {
  blackEdition: { name: 'Black Edition' },
  hotSavouryPouches: { name: 'Hot & Savoury Pouches' },
  readyToDrink: { name: 'Ready-to-drink' },
  completeNutritionBar: { name: 'Complete Nutrition Bar' },
  dailyAZVitamins: { name: 'Daily A-Z Vitamins' },
};
