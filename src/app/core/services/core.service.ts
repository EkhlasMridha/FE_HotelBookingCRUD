import { Injectable, Injector } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormService } from '@core/services/form.service';
import { IconService } from '@core/services/icon.service';
import { NavTracerService } from '@core/services/nav-tracer.service';

@Injectable({
  providedIn: 'root'
})
export class CoreService {

  private _iconService: IconService;
  private _formService: FormService;
  private _navTracerService: NavTracerService;

  public get iconService(): IconService {
    if (!this._iconService) {
      this._iconService = this._injector.get(IconService);
    }
    return this._iconService;
  }

  public get formService(): FormService {
    if (!this._formService) {
      this._formService = this._injector.get(FormService);
    }
    return this._formService;
  }

  public get navTracerService(): NavTracerService {
    if (!this._navTracerService) {
      this._navTracerService = this._injector.get(NavTracerService);
    }

    return this._navTracerService;
  }
  
  constructor (private _injector: Injector) { }

  handleFormError(
    formGorup: FormGroup,
    errorObservers: object,
    errorTypeGenerator: (type: string, owner: string) => any
  ) {
    return this.formService.handleFormError(formGorup, errorObservers, errorTypeGenerator);
  }

  checkFormStatus(formGroup: FormGroup) {
    this.formService.checkFormStatus(formGroup);
  }

  loadIcons(iconList: string[]) {
    this.iconService.loadIcons(iconList);
  }
}
