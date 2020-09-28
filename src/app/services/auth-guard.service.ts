import { Injectable, resolveForwardRef } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router: Router) { }

  //quand le statut d'authentification va changer,
  //si une personne est connnecter alors il aura pas de restriction
  // sinon la personne est redirigé systématiquement vers l'authentification
  canActivate(): Observable<boolean> | Promise<boolean> | boolean
  {
    return new Promise(
      (resolve,reject) =>
      {
         firebase.auth().onAuthStateChanged(
        (user) =>
        {
          if(user)
          {// on laisse passé l'user sur cette route
            resolve(true);
          }
          else
          {// sinon on le fait naviguer vers cette route
            //plusieurs élément dans l'url ex:/auth/signin = en dessous
            this.router.navigate(['/auth','signin']);
            resolve(false);
          }
        }
      );
      }
    );
  }

}
