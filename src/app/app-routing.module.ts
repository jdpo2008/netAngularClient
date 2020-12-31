import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FullContentComponent } from '@layout/full-content/full-content.component';
import { PagesContentComponent } from '@layout/pages-content/pages-content.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/auth/login',
    pathMatch: 'full'
  },
  {
    path: 'pages',
    component: PagesContentComponent,
    //canActivate: [NoAuthGuard], // Should be replaced with actual auth guard
    //children: [
      // {
      //   path: 'dashboard',
      //   loadChildren: () =>
      //     import('@modules/home/home.module').then(m => m.HomeModule)
      // },
      // {
      //   path: 'about',
      //   loadChildren: () =>
      //     import('@modules/about/about.module').then(m => m.AboutModule)
      // },
      // {
      //   path: 'contact',
      //   loadChildren: () =>
      //     import('@modules/contact/contact.module').then(m => m.ContactModule)
      // }
    //]
  },
  {
    path: 'auth',
    component: FullContentComponent,
    loadChildren: () =>
      import('@modules/auth/auth.module').then(m => m.AuthModule)
  },
  { path: '**', redirectTo: '/auth/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
