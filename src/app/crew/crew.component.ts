import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {


  crew: string[] = ["Jessica Watkins", "Raja Chari", "Jasmine Mogbeli"];

  constructor() { }

  ngOnInit(): void {
  }

}
