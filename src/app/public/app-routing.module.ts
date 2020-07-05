import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'jobs/:term', loadChildren: () => import('../jobs/jobs.module').then(m => m.JobsModule) },
  { path: 'jobs', loadChildren: () => import('../jobs/jobs.module').then(m => m.JobsModule) },
  { path: 'welcome', loadChildren: () => import('../welcome/welcome.module').then(m => m.WelcomeModule) },
  { path: '',   redirectTo: 'welcome', pathMatch: 'full' },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
