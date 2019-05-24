import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router'
import { Coffee } from '../logic/coffee';
import { GeolocationService } from '../geolocation.service';
import { TastingRating } from '../logic/TastingRating';
import { DataService } from '../data.service';
@Component({
  selector: 'app-coffee',
  templateUrl: './coffee.component.html',
  styleUrls: ['./coffee.component.css']
})
export class CoffeeComponent implements OnInit {

  coffee: Coffee;
  types = ["Espresso","Latte","Cappuccino","Americano","Cream Coffee"];
  constructor(private route : ActivatedRoute, private geolocation : GeolocationService, private router : Router
  ,private data: DataService){ }

  routingSubscription: any;
  ngOnInit() {
    this.coffee = new Coffee();
    this.routingSubscription = this.route.params.subscribe(
      params => {
        console.log(params["id"]);
        if(params["id"]){
          this.data.getPerticularCoffeeDetail(params["id"],response =>{
            this.coffee = response;
          })
        }
      });
      this.geolocation.requestLocation(
        location => {
          if(location){
            this.coffee.location.latitude = location.latitude;
            console.log(location.latitude);
            this.coffee.location.longitude = location.longitude;
          }
          else{
            console.log("NO");
          }
        }
      )
  }
  //function to go to root folder when clicked on cancel
  cancel(){
    this.router.navigate(["/"]);
  }
  //function to perform saving a coffee
  save(){
    this.data.save(this.coffee,result=>{
      if(result){
        this.router.navigate(["/"]);
      }
    });
  }
  tastingRatingChanged(checked :boolean){
    if(checked){
      this.coffee.tastingRating = new TastingRating();
    }else{
      this.coffee.tastingRating = null;
    }
    
  }

  ngDestroy(){
    this.routingSubscription.unsubscribe();
  }

}
