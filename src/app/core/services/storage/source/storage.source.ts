export abstract class StorageSource {
    //fallback función que retorna un valor cuando se termina de ejecutar la lógica de la función read
    abstract read<T>(key: string, fallback: T): Promise<T>;

    abstract write(key: string, value: unknown): Promise<boolean>;

    abstract remove(key: string): Promise<void>;
}