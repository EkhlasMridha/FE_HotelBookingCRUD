import { Component, OnInit } from '@angular/core';
import { ConfirmationStatusService } from 'src/app/shared-modules/confirmation-status-modal/services/confirmation-status.service';
import { CoreService } from '@core/services/core.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  modalRef: any;
  constructor (
    private confirmationService: ConfirmationStatusService,
    private coreService: CoreService,
  ) {
  }

  ngOnInit(): void { }
}
