import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'transmonitor';
  loggedIn = true;


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
