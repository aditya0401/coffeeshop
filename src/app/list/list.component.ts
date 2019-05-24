import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Coffee } from '../logic/coffee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  list : [Coffee]
  constructor(private data: DataService, private router: Router) { }

  ngOnInit() {
    this.data.getList(list =>{
      this.list = list;
    })
  }
  coffeeDetails(coffee : Coffee){
    this.router.navigate(["/coffee", coffee._id])
    console.log(coffee);
  }

}
