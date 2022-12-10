import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './core/auth-gaurd.service';

const routes: Routes = [
  { path: '', redirectTo: '/auth/login', pathMatch: 'full' },
  {
    path: 'admin',
    loadChildren: () =>
      import('../app/modules/Admin/admin.module').then((m) => m.AdminModule),
    // data : { role : 0}
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('../app/modules/Authentication/authentication.module').then(
        (m) => m.AuthenticationModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
