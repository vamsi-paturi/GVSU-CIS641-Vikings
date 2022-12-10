import { Component, HostListener, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { CommonService } from '../../../core/common.service';
import { PropertiesService } from 'src/app/common/properties.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-docs',
  templateUrl: './user-docs.component.html',
  styleUrls: ['./user-docs.component.css'],
})
export class UserDocsComponent implements OnInit {
  p = 1;
  searchText;
  nodata = false;
  deleteid: any;
  items: any;
  loader: any;
  public innerWidth: any;
  public tWidth: any;
  tbody: any;
  userId: any;
  constructor(
    private adminService: AdminService,
    private commonService: CommonService,
    public propertiesService: PropertiesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    setTimeout(() => {
      const currentli = document.querySelector('[name="docs"]'); //<<<---using ()=> syntax
      currentli.className = 'nav-link active';
    }, 10);
    this.userId = localStorage.getItem('userId');
    this.tbody = this.propertiesService.tbody;

    this.getDocuments();
  }

  getDocuments() {
    this.adminService.getDocumentsList(this.userId).subscribe(
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
    this.adminService.deleteDocument(Id).subscribe(
      (result: any) => {
        this.loader = false;
        this.commonService.toast('Document deleted', 'Success');
        this.getDocuments();
      },
      (error: any) => {
        this.loader = false;
        this.commonService.toast(error.error.message, 'Error');
      }
    );
  }
  addNewDoc() {
    this.router.navigate(['/admin/user-docs-add/' + this.userId]);
  }
  goToLink(url) {
    console.log(url);
    window.open(url, '_blank');
  }
  onResize(event) {
    // this.innerWidth = `${window.innerHeight-(window.innerHeight/1.25)}px` ;
    // console.log("innter width")
    // console.log(this.innerWidth)
  }
}
