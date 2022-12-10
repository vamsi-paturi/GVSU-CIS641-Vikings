import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AuthGuardService } from '../../core/auth-gaurd.service';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { CommonService } from '../../core/common.service';
import { ToastrModule, ToastrManager } from 'ng6-toastr-notifications';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { AgmCoreModule } from '@agm/core';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatDatepicker } from '@angular/material/datepicker';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { MatIconModule } from '@angular/material/icon';
import { DatePipe } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { PdfViewerModule } from 'ng2-pdf-viewer';
import { WorkOrderListComponent } from './work-order-list/work-order-list.component';
import { AddWorkComponent } from './add-work/add-work.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { DocListComponent } from './doc-list/doc-list.component';
import { DocAddComponent } from './doc-add/doc-add.component';
import { EditInfoComponent } from './edit-info/edit-info.component';
import { UserDocsComponent } from './user-docs/user-docs.component';
import { UserDocsAddComponent } from './user-docs-add/user-docs-add.component';
//import { Router , CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@NgModule({
  declarations: [
    SidebarComponent,
    HeaderComponent,

    WorkOrderListComponent,

    AddWorkComponent,

    EmployeeListComponent,

    EmployeeAddComponent,

    DocListComponent,

    DocAddComponent,

    EditInfoComponent,

    UserDocsComponent,

    UserDocsAddComponent,
  ],

  imports: [
    CommonModule,
    AdminRoutingModule,
    Ng2SearchPipeModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule,
    GooglePlaceModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    AutocompleteLibModule,
    MatInputModule,
    MatIconModule,
    MatProgressSpinnerModule,
    PdfViewerModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDgezXBAGLQ6EI2Tu7XtQDl-4FSsjOPFNU',
    }),
    AngularMultiSelectModule,

    ToastrModule.forRoot(),
  ],
  providers: [
    AuthGuardService,
    //ActivatedRouteSnapshot,
    CommonService,
    ToastrManager,
    DatePipe,
  ],
})
export class AdminModule {}
