import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/service/auth.service';
import { SingInService } from 'src/app/services/signIn/sing-in.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  error = '';
  hide = true;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private signInService: SingInService,
    private matSnackBar: MatSnackBar,
  ) {}
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  get f() {
    return this.loginForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    this.error = '';
    if (this.loginForm.invalid) {
      this.error = 'Username and Password are required !';
      return;
    } else {
      this.signInService.loginAuthenticate(this.loginForm.value).subscribe((response: any) => {
        if (response && response.firstname && response.email) {
          localStorage.setItem('userInfo', JSON.stringify(response));
          this.signInService.setLoggedInUserInfo(response);
          this.router.navigate(['/dashboard/main']);
        } else {
          this.matSnackBar.open('Invalid UserName or Password', '', {
            duration: 2000,
            verticalPosition: 'top',
            horizontalPosition: 'right',
            panelClass: ['bg-red'],
          });
        }
      })

      // this.authService
      //   .login(this.f.username.value, this.f.password.value)
      //   .subscribe(
      //     (res) => {
      //       if (res) {
      //         const token = this.authService.currentUserValue.token;
      //         if (token) {
      //           this.router.navigate(['/dashboard/main']);
      //         }
      //       } else {
      //         this.error = 'Invalid Login';
      //       }
      //     },
      //     (error) => {
      //       this.error = error;
      //       this.submitted = false;
      //     }
      //   );
    }
  }
}
