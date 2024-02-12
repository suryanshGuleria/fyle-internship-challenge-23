import { Injectable } from '@angular/core';
import { userModel } from '../models/user-model';
import { repoModel } from '../models/repo-model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private userData: userModel ={};
  private repoData: repoModel ={};
  private isLoading:boolean = false;

  constructor() { }

  // Data Setters
  setUserData(data:userModel){
    this.userData = data;
  }

  setRepoData(data:userModel){
    this.repoData = data;
  }

  setLoadingState(value:boolean){
    this.isLoading = value;
  }

  //Data Getters
  getUserData(){
    return this.userData;
  }

  getRepoData(){
    return this.repoData;
  }

  getLoadingState(){
    return this.isLoading;
  }
}
