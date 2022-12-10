import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { RestRequest } from '../../../core/res-request';
import { forkJoin } from 'rxjs';
import { catchError, tap, switchMap } from 'rxjs/operators';
import { AuthenticationService } from '../authentication.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { error } from '@angular/compiler/src/util';
import { CommonService } from '../../../core/common.service';
import { PropertiesService } from '../../../common/properties.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  show_password: Boolean;
  loader: Boolean;
  submitted = false;
  obj: any;
  signinForm: FormGroup;
  Isremember = false;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private loginservice: AuthenticationService,
    private restRequest: RestRequest,
    private http: HttpClient,
    private commonService: CommonService,
    private propertiesService: PropertiesService
  ) {}
  ngOnInit(): void {
    this.loader = false;
    this.show_password = false;
    this.signinForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: [
        '',
        [
          Validators.required,
          // Validators.pattern(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,}$/)
        ],
      ],
    });
    localStorage.removeItem('userInfo');
    localStorage.removeItem('userId');
    localStorage.removeItem('currentSession');
    if (localStorage.getItem('Isremember') == '1') {
      this.signinForm.patchValue({
        email: localStorage.getItem('email'),
        password: localStorage.getItem('password'),
      });
      this.Isremember = true;
    }
  }
  get f() {
    return this.signinForm.controls;
  }
  forgetpassword() {
    //  // this.loginservice.forgetpassword().subscribe((result: any) => {
    //     //this.commonService.toast(result.message, 'Success');
    //   },
    //     (error: any) => {
    //       this.loader = false;
    //       //this.commonService.toast(error.error.message, 'Error');
    //     })
    this.router.navigateByUrl('auth/forgetpassword');
  }
  register() {
    //  // this.loginservice.forgetpassword().subscribe((result: any) => {
    //     //this.commonService.toast(result.message, 'Success');
    //   },
    //     (error: any) => {
    //       this.loader = false;
    //       //this.commonService.toast(error.error.message, 'Error');
    //     })
    this.router.navigateByUrl('auth/register');
  }

  // authenticate2() {
  //   if (!this.signinForm.invalid) {
  //     this.submitted = true;
  //     this.loader = true;
  //     this.obj = {
  //       email: this.signinForm.controls.email.value,
  //       password: this.signinForm.controls.password.value,
  //     }
  //     this.loginservice.AdminTaxilogin(this.obj).subscribe(responseList => {
  //       let responseData1 : any = responseList[0];
  //       let responseData2 = responseList[1];
  //       console.log(responseData1, responseData2, "response test")
  //       if (responseData1){
  //         localStorage.setItem('type', '0');
  //       localStorage.setItem('currentSession', responseData1.data.token);
  //       localStorage.setItem('userInfo', JSON.stringify(responseData1.data));
  //       localStorage.setItem('userId', responseData1.data._id);
  //         this.router.navigate(['/admin/header']);
  //       }else if (responseData2){
  //         localStorage.setItem('type', '1');
  //       localStorage.setItem('currentSession', responseData1.data.token);
  //       localStorage.setItem('userInfo', JSON.stringify(responseData1.data));
  //       localStorage.setItem('userId', responseData1.data._id);
  //         this.router.navigate(['/admin/sidebar']);
  //       }else{
  //         console.log("testing321")
  //       }
  //   });
  // }}

  authenticate1() {
    //  this.router.navigate(['/admin/employee-list']);
    //this.router.navigate(['/taxi/dashboard']);
    // this.commonService.toast("Login Successfully.", 'Success');
    if (!this.signinForm.invalid) {
      this.submitted = true;
      this.loader = true;
      this.obj = {
        email: this.signinForm.controls.email.value,
        password: this.signinForm.controls.password.value,
      };
      this.loginservice
        .Adminlogin(this.obj)
        .pipe(
          tap((user: any) => {
            //console.log(user, "testing usre")
            if (user) {
              if (this.Isremember) {
                localStorage.setItem(
                  'email',
                  this.signinForm.controls.email.value
                );
                localStorage.setItem(
                  'password',
                  this.signinForm.controls.password.value
                );
                localStorage.setItem('Isremember', '1');
              } else {
                localStorage.removeItem('email');
                localStorage.removeItem('password');
                localStorage.removeItem('Isremember');
              }
              localStorage.setItem('type', '0');

              localStorage.setItem('userId', user._id);
              localStorage.setItem('isAdmin', user.isAdmin);
              if (user.isAdmin) {
                this.router.navigate(['/admin/employee-list']);
              } else {
                this.router.navigate([`/admin/user-docs/${user._id}`]);
              }
              this.commonService.toast(user.message, 'Success');
            }
          })
        )
        .pipe(
          catchError((error: any) => {
            return error;
          })
        )
        .pipe(
          catchError((error: any) => {
            this.loader = false;
            this.commonService.toast(error.error.message, 'Error');
            return error;
          })
        )
        .subscribe();
    }
  }

  // authenticate() {
  //   if (!this.signinForm.invalid) {
  //     this.submitted = true;
  //     this.loader = true;
  //     this.obj = {
  //       email: this.signinForm.controls.email.value,
  //       password: this.signinForm.controls.password.value,
  //     }
  //     this.loginservice.Adminlogin(this.obj).subscribe((result: any) => {
  //       this.loader = false;
  //       localStorage.setItem('type', '0');
  //       localStorage.setItem('currentSession', result.data.token);
  //       localStorage.setItem('userInfo', JSON.stringify(result.data));
  //       localStorage.setItem('userId', result.data._id);
  //       this.router.navigate(['/admin/header']);
  //       //this.commonService.toast(result.message, 'Success');
  //     },
  //       (error: any) => {
  //         this.loader = false;
  //         this.taxiusercheck()
  //       })
  //   }
  // }
  // taxiusercheck(){
  //     this.loginservice.Adminlogin(this.obj).subscribe((result: any) => {
  //           localStorage.setItem('type', '1');
  //       localStorage.setItem('currentSession', result.data.token);
  //       localStorage.setItem('userInfo', JSON.stringify(result.data));
  //       localStorage.setItem('userId', result.data._id);
  //       this.router.navigate(['/admin/sidebar']);
  //         },
  //         (error: any)=> {
  //           this.loader = false;
  //         })
  // }
  rememberMe(obj) {
    if (obj.checked) {
      this.Isremember = true;
    } else {
      this.Isremember = false;
    }
  }
  togglePasswordView() {
    if (this.show_password === true) {
      this.show_password = false;
    } else {
      this.show_password = true;
    }
  }
}
