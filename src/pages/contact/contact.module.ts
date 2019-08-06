import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContactPage } from './contact';
import { AuthUserProvider } from '../../providers/AuthUserProvider';

@NgModule({
  declarations: [
    ContactPage,
  ],
  imports: [
    IonicPageModule.forChild(ContactPage),

  ],
  providers: [
    AuthUserProvider,
  ],
})
export class RegisterPageModule {}
