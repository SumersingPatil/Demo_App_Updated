
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Productstbl } from 'src/app/models/manageproduct.model';


@Component({
  selector: 'app-manageproduct',
  templateUrl: './manageproduct.component.html'
  //styleUrls: ['./manageproduct.component.css']
})
export class ManageproductComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    let auth_token = "WebAuth1234";
  
    const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${auth_token}`
      });
 
    const requestOptions = { headers: headers };
     this.ShowData();
    
  }

  ShowData()
  {
    console.log("hi");
    this.http.get("https://www.aspiresoft.co.ke/Wt/APIs.aspx/getproductlisting")
  
    .subscribe(res => this.GetFromServer(res), res=>console.log(res));
  }  
  GetFromServer(res:any)
  {
    console.log(res);
    this.getData=res;
  }

  productstbls:Productstbl=new Productstbl();
 
  getData: Array<Productstbl>= new Array<Productstbl>();

  AddProduct() {
    var addData = {
      username:this.productstbls.username,
      itemcode:this.productstbls.itemcode,
      desc:this.productstbls.desc,
      packging:this.productstbls.packging,
      unit:this.productstbls.unit,
      photo:this.productstbls.photo
    }
    console.log(addData);
    console.log(this.productstbls);
    const newLocal = "https://www.aspiresoft.co.ke/Wt/APIs.aspx/additem";
    this.http.post(newLocal, addData)
    .subscribe(res => { this.ShowData();; console.log(res) }, res => console.log(res));
    this.productstbls= new Productstbl();
  
  }

  


  
}
