import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FullContentComponent } from './full-content/full-content.component';
import { PagesContentComponent } from './pages-content/pages-content.component';


@NgModule({
  declarations: [FullContentComponent, PagesContentComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [FullContentComponent, PagesContentComponent]
})
export class LayoutModule { }
