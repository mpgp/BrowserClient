import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TempComponent } from './temp.component';
import { Temp2Component } from './temp2.component';

const routes: Routes = [
    { path: '', component: TempComponent, pathMatch: 'full'},
    { path: 'temp2', component: Temp2Component },
    { path: '**', redirectTo: '/'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
