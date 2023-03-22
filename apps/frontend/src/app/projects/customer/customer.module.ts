import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NgModule } from '@angular/core';
import { RegisterComponent } from './pages/profile/pages/register/register.component';
import { RouterModule } from '@angular/router';
import { SettingsComponent } from './pages/profile/pages/settings/settings.component';
import { TemplatesComponent } from './pages/profile/pages/templates/templates.component';
import { routes } from './app.routes';

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
