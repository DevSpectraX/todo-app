import { ProductDbo } from "../../data/datasources/products/local/dbo/product.dbo";

export abstract class LocalStoragePort {
    abstract getItem<T>(key: string): T | null;
    abstract setItem(key: string, value: unknown): boolean;
    abstract removeItem(key: string): void
}