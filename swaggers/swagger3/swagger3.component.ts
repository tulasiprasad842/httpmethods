import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_models';
import { Api3Service } from './api3.service';
import { MatTableDataSource } from '@angular/material';
import { OfflineAlert, IntervalType } from '../_model/swaggerModel';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-swagger3',
  templateUrl: './swagger3.component.html',
  styleUrls: ['./swagger3.component.css']
})
export class Swagger3Component implements OnInit {
  offlineAlerts: OfflineAlert[];
  intervalType: IntervalType[];
  public dataSource;
  public pagesize=environment.pagesize;

  displayedColumns: string[]=['intervalName', 'intervalTypeId', 'alertOfflineId', 'delimiter', 'deptId', 'deptName', 'filePattern', 
  'filepath', 'filetype', 'header', 'intervalValue', 'message', 'messageType', 'mobileColumn', 'movePath', 'offlineAlertName', 'senderId', 'serviceId', 'status'];
  constructor(private apiservice:Api3Service) { }

  ngOnInit() {
    this.getData1();
  }
    getData1(){
      this.apiservice.getdata1().subscribe(res=>{
        this.offlineAlerts=res['offlineAlerts'];
        console.log("Data1==>", this.offlineAlerts);
        this.dataSource=new MatTableDataSource(this.offlineAlerts);
      });
      (error)=>{
      console.log("Error-->", error);
      }
    }
}
