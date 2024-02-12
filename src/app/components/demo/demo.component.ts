import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit{
  username:string = 'postmodern';

  constructor(private service:ApiService){
  }


  ngOnInit(): void {
    this.service.fetchUserData(this.username)
       .subscribe({
        next: (data) => {
          console.log(data);
        },
        error: (err) => {
          console.error(`Following Error occured: ${err}`);
        }
       })

       this.service.fetchReposData(this.username)
       .subscribe({
        next: (data) => {
          console.log(data);
        },
        error: (err) => {
          console.error(`Following Error occured: ${err}`);
        }
       })

  }
}
