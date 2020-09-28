import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  signIpForm: FormGroup;
  errorMessage: string;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private router: Router) { }


  // cette methode est exécuterau moment de la création du component de angular
  // et apres l'exécution du constructor,qaund le composant est crée il va dans cette methode
  // en premier
  ngOnInit(): void {
    this.initForm();
  }

  initForm()
  {///form
    this.signIpForm = this.formBuilder.group(
      {
        email: ['', [ Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/)]]
      }
    );
  }
  onSubmit()
  {// valider le form en prenant les données du form et
    // en les envoyants à la methode pour faire un nouvel user
    // et si il y a pas d'erreur on va vers books sinon message d'erreur
    const email = this.signIpForm.get('email').value;
    const password = this.signIpForm.get('password').value;
    this.authService.signInUser(email,password).then(
      () => {
        this.router.navigate(['/books']);
      },
      (error) => {
        this.errorMessage = error;
      }
    )
  }
}
