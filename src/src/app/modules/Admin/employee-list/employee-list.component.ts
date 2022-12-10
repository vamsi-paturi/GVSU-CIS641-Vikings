import { Component, HostListener, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { CommonService } from '../../../core/common.service';
import { PropertiesService } from 'src/app/common/properties.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent implements OnInit {
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
    this.tbody = this.propertiesService.tbody;
    // this.innerWidth = `${window.innerHeight-(window.innerHeight/1.75)}px` ;
    // console.log("innter width")
    // console.log(window.screen)

    this.getEmployeeList();
  }
  getEmployeeList() {
    this.adminService.getEmployeeList().subscribe(
      (result: any) => {
        const items = result;
        console.log(result);
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
    this.adminService.deleteEmployee(Id).subscribe(
      (result: any) => {
        this.loader = false;
        this.commonService.toast('Employee deleted successfully', 'Success');

        this.getEmployeeList();
      },
      (error: any) => {
        this.loader = false;
        this.commonService.toast(error.error.message, 'Error');
      }
    );
  }
}
