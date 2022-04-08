import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-firstpage',
  templateUrl: './firstpage.component.html',
  styleUrls: ['./firstpage.component.css']
})
export class FirstpageComponent implements OnInit {

  images = ['assets/parai.jpg','assets/paraf.jpg','assets/paral.png']
  constructor() { }

  ngOnInit(): void {
  }

}
