import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SortByScorePipe } from './sort-by-score.pipe';

@NgModule({
  declarations: [
    SortByScorePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SortByScorePipe
  ]
})
export class SortByScoreModule { }
