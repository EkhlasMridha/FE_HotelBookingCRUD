import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalWrapperComponent } from './components/modal-wrapper/modal-wrapper.component';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [
    ModalWrapperComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule
  ],
  exports:[ModalWrapperComponent]
})
export class ModalWrapperModule { }
