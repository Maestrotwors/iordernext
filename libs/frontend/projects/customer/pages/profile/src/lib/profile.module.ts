import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './routes';
import { ProfileComponent } from './profile.component';

@NgModule({
  imports: [RouterModule.forChild(routes), ProfileComponent],
  declarations: [],
})
export class ProfileModule {}
