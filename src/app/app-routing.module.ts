import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './component/index/index.component';
import { CreateComponent } from './component/create/create.component';
import { EditComponent } from './component/edit/edit.component';
import { ViewComponent } from './component/view/view.component';

const routes: Routes = [
  {path: 'component', redirectTo: 'component/index', pathMatch:"full"},
  {path: 'component/index', component: IndexComponent},
  {path: 'component/:componentid/view', component: ViewComponent},
  {path: 'component/create', component: CreateComponent},
  {path: 'component/:componentid/edit', component: EditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
