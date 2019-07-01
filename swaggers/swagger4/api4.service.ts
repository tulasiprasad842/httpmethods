import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICreate } from '../_model/swaggerModel';

@Injectable({
  providedIn: 'root'
})
export class Api4Service {

  constructor(private http:HttpClient) { }

  getdata2(){
    return this.http.get('http://202.65.158.172:9092/interfaceinfo/1/all');
  }

  postdata(create:ICreate){
    console.log("create,",create)
    return this.http.post('http://202.65.158.172:9092/interfaceinfo/18/create/18', create);
  }


  putdata(updatedata){
    return this.http.put("http://202.65.158.172:9092/interfaceinfo/18/update/18", updatedata)
  }
}
