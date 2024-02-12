import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit{
  username:string = 'postmodern';

  constructor(private apiService:ApiService, private dataService:DataService){
  }


  ngOnInit(): void {
    this.apiService.fetchUserData(this.username)
       .subscribe({
        next: (userData) => {
          console.log(userData);
          this.dataService.setUserData(userData);
        },
        error: (err) => {
          console.error(`Following Error occured: ${err}`);
        }
       })

       this.apiService.fetchReposData(this.username)
       .subscribe({
        next: (repoData) => {
          console.log(repoData);
          this.dataService.setUserData(repoData);
        },
        error: (err) => {
          console.error(`Following Error occured: ${err}`);
        }
       })

  }
}
