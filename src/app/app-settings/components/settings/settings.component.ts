import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SettingModel } from '../../models/setting.model';
import { SettingService } from '../../services/setting.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  settingForm: FormGroup;
  editableValue: SettingModel;
  constructor (private formBuilder: FormBuilder, private settingService:SettingService) {
    this.settingForm = this.createSettingForm();
  }

  ngOnInit(): void {
    this.getSettingValue();
  }

  getSettingValue() {
    this.settingService.getSettings().subscribe(res => {
      this.settingForm.get("discount").setValue(res.discount);
      this.settingForm.get("taxPercentage").setValue(res.taxPercentage);
      this.editableValue = res;
    })
  }

  createSettingForm() {
    return this.formBuilder.group({
      discount: [0, Validators.compose([Validators.max(100), Validators.min(0)])],
      taxPercentage:[0,Validators.compose([Validators.max(100),Validators.min(0)])]
    })
  }

  onSubmit() {
    if (!this.settingForm.valid) {
      return;
    }

    const result:SettingModel = Object.assign({}, this.settingForm.value);
    result.id = this.editableValue != null ? this.editableValue.id : 0;
    console.log(result);

    this.settingService.saveSetting(result).subscribe(res => {
      console.log(res);
    })
  }
}
