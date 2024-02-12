import { Component, OnInit } from '@angular/core';
import { userModel } from 'src/app/models/user-model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-profile-banner',
  templateUrl: './profile-banner.component.html',
  styleUrls: ['./profile-banner.component.scss']
})
export class ProfileBannerComponent implements OnInit{
    userData:userModel = {};

    constructor(private dataService:DataService){
    }

    ngOnInit(): void {
      this.userData = this.dataService.getUserData();
      console.log(this.userData);
    }
}
