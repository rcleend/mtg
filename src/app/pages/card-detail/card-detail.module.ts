import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CardDetailPage } from './card-detail.page';

// Custom Components
import { MtgHeaderComponent } from 'src/app/components/mtg-header/mtg-header.component';
import { ComponentsModule } from 'src/app/components/components.module';


const routes: Routes = [
  {
    path: '',
    component: CardDetailPage
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
  declarations: [CardDetailPage],
  entryComponents: [MtgHeaderComponent]
})
export class CardDetailPageModule { }
