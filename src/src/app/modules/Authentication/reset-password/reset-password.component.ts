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

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css'],
})
export class ResetPasswordComponent implements OnInit {
  show_password: Boolean;
  loader: Boolean;
  submitted = false;
  obj: any;
  signinForm: FormGroup;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private loginservice: AuthenticationService,
    private restRequest: RestRequest,
    private http: HttpClient,
    private commonService: CommonService
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
    this.router.navigateByUrl('auth/resetpassword');
  }
  Back() {
    this.router.navigateByUrl('auth/forgetpassword');
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
              localStorage.setItem('type', '0');
              localStorage.setItem('currentSession', user.data.token);
              localStorage.setItem('userInfo', JSON.stringify(user.data));
              localStorage.setItem('userId', user.data._id);
              this.router.navigate(['/admin/hotel-list']);
              this.commonService.toast(user.message, 'Success');
            }
          })
        )
        .pipe(
          catchError((error: any) => {
            this.loginservice.Taxilogin(this.obj).subscribe(
              (taxiuser: any) => {
                localStorage.setItem('type', '1');
                localStorage.setItem('currentSession', taxiuser.data.token);
                localStorage.setItem('userInfo', JSON.stringify(taxiuser.data));
                localStorage.setItem('userId', taxiuser.data._id);
                //this.router.navigate(['/admin/sidebar']);
                this.router.navigate(['/taxi/hotel-list']);
                this.commonService.toast(taxiuser.message, 'Success');
              },
              (error: any) => {
                this.loader = false;
                this.commonService.toast(error.error.message, 'Error');
              }
            );
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

  togglePasswordView() {
    if (this.show_password === true) {
      this.show_password = false;
    } else {
      this.show_password = true;
    }
  }
}
