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
import { ConstantPool } from '@angular/compiler';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
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
    this.signinForm = this.formBuilder.group(
      {
        name: ['', Validators.required],
        address: ['', Validators.required],
        phoneNumber: ['', Validators.required],
        email: [
          '',
          Validators.compose([Validators.required, Validators.email]),
        ],
        dob: ['', Validators.required],

        password: [
          '',
          [
            Validators.required,
            // Validators.pattern(
            //   /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,}$/
            // ),
          ],
        ],
        confirmPassword: ['', Validators.required],
      },
      { validator: this.mustMatch('password', 'confirmPassword') }
    );

    localStorage.removeItem('userInfo');
    localStorage.removeItem('userId');
    localStorage.removeItem('currentSession');
  }

  get f() {
    return this.signinForm.controls;
  }
  mustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      console.log('zia');
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
        return;
      }

      // set error on matchingControl if validation fails
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
      return null;
    };
  }
  forgetpassword() {
    //  // this.loginservice.forgetpassword().subscribe((result: any) => {
    //     //this.commonService.toast(result.message, 'Success');
    //   },
    //     (error: any) => {
    //       this.loader = false;
    //       //this.commonService.toast(error.error.message, 'Error');
    //     })
    // this.router.navigateByUrl('auth/resetpassword');
  }
  Back() {
    this.router.navigateByUrl('auth/login');
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
    // this.mustMatch('password', 'confirmPassword');
    this.submitted = true;
    if (!this.signinForm.invalid) {
      this.loader = true;
      this.obj = {
        name: this.signinForm.controls.name.value,
        email: this.signinForm.controls.email.value,
        dob: this.signinForm.controls.dob.value,
        address: this.signinForm.controls.address.value,
        phoneNumber: this.signinForm.controls.phoneNumber.value,
        password: this.signinForm.controls.password.value,
      };
      this.loginservice
        .register(this.obj)
        .pipe(
          tap((user: any) => {
            //console.log(user, "testing usre")
            if (user) {
              localStorage.setItem('userInfo', JSON.stringify(user));
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
            // this.loginservice.Taxilogin(this.obj).subscribe(
            //   (taxiuser: any) => {
            //     localStorage.setItem('type', '1');
            //     localStorage.setItem('currentSession', taxiuser.data.token);
            //     localStorage.setItem('userInfo', JSON.stringify(taxiuser.data));
            //     localStorage.setItem('userId', taxiuser.data._id);
            //     //this.router.navigate(['/admin/sidebar']);
            //     this.router.navigate(['/taxi/hotel-list']);
            //     this.commonService.toast(taxiuser.message, 'Success');
            //   },
            //   (error: any) => {
            //     this.loader = false;
            //     this.commonService.toast(error.error.message, 'Error');
            //   }
            // );
            this.loader = false;
            return error;
          })
        )
        .pipe(
          catchError((error: any) => {
            this.loader = false;
            this.commonService.toast(error, 'Error');
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
