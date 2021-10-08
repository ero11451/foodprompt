import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'transmonitor';
  loggedIn = true;
  currentRoute 
  constructor(private router: Router) {
   
    console.log('router', this.router.url)
    this.router.events.pipe(filter(event => event instanceof NavigationEnd))
    .pipe(map(d => d))
    .subscribe(event => 
     {
        this.currentRoute = event;          
      console.log(event);
      if (this.currentRoute.url == '/') {
        this.loggedIn = false
      }
     });
}
    
  
 

  user: Object = {
    firstName:"Oluyemi",
    password:null
  };

  userObjectPassedOnSubmit = null;

    onSubmitTemplateBased(userObjectPassedOnSubmit) {
        console.log("this.user",this.user);
        console.log("userObjectPassedOnSubmit",userObjectPassedOnSubmit);
        this.userObjectPassedOnSubmit = userObjectPassedOnSubmit;
    }

}
