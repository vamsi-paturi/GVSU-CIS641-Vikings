import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../core/common.service';
import { Router, ActivatedRoute } from '@angular/router';
import { PropertiesService } from 'src/app/common/properties.service';

import { AdminService } from '../admin.service';
import { Toastr } from 'ng6-toastr-notifications';
declare var $: any;

@Component({
  selector: 'app-add-work',
  templateUrl: './add-work.component.html',
  styleUrls: ['./add-work.component.css'],
})
export class AddWorkComponent implements OnInit {
  venueTochange: any;
  venuetochangeID: any;
  p = 1;
  searchText;
  password: string = '';
  encriptedPasswrod: string = '';
  //DeviceFormlist: FormGroup
  deleteid: any;
  nodata = false;

  item: any;
  loader: any;
  hotel: any;
  tbody: any;
  oldhotelId: any;
  constructor(
    private adminService: AdminService,
    private commonService: CommonService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public propertiesService: PropertiesService
  ) {}

  ngOnInit(): void {
    this.tbody = this.propertiesService.tbody;
  }
  selectReportType(type) {
    let id = localStorage.getItem('userId');
    if (type == 1) {
      this.adminService.startshift(id).subscribe(
        (result: any) => {
          this.commonService.toast('Shift Sarted', 'Success');
        },
        (error: any) => {
          this.commonService.toast(error.error.error, 'Error');
          this.loader = false;
        }
      );
    }
    if (type == 2) {
      this.adminService.startbreak(id).subscribe(
        (result: any) => {
          this.commonService.toast('Break Sarted', 'Success');
        },
        (error: any) => {
          this.commonService.toast(error.error.error, 'Error');
          this.loader = false;
        }
      );
    }
    if (type == 3) {
      this.adminService.endbreak(id).subscribe(
        (result: any) => {
          this.commonService.toast('Break Ended', 'Success');
        },
        (error: any) => {
          this.commonService.toast(error.error.error, 'Error');
          this.loader = false;
        }
      );
    }
    if (type == 4) {
      this.adminService.endshift(id).subscribe(
        (result: any) => {
          this.commonService.toast('Shift Ended', 'Success');
        },
        (error: any) => {
          this.commonService.toast(error.error.error, 'Error');
          this.loader = false;
        }
      );
    }
  }
}
