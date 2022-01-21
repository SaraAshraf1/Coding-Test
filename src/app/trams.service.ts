import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Tram } from './ITrams';

@Injectable({
  providedIn: 'root',
})
export class TramsService {
  url: string;
  constructor(private http: HttpClient) {
    this.url =
      'https://api.sl.se/api2/realtimedeparturesV4.json?key=845eb737ed31458c892a91c9aa186ba0&siteid=1555&timewindow=60';
  }
  getTrams(): Observable<any> {
    return this.http.get<any>(this.url).pipe(
      map((Result) => {
        var data = Result.ResponseData.Trams;
        return data as Tram[];
      })
    );
  }
}
