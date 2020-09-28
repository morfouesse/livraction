import { stringify } from '@angular/compiler/src/util';
import { Injectable, resolveForwardRef } from '@angular/core';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  //method assyncrone, si l'authantification fonctionne
  // alors on résout sinon on rejette l'erreur
  createNewUser(email: string, password: string)
  {
    return new Promise(
      (resolve, reject) => {
        firebase.auth().createUserWithEmailAndPassword(email, password).then(
          () => {
            resolve();
          },
          (error) => {
            reject(error);
          }
        );
      }
    )
  
  }

  signInUser(email: string, password: string)
  {
    return new Promise(
      (resolve, reject) => {
        firebase.auth().signInWithEmailAndPassword(email, password).then(
          () => {
            resolve();
          },
          (error) => {
            reject(error);
          }
        );
      }
    )
  }

  signOut()
  {
    firebase.auth().signOut();
  }
}
