import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MtgHeaderComponent } from 'src/app/components/mtg-header/mtg-header.component'
import { MtgInputComponent } from 'src/app/components/mtg-input/mtg-input.component'
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [MtgHeaderComponent, MtgInputComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports:[MtgHeaderComponent, MtgInputComponent]

})
export class ComponentsModule { }
