import { EnvironmentProviders, makeEnvironmentProviders } from "@angular/core";
import { GetProductsUseCase } from "../../domain/usecases/products/get-products.usecase";
import { ProductDtoToEntityMapper } from "../repositories/products/mappers/product-dto-to-entity.mapper";
import { ProductsRepository } from "../../domain/repositories/products/products.repository";
import { ProductsRepositoryImp } from "../repositories/products.repository.imp";
import { ProductsRemoteDataSourceImp } from "../datasources/products/remote/products-remote.datasource.imp";
import { ProductsRemoteDataSource } from "../datasources/products/source/products-remote.datasource";
import { ProductDboToEntityMapper } from "../repositories/products/mappers/product-dbo-to-entity.mapper";
import { ProductsLocalDataSource } from "../datasources/products/source/products-local.datasource";
import { ProductsLocalDataSourceImp } from "../datasources/products/local/products-local.datasource";

export function provideProductsDi(): EnvironmentProviders {
    return makeEnvironmentProviders([
        GetProductsUseCase, 
        
        ProductDtoToEntityMapper, 
        ProductDboToEntityMapper,

        {provide: ProductsRepository, useClass: ProductsRepositoryImp},
        {provide: ProductsRemoteDataSource, useClass: ProductsRemoteDataSourceImp},
        {provide: ProductsLocalDataSource, useClass: ProductsLocalDataSourceImp}
    ]);
}