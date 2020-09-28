import { Component } from '@angular/core';
import * as firebase from 'firebase';


//lie la BDD à l'application web

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor()
  {
    var firebaseConfig = {
      apiKey: "AIzaSyCiBxnyffKc_JXLrxubc3ia-yQppDM_CfA",
      authDomain: "livraction-e7965.firebaseapp.com",
      databaseURL: "https://livraction-e7965.firebaseio.com",
      projectId: "livraction-e7965",
      storageBucket: "livraction-e7965.appspot.com",
      messagingSenderId: "434159561277",
      appId: "1:434159561277:web:5e579c0bd7919961a09854",
      measurementId: "G-KHEPVVX1TT"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
  
  }
}
