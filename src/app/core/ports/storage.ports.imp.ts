import { Injectable } from '@angular/core';
import { LocalStoragePort } from './storage.ports';
import { readJson, writeJson } from '../utils/storage.util';
import { ProductDbo } from '../../data/datasources/products/local/dbo/product.dbo';

@Injectable({ providedIn: 'root' })
export class LocalStoragePortImp extends LocalStoragePort {
  override getItem(key: string): ProductDbo | null {
    return readJson(key, null);
  }
  override setItem(key: string, value: string): boolean {
    return writeJson(key, value);
  }
  override removeItem(key: string): void {
    return localStorage.removeItem(key);
  }
}
