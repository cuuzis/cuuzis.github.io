import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { TimelineEvent } from './timeline-event';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  events: TimelineEvent[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.events = this.dataService.getTimelineEvents();
  }

}
