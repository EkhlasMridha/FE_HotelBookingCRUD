import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'page-wrapper',
  templateUrl: './page-wrapper.component.html',
  styleUrls: ['./page-wrapper.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class PageWrapperComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
