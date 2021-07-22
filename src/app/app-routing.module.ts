import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from './table/table.component';
import { AddNoticeComponent } from './add-notice/add-notice.component';
import { EditNoticeComponent } from './edit-notice/edit-notice.component';
import { ViewNoticeComponent } from './view-notice/view-notice.component';
const routes: Routes = [
  { 
    path: 'table', 
    component: TableComponent 
  },
  { 
    path: 'add-notice', 
    component: AddNoticeComponent 
  },
  { 
    path: 'edit-notice/:id', 
    component: EditNoticeComponent 
  },
  { 
    path: 'view-notice/:id', 
    component: ViewNoticeComponent
  },
  { 
    path: '', 
    redirectTo: '/table',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
