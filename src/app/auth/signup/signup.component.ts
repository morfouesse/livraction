import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signUpForm: FormGroup;
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
    this.signUpForm = this.formBuilder.group(
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
    const email = this.signUpForm.get('email').value;
    const password = this.signUpForm.get('password').value;
    this.authService.createNewUser(email,password).then(
      () => {
        this.router.navigate(['/books']);
      },
      (error) => {
        this.errorMessage = error;
      }
    )
  }

}
