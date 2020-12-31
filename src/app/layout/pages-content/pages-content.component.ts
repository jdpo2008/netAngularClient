import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-pages-content',
  templateUrl: './pages-content.component.html',
  styleUrls: ['./pages-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PagesContentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
