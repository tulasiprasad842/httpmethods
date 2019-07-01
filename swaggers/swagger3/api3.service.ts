import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Api3Service {

  constructor(private http:HttpClient){ }

  getdata1(){
    return this.http.get('http://202.65.158.172:9092/alertoffline/1/all');
  }
}
