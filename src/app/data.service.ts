import { Injectable } from '@angular/core';
import { Coffee } from './logic/coffee';
import { PlaceLocation } from './logic/PlaceLocation';
import { HttpClient } from '@angular/common/http';
import { UtilService } from "./util.service";

@Injectable()
export class DataService {

  constructor( private http: HttpClient, private utilservice: UtilService) { }
  public ip = this.utilservice.ipAddress;
  //public endpoint = "http://" + this.ip +":3000";
  public endpoint = "http://localhost:3000";
  getList(callback){
    console.log(this.endpoint);
    //TO DO : integrate with real WService
    // const list = [
    //   new Coffee("espress","sunny cafe",new PlaceLocation( "123 market street","new yoek")),
    //   new Coffee("latte","shine cafe",new PlaceLocation( "market plaza","new jercy"))
    // ];
    //callback(list);
    this.http.get(`${this.endpoint}/coffees`).subscribe(
         response => {
           console.log(response);
           callback(response);
         }
      );
  }

  save(coffee,callback){
    //TO DO : integrate with real WService
     if(coffee._id){
      this.http.put(`${this.endpoint}/coffees/${coffee._id}`,coffee).subscribe(
        response =>{
          callback(true);
        }
      );
     }else{
      this.http.post(`${this.endpoint}/coffees`,coffee).subscribe(
        response =>{
          callback(true);
        }
      );
    }
    
    
  }
  getPerticularCoffeeDetail(coffeeId : string, callback){
    this.http.get(`${this.endpoint}/coffees/${coffeeId}`).subscribe(
      response => {
        console.log(response);
        callback(response);
      }
   );
  }
}
