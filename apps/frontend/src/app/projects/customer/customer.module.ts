import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { RegisterComponent } from './pages/profile/components/register/register.component';
import { TemplatesComponent } from './pages/profile/components/templates/templates.component';
import { SettingsComponent } from './pages/profile/components/settings/settings.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FooterComponent,
    HeaderComponent,
  ],
  declarations: [CustomerComponent, RegisterComponent, TemplatesComponent, SettingsComponent],
})
export class CustomerModule {}
