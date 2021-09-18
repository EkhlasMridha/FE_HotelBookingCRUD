import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageWrapperComponent } from './page-wrapper/page-wrapper.component';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [
    PageWrapperComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule
  ],
  exports:[PageWrapperComponent]
})
export class PageWrapperModule { }
