import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICurrentTvShow } from './icurrent-tv-show';
import { ICurrentTvShowData } from './icurrent-tv-show-data';

@Injectable({
  providedIn: 'root'
})
export class TvshowService {

  constructor(private httpClient: HttpClient) { }

  getCurrentTvShow(name: string){
    this.httpClient.get<ICurrentTvShowData>(`http://api.tvmaze.com/singlesearch/shows?q=${name}`)
  }
  private transformToIcurrentTvShow(data: ICurrentTvShowData): ICurrentTvShow{
    
  }
}
