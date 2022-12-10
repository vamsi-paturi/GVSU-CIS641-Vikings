import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AdminService } from '../admin.service';
import { CommonService } from '../../../core/common.service';
import { Router, ActivatedRoute } from '@angular/router';
import intlTelInput from 'intl-tel-input';
import { DatePipe, Location } from '@angular/common';
import { PropertiesService } from 'src/app/common/properties.service';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css'],
})
export class EmployeeAddComponent implements OnInit {
  addEmployeeForm: FormGroup;
  submitted;
  loader;

  dropVal = null;
  name: '';
  adname: '';
  email: '';
  phone: '';
  phone1: '';
  ABN: '';
  listData: any;
  editId = true;
  _id = '';
  token = '';
  obj: any;
  obj2: any;
  street: '';
  country: '';
  postcode: '';
  state = '';
  googleaddress = '';
  selectedCountry: any;
  tbody: any;
  constructor(
    private adminservice: AdminService,
    private commonService: CommonService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private location: Location,
    public propertiesService: PropertiesService
  ) {}
  ngAfterViewInit(): void {
    this.tbody = this.propertiesService.createLength;
    const currentli = document.querySelector('[href="/admin/taxi-list"]');
  }
  ngOnInit(): void {
    setTimeout(() => {
      const currentli = document.querySelector('[href="/admin/employee-list"]'); //<<<---using ()=> syntax
      currentli.className = 'nav-link active';
    }, 10);

    //this.editId = false;
    this.addEmployeeForm = new FormGroup({
      name: new FormControl(this.name, [Validators.required]),
      email: new FormControl(this.email, [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
      ]),
      phone: new FormControl(this.phone, [Validators.required]),
      address: new FormControl(this.name, [Validators.required]),
      dob: new FormControl(this.name, [Validators.required]),
    });
    this._id = this.activatedRoute.snapshot.params.id;
    if (this._id != undefined) {
      this.getEmplyee(this._id);
    }
  }
  getEmplyee(id) {
    this.adminservice.getEmplyee(id).subscribe((result: any) => {
      const items = result;
      this.editId = false;
      //this.item = items[0];
      console.log(items);
      this.patchData(items);
    });
  }
  patchData(items) {
    var datePipe = new DatePipe('en-US');
    let formatedyear = datePipe.transform(items.dob, 'yyyy-MM-dd');
    console.log('formatedyear', formatedyear);
    this.addEmployeeForm.patchValue({
      name: items.name,
      email: items.email,
      phone: items.phoneNumber,
      address: items.address,
      dob: formatedyear,
    });
  }
  get f() {
    return this.addEmployeeForm.controls;
  }
  updateEmployee() {
    this.submitted = true;
    const data = this.addEmployeeForm.controls;

    if (this.addEmployeeForm.invalid) {
      console.log('Invalid form');
    } else {
      const obj = {
        name: data.name.value,
        email: data.email.value,
        address: data.address.value,
        phoneNumber: data.phone.value,
        dob: data.dob.value,
      };
      this.loader = true;
      console.log('while updation', this._id);
      this.adminservice.putEmployee(this._id, obj).subscribe(
        (res) => {
          this.router.navigate(['/admin/employee-list']);
          this.commonService.toast(
            'Employee details added Successfully',
            'Success'
          );
        },
        (error) => {
          this.loader = false;
          this.commonService.toast(error.error.message, 'Error');
        }
      );
    }
  }

  back() {
    this.location.back();
  }
  clrearall() {
    this.router.navigate(['admin/employee-list']);

    this.addEmployeeForm.patchValue({
      name: '',
      email: '',
      adname: '',
      phone: '',
      address: '',
      ABN: '',
      token: '',
      dob: '',
    });
    const input = document.querySelector('#phone');
    this.obj = intlTelInput(input, {
      initialCountry: 'au',
    });
    const input2 = document.querySelector('#phone1');
    this.obj = intlTelInput(input2, {
      initialCountry: 'au',
    });
  }
  public handleAddressChange(address: any) {
    this.googleaddress = address.name;
    address.address_components.forEach((element) => {
      element.types.forEach((item) => {
        if (item == 'administrative_area_level_1') {
          console.log(element.long_name);
          this.state = element.long_name;
          //this.addEmployeeForm.state
        }
        if (item == 'postal_code') {
          console.log(element.long_name);
          this.postcode = element.long_name;
        }
        if (item == 'country') {
          console.log(element.long_name);
          this.country = element.long_name;
        }
      });
    });
    this.addEmployeeForm.patchValue({
      address: this.googleaddress,
      postcode: this.postcode,
      state: this.state,
      country: this.country,
    });
  }
  addValue(item, obj) {
    console.log('clicking');
    if (item == 'state') {
      this.state = obj.value;
      //this.addEmployeeForm.state
    }
    if (item == 'postal_code') {
      this.postcode = obj.value;
    }
    if (item == 'country') {
      this.country = obj.value;
      console.log(obj.value);
    }
    if (item == 'address') {
      this.googleaddress = this.addEmployeeForm.controls.address.value;
      console.log(this.addEmployeeForm.controls.address.value);
    }
  }
}
