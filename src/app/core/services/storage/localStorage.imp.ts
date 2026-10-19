import { Injectable } from '@angular/core';
import { StorageSource } from './source/storage.source';
import { readJson, writeJson } from '../../utils/storage.util';

@Injectable({ providedIn: 'root' })
export class LocalStorageImp extends StorageSource {
  override read<T>(key: string, fallback: T): Promise<T> {
    return Promise.resolve(readJson(key, fallback));
  }
  override write(key: string, value: unknown): Promise<boolean> {
    return Promise.resolve(writeJson(key, value));
  }
  override remove(key: string): Promise<void> {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.log(error);
    }
    return Promise.resolve();
  }
}
