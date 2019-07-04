import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from '../interface';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  constructor(private http: HttpClient) {

  }
  fetch(): Observable<Category[]> {
       return this.http.get<Category[]>('/api/category');

  }


  getById(id: string): Observable<Category>{
   return this.http.get<Category>(`/api/category/${id}`);
  }


  create(name: string , image?: File){
    this.http.post()
  }

}


