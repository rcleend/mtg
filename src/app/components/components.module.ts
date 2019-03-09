import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MtgHeaderComponent } from 'src/app/components/mtg-header/mtg-header.component'
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [MtgHeaderComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports:[MtgHeaderComponent]

})
export class ComponentsModule { }
