import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InterfaceInfo, ICreate } from '../../../_model/swaggerModel';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Api4Service } from '../../api4.service';



@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  interfaceForm: FormGroup;
  InterfaceData: ICreate;
  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<CreateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private apiservice: Api4Service) { }

  ngOnInit() {
    this.interfaceForm = this.fb.group({
      interfaceName: [null, Validators.required],
      interfaceDesc: [null, Validators.required],
      interfaceCode: [null, Validators.required]
    });
  }
  onNoClick() {
    this.dialogRef.close();
  }

  getpostdata() {
    this.InterfaceData = {
      interfaceCode: (this.interfaceForm.value.interfaceCode),
      interfaceName: (this.interfaceForm.value.interfaceName),
      interfaceDesc: (this.interfaceForm.value.interfaceDesc)
    
    }
    console.log("create==>", this.InterfaceData);
    this.apiservice.postdata(this.InterfaceData).subscribe(response => {
      if (response) {
        this.dialogRef.close(this.InterfaceData);
      } else {
      }
    })


  }



}
