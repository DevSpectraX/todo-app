import { inject, Injectable } from '@angular/core';
import { ProductsRepository } from '../../domain/repositories/products/products.repository';
import { map, Observable, of, switchMap, tap} from 'rxjs';
import { ProductsEntity } from '../../domain/entities/products/product.entity';
import { ProductsRemoteDataSource } from '../datasources/products/source/products-remote.datasource';
import { ProductDtoToEntityMapper } from './products/mappers/product-dto-to-entity.mapper';
import { ProductsLocalDataSource } from '../datasources/products/source/products-local.datasource';
import { ProductDboToEntityMapper } from './products/mappers/product-dbo-to-entity.mapper';

@Injectable()
export class ProductsRepositoryImp extends ProductsRepository {
  private readonly remote = inject(ProductsRemoteDataSource);
  private readonly dtoMapper = inject(ProductDtoToEntityMapper);
  private readonly local = inject(ProductsLocalDataSource);
  private readonly dboMapper = inject(ProductDboToEntityMapper);

  //Si no hay productos en local, pedirlos al remoto
  override getProducts(): Observable<ProductsEntity>{
    return this.local.getProducts().pipe(
      switchMap((cached) => {
    
        if (cached) {
          console.log(`Obtenido de cache: ${cached}`);

          return of(this.dboMapper.mapListFrom(cached));
        }
        return this.remote.getProducts().pipe(
          tap((dto) => {
            this.local.
          })
          
          map((dto) => this.dtoMapper.mapListFrom(dto)));
      }
    
    ),
    );
  }
}
