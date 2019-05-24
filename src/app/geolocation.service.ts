import { Injectable } from '@angular/core';
import { PlaceLocation } from './logic/PlaceLocation';

@Injectable()
export class GeolocationService {

  constructor() { }

  requestLocation(callback){
    //W3c geolocation API
      navigator.geolocation.getCurrentPosition(
        position =>{
          callback(position.coords);
        },
        error =>{
          callback(null);
        }
      )
  }

  getMapLink(location: PlaceLocation){
    let query = "";
    if(location.latitude){
      query = location.latitude + "," + location.longitude;
    }else{
      query = '$(location.address),$(location.city)';
    }
    if(/iPad|iPhone|ipod/.test(navigator.userAgent)){
      return 'https://maps.apple.com/?q=${query)';
    }else{
      return "https://maps.google.com/?q=$(query)";
    }
    //universal link
    //<a href="https://maps.google.com/?q=Eiffel+Tower">
    //<a href="https://maps.apple.com/?q=34.44,65.44">
  }
}
