import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class Api1Service {

  constructor(private http:HttpClient) {}

  getSender(){
    return this.http.get('http://202.65.158.172:9092/sender/1/allSenders');
  }
}


