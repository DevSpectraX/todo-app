import { inject, Injectable } from '@angular/core';
import { ProductsRepository } from '../../domain/repositories/products/products.repository';
import { map, Observable, of, switchMap, tap} from 'rxjs';
import { ProductsEntity } from '../../domain/entities/products/product.entity';
import { ProductsRemoteDataSource } from '../datasources/products/source/products-remote.datasource';
import { ProductDtoToEntityMapper } from './products/mappers/product-dto-to-entity.mapper';
import { ProductsLocalDataSource } from '../datasources/products/source/products-local.datasource';
import { ProductDboToEntityMapper } from './products/mappers/product-dbo-to-entity.mapper';
import { ProductDtoToDboMapper } from './products/mappers/product-dto-to-dbo.mapper';


@Injectable()
export class ProductsRepositoryImp extends ProductsRepository {
  private readonly remote = inject(ProductsRemoteDataSource);
  private readonly dtoToEntityMapper = inject(ProductDtoToEntityMapper);
  private readonly local = inject(ProductsLocalDataSource);
  private readonly dboToEntityMapper = inject(ProductDboToEntityMapper);
  private readonly dtoToDboMapper = inject(ProductDtoToDboMapper);

  //Si no hay productos en local, pedirlos al remoto
  override getProducts(): Observable<ProductsEntity>{
    return this.local.getProducts().pipe(
      switchMap((cached) => {
    
        if (cached) {
          console.log(`Obtenido de cache: ${cached}`);

          return of(this.dboToEntityMapper.mapListFrom(cached));
        }
        return this.remote.getProducts().pipe(
          tap((dto) => {
            this.local.saveProducts((this.dtoToDboMapper.mapListFrom(dto)))
            console.log(this.dtoToDboMapper.mapListFrom(dto))
            
          }),
          
          map((dto) => this.dtoToEntityMapper.mapListFrom(dto)));
      }
    
    ),
    );
  }
}
