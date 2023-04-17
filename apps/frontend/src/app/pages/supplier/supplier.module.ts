import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuDesktopComponent } from './components/menu/menu-desktop/menu-desktop.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SupplierComponent } from './supplier.component';
import { TitleComponent } from './components/title/title.component';
import { routes } from './app.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HeaderComponent,
    FooterComponent,
    MenuDesktopComponent,
    TitleComponent
  ],
  declarations: [SupplierComponent],
})
export class SupplierModule {}
