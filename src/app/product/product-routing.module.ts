import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';


const routes: Routes = [
  {
    path: '',
    component: ListComponent
  },
  {
    path: ':handle',
    component: AddComponent
  }, 
  {
    path: ':handle/:id',
    component: AddComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
