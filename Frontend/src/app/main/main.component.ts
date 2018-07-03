import { Component, OnInit } from '@angular/core';
import {Trip} from '../trip';

@Component({
  moduleId: module.id,
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  trip: Trip = {
    id: 1,
    trip_type: 'roadtrip',
    origin: 'Lisbon',
    destiny: 'Japan',
    start_date: '01-03-2019',
    end_date: '15-03-2019',
    duration: 15,
    price: 3000
  };

  constructor() { }
}
