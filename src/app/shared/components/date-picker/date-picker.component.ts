import { datePickerObj } from './models/date-picker';
//---------------CORE-----------------------------------------------------------------------------------//
import { Component, EventEmitter, Input, OnInit, Optional, Output, Self, SkipSelf, AfterViewInit, Injector } from "@angular/core";
import { ControlContainer, FormControl } from "@angular/forms";
import { ControlValueAccessor, NgControl } from "@angular/forms";
import { ModalController } from '@ionic/angular';

const noop = () => {};

@Component({
  selector: "cstm-date-picker",
  templateUrl: "./date-picker.component.html",
  styleUrls: ["./date-picker.component.scss"],
  viewProviders: [
    {
      provide: ControlContainer,
      useFactory: (container: ControlContainer) => container,
      deps: [[new SkipSelf(), ControlContainer]]
    }
  ]
})

export class DatePickerComponent implements ControlValueAccessor {
  //-- Inputs -----------------------
  @Input() lines: string;
  @Input() errorCondition: boolean = false;
  @Input() errorMsg: string;

  @Input() label: string | undefined = undefined; 
  @Input() labelPosition: string | "fixed" | "floating" | "stacked" | undefined = undefined; 
  @Input() labelColor: string | undefined = undefined; 
  @Input() labelIcon: string | undefined = undefined; 
  @Input() labelIconSlot: string | undefined = undefined;
  

  @Input() controlName: string;
  @Input() placeholder: null | string | undefined = undefined;
  @Input() type: "date" | "email" | "number" | "password" | "search" | "tel" | "text" | "time" | "url";
  @Input() color: string = undefined;

  @Input() disabled: boolean = false;
  @Input() readonly: boolean = true;
 
  @Input() name: string | undefined = undefined;
 
  @Input() clearInput: boolean = false;
  @Input() clearOnEdit: boolean = false;

  @Input() mode: string | "ios" | "md";
  //-- Outputs ----------------------------------
  @Output() ionBlur = new EventEmitter<string>();
  @Output() ionChange = new EventEmitter<any>();
  @Output() ionFocus = new EventEmitter<any>();
  @Output() ionInput = new EventEmitter<any>();

  //

  private onTouchedCallback: () => void = noop;
  private onChangeCallback: (_: any) => void = noop;

  datePickerObj: any = { ...datePickerObj, dateFormat: 'YYYY-MM-DD' };
  selectedDate: any = {};
  innerValue: any = '';

  constructor(@Optional() @Self() 
    public control: NgControl, 
    private modalCtrl: ModalController,
) { }




  get value(): any {
    return this.innerValue;
  }

  // set accessor including call the onchange callback
  set value(v: any) {
    if (v !== this.innerValue) {
      this.innerValue = v;
      this.onChangeCallback(v);
    }
    this.onChangeValue(v);
  }

  // Set touched on blur
  onBlur() {
    this.onTouchedCallback();
  }

  // From ControlValueAccessor interface
  writeValue(value: any) {
    if (value !== this.innerValue) {
      this.innerValue = value;
    }
    this.onChangeValue(value);
  }

  onChangeValue(value) {
    // console.log('onChangeValue =>' , value);
    // if (this.inputDateConfig.clearButton !== false) {
    //   if (!value) {
    //     this.closeIcon.style.visibility = 'hidden';
    //   } else {
    //     this.closeIcon.style.visibility = 'visible';
    //   }
    // }
  }

  // From ControlValueAccessor interface
  registerOnChange(fn: any) {
    this.onChangeCallback = fn;
  }

  // From ControlValueAccessor interface
  registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
  }
}
