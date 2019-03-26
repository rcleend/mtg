import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SigninPage } from './signin.page';
import { FirebaseUIModule } from 'firebaseui-angular';

// Custom Components
import { ComponentsModule } from 'src/app/components/components.module';
import { MtgHeaderComponent } from 'src/app/components/mtg-header/mtg-header.component';

const routes: Routes = [
  {
    path: '',
    component: SigninPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FirebaseUIModule,
    ComponentsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SigninPage],
  entryComponents: [MtgHeaderComponent]
})
export class SigninPageModule {}
