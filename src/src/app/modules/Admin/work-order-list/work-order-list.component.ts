import { Component, HostListener, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { CommonService } from '../../../core/common.service';
import { PropertiesService } from 'src/app/common/properties.service';

@Component({
  selector: 'app-work-order-list',
  templateUrl: './work-order-list.component.html',
  styleUrls: ['./work-order-list.component.css'],
})
export class WorkOrderListComponent implements OnInit {
  p = 1;
  searchText;
  nodata = false;
  deleteid: any;
  items: any;
  loader: any;
  public innerWidth: any;
  public tWidth: any;
  tbody: any;

  constructor(
    private adminService: AdminService,
    private commonService: CommonService,
    public propertiesService: PropertiesService
  ) {}

  ngOnInit(): void {
    setTimeout(() => {
      const currentli = document.querySelector('[href="/admin/employee-list"]'); //<<<---using ()=> syntax
      currentli.className = 'nav-link active';
    }, 10);

    this.tbody = this.propertiesService.tbody;
    // this.innerWidth = `${window.innerHeight-(window.innerHeight/1.75)}px` ;
    // console.log("innter width")
    // console.log(window.screen)

    this.getworks();
  }
  changeTaxi(id, taxiId, event) {
    let value = event.target.value;
    if (value == 5) {
      this.items[id - 1].reason = true;
    } else {
      this.items[id].reason = false;
    }
  }

  getworks() {
    let id = localStorage.getItem('userId');
    this.adminService.getWorks(id).subscribe(
      (result: any) => {
        const items = result;
        console.log(items);
        this.items = items;
        this.loader = false;
      },
      (error: any) => {
        this.nodata = true;
        this.loader = false;
      }
    );
  }
  saveid(Id) {
    console.log(Id);
    this.deleteid = Id;
  }
  deltedata() {
    const Id = this.deleteid;
    this.adminService.deletetaxibyadmin(Id).subscribe(
      (result: any) => {
        this.loader = false;
        if (result.success === true) {
          this.commonService.toast(result.message, 'Success');
        } else {
          this.commonService.toast(result.message, 'Error');
        }
        // this.gettaxilist();
      },
      (error: any) => {
        this.loader = false;
        this.commonService.toast(error.error.message, 'Error');
      }
    );
  }

  sendaccesskey(Id) {
    this.loader = true;
    this.adminService.sendAccessKey(Id).subscribe(
      (result: any) => {
        if (result.success === true) {
          //this.loader = false;
          this.commonService.toast(result.message, 'Success');
          //  this.gettaxilist();
        }
      },
      (error: any) => {
        this.loader = false;
        //this.commonService.toast(error.error.message, 'Error');
      }
    );
  }
  onResize(event) {
    // this.innerWidth = `${window.innerHeight-(window.innerHeight/1.25)}px` ;
    // console.log("innter width")
    // console.log(this.innerWidth)
  }
}
