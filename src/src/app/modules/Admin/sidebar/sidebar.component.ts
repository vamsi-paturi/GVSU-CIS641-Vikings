import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { CommonService } from '../../../core/common.service';
import { Router, ActivatedRoute } from '@angular/router';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { PropertiesService } from 'src/app/common/properties.service';
import { ThrowStmt } from '@angular/compiler';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  tbody: any;
  isAdmin = false;
  userid: any;
  constructor(
    private adminservice: AdminService,
    private commonService: CommonService,
    private router: Router,
    public propertiesService: PropertiesService
  ) {}

  ngOnInit(): void {
    this.tbody = this.propertiesService.length;
    this.isAdmin = JSON.parse(localStorage.getItem('isAdmin'));
    // this.isAdmin = true;
    this.userid = localStorage.getItem('userId');
  }
  logout() {
    this.router.navigate(['/auth/login']);
    this.commonService.toast('Logout successfully', 'Success');
  }
  redirectTo(uri: string) {
    this.router
      .navigateByUrl('/', { skipLocationChange: true })
      .then(() => this.router.navigate([uri]));
  }
  userinfo() {
    this.router.navigate([`admin/user-info/${this.userid}`]);
  }
  userDocs() {
    this.router.navigate([`admin/user-docs/${this.userid}`]);
  }
}
