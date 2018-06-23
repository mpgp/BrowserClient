import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'main' },
  { path: 'main', loadChildren: './features/main/main.module#MainModule' },
  { path: '**', redirectTo: 'main' },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes, { useHash: false })],
})
export class AppRoutingModule { }
