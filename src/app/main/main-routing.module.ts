import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'general' },
  { path: 'general', loadChildren: '../features/general/general.module#GeneralModule' },
  { path: '**', redirectTo: 'general' },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes, { useHash: false })],
})
export class MainRoutingModule {}
