import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DecksPage } from './decks.page';

// Custom Components
import { ComponentsModule } from 'src/app/components/components.module';
import { MtgHeaderComponent } from 'src/app/components/mtg-header/mtg-header.component';

const routes: Routes = [
  {
    path: '',
    component: DecksPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DecksPage],
  entryComponents: [MtgHeaderComponent]
})
export class DecksPageModule {}
