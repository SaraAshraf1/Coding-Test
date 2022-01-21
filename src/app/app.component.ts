import { Component, OnInit } from '@angular/core';
import { Tram } from './ITrams';
import { TramsService } from './trams.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  isSuccess: boolean = true;
  tramsToWardGullmarsplan: Tram[];

  constructor(public tramsService: TramsService) {
    this.tramsService.getTrams().subscribe(
      (mårtensdalTrams: Tram[]) => {
        this.tramsToWardGullmarsplan = mårtensdalTrams.filter(
          (x) => x.JourneyDirection == 1
        );
        this.isSuccess = true;
      },
      (error) => {
        this.isSuccess = false;
        console.error(error.error);
      }
    );
  }

  ngOnInit(): void {}
}
