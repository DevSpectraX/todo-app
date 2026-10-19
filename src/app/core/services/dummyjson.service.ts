import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { DummyjsonProductInterface, DummyjsonResponseInterface } from "../interface/dummyjson-product.interface";
import { map, Observable } from "rxjs";
import { API_URL } from "../config/constants/dummyjson.constants";
import { ImplicitReceiver } from "@angular/compiler";


@Injectable({ providedIn: 'root' })
export class DummyJsonService {
  private readonly http = inject(HttpClient);

getProductsList(): Observable<DummyjsonProductInterface[]> {
  return this.http.get<DummyjsonResponseInterface>(`${API_URL}/products`).pipe(
    map(response => response.products)
  );
}
}