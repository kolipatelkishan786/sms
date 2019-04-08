import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IndexComponent} from './index/index.component';
import {ContactsComponent} from './contacts/contacts.component';
import {DataEntryComponent} from './data-entry/data-entry.component';
import {GalleryComponent} from './gallery/gallery.component';

const approutes: Routes = [
  {path: 'index', redirectTo: '/index', pathMatch: 'full'},
  {path: '', component: IndexComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: 'data-entry', component: DataEntryComponent},
  {path: 'gallery', component: GalleryComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(approutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
