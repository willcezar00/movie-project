import { FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
export abstract class FormBaseComponent {

  private _formGroup: FormGroup;
  private _subscriptions: Subscription[] = [];


  public get formGroup() {
    return this._formGroup;
  }

  public set formGroup(formGroup: FormGroup) {
    this._formGroup = formGroup;
  }

  public get subscriptions() {
    return this._subscriptions;
  }

  public set subscriptions(subscriptions: Subscription[]) {
    this._subscriptions = subscriptions;
  }
}