import { Injectable } from '@angular/core';
import { TimelineEvent } from './timeline-event';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getTimelineEvents(): TimelineEvent[] {
    return [
      {
        year: `1991`,
        description: `Born`
      },
      {
        year: `2011`,
        description: `Graduated Riga State Gymnasium No.1`
      },
      {
        year: `2011-2013`,
        description: `Programming and Administration of Computer Networks at Latvijas Universitāte`
      },
      {
        year: `2011-2015`,
        description: `Bachelor's degree in Computer Science at Latvijas Universitāte`
      },
      {
        year: `2015-2017`,
        description: `Master's degree in Computer Science at Free University of Bozen - Bolzano`
      },
      {
        year: `Nov 2017 – Dec 2017`,
        description: `Research Assistant at Free University of Bozen - Bolzano`
      }
    ];
  }
}
