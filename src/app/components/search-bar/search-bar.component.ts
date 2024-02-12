import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  username: string = 'suryanshGuleria';

  constructor(private apiService: ApiService, private dataService: DataService) { }

  ngOnInit(): void {
    this.fetchData();
  }

  onSubmit(): void {
    this.fetchData();
  }


  //fetching userData and repoData
  private fetchData(): void {
    //setting loadin state for skeleton loader
    this.dataService.setLoadingState(true);
    this.apiService.fetchUserData(this.username)
      .subscribe({
        next: (userData) => {
          this.dataService.setUserData(userData);
        },
        error: (err) => {
          console.error(`Following Error occured: ${err}`);
        }
      });

    this.apiService.fetchReposData(this.username)
      .subscribe({
        next: (repoData) => {
          this.dataService.setUserData(repoData);
        },
        error: (err) => {
          console.error(`Following Error occured: ${err}`);
        },
        complete: ()=>{
          //setting loading state back to false
          this.dataService.setLoadingState(false);
        }
      });
  }
}
