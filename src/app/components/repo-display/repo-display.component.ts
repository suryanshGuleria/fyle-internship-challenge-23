import { Component, OnInit } from '@angular/core';
import { repoModel } from 'src/app/models/repo-model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-repo-display',
  templateUrl: './repo-display.component.html',
  styleUrls: ['./repo-display.component.scss']
})
export class RepoDisplayComponent implements OnInit {
  repoData:repoModel ={}; 

  constructor(private dataService:DataService){
  }

  ngOnInit(): void {
    this.repoData = this.dataService.getRepoData();
    console.log(this.repoData);
  }
}
