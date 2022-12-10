import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AdminService } from '../admin.service';
import { CommonService } from '../../../core/common.service';
import { Router, ActivatedRoute } from '@angular/router';
import intlTelInput from 'intl-tel-input';
import { Location } from '@angular/common';
import { PropertiesService } from 'src/app/common/properties.service';

@Component({
  selector: 'app-user-docs-add',
  templateUrl: './user-docs-add.component.html',
  styleUrls: ['./user-docs-add.component.css'],
})
export class UserDocsAddComponent implements OnInit {
  docAddForm: FormGroup;
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
  isPdf = false;
  pdfSrc: any;
  reason = false;
  document: any;
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
    if (!this._id) {
      const input = document.querySelector('#phone');
      this.obj = intlTelInput(input, {
        initialCountry: 'au',
      });
      const input1 = document.querySelector('#phone1');
      this.obj2 = intlTelInput(input1, {
        initialCountry: 'au',
      });
    }
  }
  ngOnInit(): void {
    setTimeout(() => {
      const currentli = document.querySelector('[name="docs"]'); //<<<---using ()=> syntax
      currentli.className = 'nav-link active';
    }, 10);

    //this.editId = false;
    this.docAddForm = new FormGroup({
      tittle: new FormControl(this.name, [Validators.required]),
      description: new FormControl(this.adname, [Validators.required]),
    });
    this._id = this.activatedRoute.snapshot.params.id;
  }

  get f() {
    return this.docAddForm.controls;
  }

  addDoc() {
    this.submitted = true;
    const data = this.docAddForm.controls;
    if (this.docAddForm.invalid) {
      console.log('Invalid form');
    } else {
      console.log('Invalid form', this.pdfSrc);
      const formData = new FormData();
      formData.append('tittle', data.tittle.value);
      formData.append('description', data.description.value);
      formData.append('document', this.document);
      formData.append('userid', this._id);
      this.loader = true;

      this.adminservice.postDocument(formData).subscribe(
        (res) => {
          this.router.navigate(['/admin/user-docs/' + this._id]);
          this.commonService.toast('Document added Successfully', 'Success');
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
    this.router.navigate(['/admin/user-docs/' + this._id]);

    this.docAddForm.patchValue({
      name: '',
      email: '',
      adname: '',
      phone: '',
      address: '',
      ABN: '',
      token: '',
      phone1: '',
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

  fileChange(event) {
    let fileList: FileList = event.target.files;
    if (event.target.files) {
      var reader = new FileReader();
      this.document = event.target.files[0];
    }
    if (fileList.length > 0) {
      let reader = new FileReader();
      reader.onload = (e: any) => {
        this.pdfSrc = e.target.result;
      };
      reader.readAsArrayBuffer(fileList[0]);
      this.isPdf = true;
      let file: File = fileList[0];
      let formData: FormData = new FormData();
      formData.append('uploadFile', file, file.name);
      let headers = new Headers();
      /** In Angular 5, including the header Content-Type can invalidate your request */
      headers.append('Content-Type', 'multipart/form-data');
      console.log('pdf uploading.........................');
      // headers.append('Accept', 'application/json');
      // let options = new RequestOptions({ headers: headers });
      // this.http.post(`${this.apiEndPoint}`, formData, options)
      //     .map(res => res.json())
      //     .catch(error => Observable.throw(error))
      //     .subscribe(
      //         data => console.log('success'),
      //         error => console.log(error)
      //     )
    }
  }
  changeTaxi(event) {
    let value = event.target.value;
    if (value == 5) {
      this.reason = true;
    } else {
      this.reason = false;
    }
  }
}
