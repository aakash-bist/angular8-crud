import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  uri = 'http://localhost:3000/mean';
  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get(`${this.uri}`);
  }

  addData(object): Observable<any> {
    return this.http.post(`${this.uri}/add`, object);
  }

  getDataById(id) {
    return this.http.get(`${this.uri}/edit/${id}`);
  }

  updateData(data, id){
return this.http.post(`${this.uri}/update/${id}`,data);
  }

  deleteData(id) {
    return this.http.get(`${this.uri}/delete/${id}`);
  }



}
