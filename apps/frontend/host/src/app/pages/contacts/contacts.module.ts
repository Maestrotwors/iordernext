import { CommonModule } from '@angular/common';
import { ContactsComponent } from './contacts.component';
import { ContactsRoutingModule } from './contacts-routing.module';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [CommonModule, ContactsRoutingModule],
  declarations: [ContactsComponent],
})
export class ContactsModule {}
