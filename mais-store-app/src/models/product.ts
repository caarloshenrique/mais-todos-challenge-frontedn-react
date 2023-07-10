export interface Product {
  id: number;
  name: string;
  description: string;
  quantity: number;
  value: number;
}

export interface ProductFormData {
  name: string;
  description: string;
  quantity: number;
  value: number;
}
