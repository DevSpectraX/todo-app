import { Injectable } from '@angular/core';
import { StorageSource } from './source/storage.source';
import { del, get, set } from 'idb-keyval';

@Injectable({ providedIn: 'root' })
export class IndexedDBImp extends StorageSource {
  override async read<T>(key: string, fallback: T): Promise<T> {
    try {
      const value = await get<T>(key);
      return value ?? fallback;
    } catch {
      return fallback;
    }
  }
  override async write(key: string, value: unknown): Promise<boolean> {
    try {
      await set(key, value);
      return true;
    } catch {
      return false;
    }
  }
  override async remove(key: string): Promise<void> {
    try {
      await del(key);
    } catch (error) {
      console.log(error);
    }
  }
}
