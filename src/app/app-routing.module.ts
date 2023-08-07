import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateComponent } from './components/template/template.component';
import { ReactivoComponent } from './components/reactivo/reactivo.component';

const routes: Routes = [
  {path: 'template', component:TemplateComponent},
  {path:'reactivo', component:ReactivoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
