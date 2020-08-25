//-------------- Core ----------------------------------------------------------------------------------//
import { Component, EventEmitter, Input,  Optional, Output, Self, SkipSelf } from "@angular/core";
import { ControlContainer, FormControl } from "@angular/forms";
import { NgControl } from "@angular/forms";

@Component({
  selector: "cstm-input-textarea-item",
  templateUrl: "./input-textarea-item.component.html",
  styleUrls: ["./input-textarea-item.component.scss"],
  viewProviders: [
    {
      provide: ControlContainer,
      useFactory: (container: ControlContainer) => container,
      deps: [[new SkipSelf(), ControlContainer]]
    }
  ]
})
export class InputTextAreaItemComponent {
  //To Do Move Masks to a Model File
  phoneMask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/,];
  uinMask = [/[1-9]/, ' ', /\d/, ' ', /\d/, ' ', /\d/, ' ', /\d/, ' ', /\d/, ' '];

  //-- Inputs -----------------------
  @Input() lines: string;
  @Input() errorCondition: boolean = false;
  @Input() errorMsg: string;
  @Input() mask: string | 'phone' | 'uin';

  @Input() autoGrow: boolean = false;

  @Input() label: string | undefined = undefined;
  @Input() labelPosition: string | "fixed" | "floating" | "stacked" | undefined = undefined;
  @Input() labelColor: string | undefined = undefined;
  @Input() labelIcon: string | undefined = undefined;
  @Input() labelIconSlot: string | undefined = undefined;


  @Input() controlName: FormControl;
  @Input() placeholder: null | string | undefined = undefined;
  @Input() type: "date" | "email" | "number" | "password" | "search" | "tel" | "text" | "time" | "url" | 'phone' | 'uin' = "text";
  @Input() color: string = undefined;

  @Input() disabled: boolean = false;
  @Input() readonly: boolean = false;

  @Input() name: string | undefined = undefined;
  @Input() value: null | number | string | undefined;

  @Input() spellcheck: boolean = false;
  @Input() autofocus: boolean = false;


  @Input() clearInput: boolean = false;
  @Input() clearOnEdit: boolean = false;
  @Input() debounce: number = 0;

  @Input() minLength: string | undefined = undefined;
  @Input() maxLength: string | undefined = undefined;
  @Input() required: boolean = false;

  @Input() max: string | undefined = undefined;
  @Input() min: string | undefined = undefined;
  @Input() mode: string | "ios" | "md";
  @Input() size: number | undefined = undefined;
  //-- Outputs ----------------------------------
  @Output() ionBlur = new EventEmitter<string>();
  @Output() ionChange = new EventEmitter<any>();
  @Output() ionFocus = new EventEmitter<any>();
  @Output() ionInput = new EventEmitter<any>();


  constructor(@Optional() @Self() public control: NgControl,
  ) { }

  determineMaskToUse() {
    if (this.type === 'uin') {
      return  this.uinMask;
    }
    else if (this.type === 'phone') {
      return this.phoneMask;
    }
    else {
      return false;
    }
  }

}
