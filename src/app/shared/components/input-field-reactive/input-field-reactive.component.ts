//-------------- Core ----------------------------------------------------------------------------------//
import { Component, EventEmitter, Input, OnInit, Optional, Output, Self, SkipSelf } from "@angular/core";
import { ControlContainer } from "@angular/forms";
import { ControlValueAccessor, NgControl } from "@angular/forms";

@Component({
  selector: "input-field-reactive",
  templateUrl: "./input-field-reactive.component.html",
  styleUrls: ["./input-field-reactive.component.scss"],
  viewProviders: [
    {
      provide: ControlContainer,
      useFactory: (container: ControlContainer) => container,
      deps: [[new SkipSelf(), ControlContainer]]
    }
  ]
})

export class InputFieldComponentReactive implements ControlValueAccessor, OnInit {
  //Events
  @Output() blur = new EventEmitter<string>();
  @Output() change = new EventEmitter<any>();
  //Inputs
  @Input() public element: string;
  @Input() controlName: string;
  @Input() errorCondition: boolean;
  @Input() errorMsg: string;
  @Input() disabled = false;
  @Input() label: string;
  @Input() valueLabel: string;
  @Input() mask: string;
  @Input() listed: boolean;
  @Input() placeholder: string;
  @Input() type: string;
  @Input() name: string;

  listedItem: string[];
  activeType: string;
  fieldActive: boolean;
  constructor(@Self() @Optional() public control: NgControl) {

    if (this.control) {
      this.control.valueAccessor = this;
    }
    this.listedItem = [];
  }


  ngOnInit() {
    this.setTypeFromParent();
  }

   blurFunction() {
    this.fieldActive = false;
  }

   focusFunction() {
    this.fieldActive = true;
  }

   handleKeyPress(e) {
    if (this.listed) {
      if (e.which === 13 || e.keyCode === 13) {
        this.pushToListedItem();
      }
    }
  }

   onChange() {
    if (!this.listed) {
      this.onChangeFn(this.controlName);
      this.change.emit();
    }
  }

   onChangeFn = (_: any) => { }

   onTouchedFn = () => { }

   pushToListedItem() {
    //  console.log("controlName", this.controlName)
    if (this.controlName !== "") {
      this.listedItem.push(this.controlName);
      this.onChangeFn(this.listedItem);
      this.change.emit();
      this.controlName = "";
    }
  }

   registerOnChange(fn: any): void {
    this.onChangeFn = fn;
  }

   registerOnTouched(fn: any): void {
    this.onTouchedFn = fn;
  }

   setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

   setTypeFromParent() {
    switch (this.type) {
      case "uin":
        this.activeType = "text";
        break;
      case "email":
        this.activeType = "text";
        break;
      case "password":
        this.activeType = "password";
        break;
      case "url":
        this.activeType = "url";
        break;
      default:
        this.activeType = "text";
        break;
    }
  }

   writeValue(obj: any): void {
    this.controlName = obj;
  }
}
