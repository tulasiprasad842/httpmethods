import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { Api1Service } from 'src/app/swaggers/swagger1/api1.service';
import {  Sender } from '../_model/swaggerModel';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-swagger1',
  templateUrl: './swagger1.component.html',
  styleUrls: ['./swagger1.component.css']
})
export class Swagger1Component implements OnInit {
  senders: Sender[];
  public dataSource;
  public pagesize=environment.pageSize;
  displayedColumns: string[] = ['senderName', 'status'];
   @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor(private api1service: Api1Service) {
  }

  ngOnInit() {
    this.getSenders();
  
  }

  getSenders() {
    this.api1service.getSender().subscribe(res => {
      this.senders = res['senders'];
      console.log("Senders==>",this.senders);
      

          this.dataSource = new MatTableDataSource(this.senders);
          this.dataSource.paginator = this.paginator;
          // this.dataSource.paginator=this.paginator;

       (error) => {
        console.log("Error ->", error);
    }
        
      }
    )
  }

}
