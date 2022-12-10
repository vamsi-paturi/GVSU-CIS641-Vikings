import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from '../Admin/sidebar/sidebar.component';
import { HeaderComponent } from '../Admin/header/header.component';
import { AuthGuardService } from '../../core/auth-gaurd.service';
//import {AdminLayoutComponent} from '../Admin/admin-layout/admin-layout.component'
import { WorkOrderListComponent } from './work-order-list/work-order-list.component';
import { AddWorkComponent } from './add-work/add-work.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { DocListComponent } from './doc-list/doc-list.component';
import { DocAddComponent } from './doc-add/doc-add.component';
import { EditInfoComponent } from './edit-info/edit-info.component';
import { UserDocsComponent } from './user-docs/user-docs.component';
import { UserDocsAddComponent } from './user-docs-add/user-docs-add.component';

const routes: Routes = [
  {
    path: 'employee-list',
    component: EmployeeListComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'add-work',
    component: AddWorkComponent,
    canActivate: [AuthGuardService],
  },

  {
    path: 'doc-list/:id',
    component: DocListComponent,
  },

  {
    path: 'employee-add/:id',
    component: EmployeeAddComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'attach-document/:id',
    component: DocAddComponent,
    canActivate: [AuthGuardService],
  },

  {
    path: 'work-order-list/:id',
    component: WorkOrderListComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'user-info/:id',
    component: EditInfoComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'user-docs/:id',
    component: UserDocsComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'user-docs-add/:id',
    component: UserDocsAddComponent,
    canActivate: [AuthGuardService],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
