import { Component, OnInit } from '@angular/core';
import { ICurrentTvShow } from '../icurrent-tv-show';

@Component({
  selector: 'app-current-inf-tvshow',
  templateUrl: './current-inf-tvshow.component.html',
  styleUrls: ['./current-inf-tvshow.component.css']
})
export class CurrentInfTvshowComponent implements OnInit {
  current: ICurrentTvShow

  constructor() {
    this.current = {
      name: 'Boys',
      country: 'US',
      language: 'Russion',
      genres: ['Drama','Horror'],
      officialSite: 'http://www.hbo.com/girls',
      rating: 9.2,
      weight: 98,
      summary: 'Bla-bla-bla-bla-bla',
      image: 'http://static.tvmaze.com/uploads/images/medium_portrait/31/78286.jpg',
      premiered: new Date(),
      status: 'Ended'
    }
   }

  ngOnInit(): void {
  }

}
