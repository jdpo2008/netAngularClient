import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-full-content',
  templateUrl: './full-content.component.html',
  styleUrls: ['./full-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FullContentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
