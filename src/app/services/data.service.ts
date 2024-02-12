import { Injectable } from '@angular/core';
import { userModel } from '../models/user-model';
import { repoModel } from '../models/repo-model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  userData: userModel = {};
  repoData: repoModel = {};
  isLoading: boolean = false;

  constructor() { }

  // Data Setters
  async setUserData(data: userModel) {
    this.userData = data;
    console.log(this.userData);
  }

  async setRepoData(data: repoModel) {
    this.repoData = data;
    console.log(this.repoData);
  }

  async setLoadingState(value: boolean) {
    this.isLoading = value;
    console.log(this.isLoading)
  }
}
