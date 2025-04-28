import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  mouseclicked : string[] = [];
  ngOnInit(): void {

  this.mouseclicked = new Array(5).fill('');
    
  }

  constructor() {}

  onClick(index : number) : void{

    this.mouseclicked.fill('');

    this.mouseclicked[index] = 'mouseclicked';

  }

}
