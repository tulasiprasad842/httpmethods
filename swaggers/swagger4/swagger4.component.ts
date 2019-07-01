import { Component, OnInit, ViewChild } from '@angular/core';
import { InterfaceInfo } from '../_model/swaggerModel';
import { Api4Service } from './api4.service';
import { environment } from '../../../environments/environment';
import { MatDialog } from '@angular/material';
import { CreateComponent } from './manage/create/create.component';

@Component({
  selector: 'app-swagger4',
  templateUrl: './swagger4.component.html',
  styleUrls: ['./swagger4.component.css']
})
export class Swagger4Component implements OnInit {
  public users: InterfaceInfo[];
  initPage = 0;
  pageSize = environment.pageSize;
  //   public dataSource;
  //   displayedColumns:string[]=['interfaceCode', 'interfaceDesc', 'interfaceId', 'interfaceName', 'status'];
  // @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  //  @ViewChild(MatSort, {static:true}) sort:MatSort;
  constructor(private apiservice: Api4Service, private dialog: MatDialog) { }

  ngOnInit() {
    this.getData2();
  }

  getData2() {
    this.apiservice.getdata2().subscribe(res => {
      this.users = res['interfaceInfo'];
      console.log("Data2==>", this.users);
      // this.dataSource=new MatTableDataSource(this.interfaceInfo);
      // this.dataSource.paginator = this.paginator;
      // this.dataSource.sort = this.sort;
    });
    (error) => {
      console.log("Error-->", error);
    }
  }


  openDialogCreate() {
    const dialogRef = this.dialog.open(CreateComponent, {
      width: '390px',
    });

    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        this.getData2();
        //  this.users.push(res);
        //  console.log("post",res)
      }
    })

  }
  // getData(pageData) {
  //   let index=0;
  //   let startingIndex =pageData.pageIndex * 
  // }
  // sortData(){
  //   this.dataSource.sort = this.sort;
  // }

}
