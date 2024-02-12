import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { userModel } from '../models/user-model';
import { repoModel } from '../models/repo-model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  userData:userModel = {};
   
  private baseUrl:string = `https://api.github.com/users/`;

  constructor(
    private httpClient: HttpClient
  ) { }

  fetchUserData(githubUsername: string) {
    const getUserUrl:string = `${this.baseUrl}${githubUsername}`;
    return this.httpClient.get<userModel>(getUserUrl);
  }

  // implement getRepos method by referring to the documentation. Add proper types for the return type and params 
  fetchReposData(githubUsername: string){
    const getReposUrl:string = `${this.baseUrl}${githubUsername}/repos`;
    return this.httpClient.get<repoModel>(getReposUrl);
  }
}
