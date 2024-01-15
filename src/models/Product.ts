import { Storage } from './Storage';
import product from "../scripts/data/product.json"

export interface ProductsModel {
  product_name: string;
  company_name: string;
  quantity: number;
  pricePerUnit: number;
  id: number;
  storageId: number;
}



export class Products extends Storage {
    constructor() {
        super();
        product.forEach((item) => {
            this.setProducts(item.storageId, item)
        })
    }
}
