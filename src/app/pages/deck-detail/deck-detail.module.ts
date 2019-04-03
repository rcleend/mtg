import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DeckDetailPage } from './deck-detail.page';

// Custom Components
import { MtgHeaderComponent } from 'src/app/components/mtg-header/mtg-header.component';
import { ComponentsModule } from 'src/app/components/components.module';

const routes: Routes = [
  {
    path: '',
    component: DeckDetailPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DeckDetailPage],
  entryComponents: [MtgHeaderComponent]
})
export class DeckDetailPageModule { }
