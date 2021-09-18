import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CoreService } from '@core/services/core.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  @Input() showMenuButton: boolean;
  @Output() menuButton: EventEmitter<MouseEvent> = new EventEmitter();
  constructor (
    private coreService: CoreService
  ) {
  }

  ngOnInit(): void { }

  openDrawer(event) {
    this.menuButton.emit(event);
  }

}
