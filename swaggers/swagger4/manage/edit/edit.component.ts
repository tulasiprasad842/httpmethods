import { Component, OnInit, Inject } from '@angular/core';
import { IUpdate } from 'src/app/swaggers/_model/swaggerModel';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Api4Service } from '../../api4.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
InterfaceData:IUpdate;
interForm:FormGroup;
  constructor(private fb:FormBuilder, public dialogRef:MatDialogRef<EditComponent>,
     @Inject(MAT_DIALOG_DATA) public data: any, private apiservice: Api4Service) { }

  ngOnInit() {
    this.interForm=this.fb.group({
      
    })
  }

}
