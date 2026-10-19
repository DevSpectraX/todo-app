import { ProductDbo } from "../../data/datasources/products/local/dbo/product.dbo";

export abstract class LocalStoragePort {
    abstract getItem(key: string): ProductDbo | null;
    abstract setItem(key: string, value: string): boolean;
    abstract removeItem(key: string): void
}