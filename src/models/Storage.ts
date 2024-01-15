import { ProductsModel } from "./Product";
import storage from "../scripts/data/storage.json";

interface StorageModel {
    id: number;
    city: string;
    name: string;
    address: string;
    products: ProductsModel[];
}

export class Storage {
    private _data: StorageModel[];

    constructor() {
        this._data = storage;
    }

    get allStorages() {
        return this._data
    }

    private set updateStorage(storage: StorageModel) {
        this._data = this._data.map((item) => {
            if(item.id !== storage.id) return item;

            return storage;
        });
    }

    protected getStorage(id: number): StorageModel {
        return this._data.find((item) => item.id === id);
    }

    protected setProducts(id: number, product: ProductsModel) {
        const storage = this.getStorage(id);
        storage.products.push(product);

        this.updateStorage = storage;
    }
}