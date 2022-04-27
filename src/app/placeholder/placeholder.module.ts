import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaceholderRoutingModule } from './placeholder-routing.module';
import { PlaceholdersHomeComponent } from './placeholders-home/placeholders-home.component';
import { PlaceholderComponent } from './placeholder/placeholder.component';
import {SharedModule} from '../shared/shared.module';
import { SegmentComponent } from './segment/segment.component'


@NgModule({
  declarations: [
    PlaceholdersHomeComponent,
    PlaceholderComponent,
    SegmentComponent
  ],
  imports: [
    CommonModule,
    PlaceholderRoutingModule,
    SharedModule
  ],
  exports: [
    // PlaceholdersHomeComponent
  ]
})
export class PlaceholderModule { }
