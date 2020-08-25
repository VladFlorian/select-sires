//---------------CORE-----------------------------------------------------------------------------------//
import { Component, EventEmitter, Input, OnInit,  Output, } from "@angular/core";

@Component({
  selector: "cstm-search-select-modal",
  templateUrl: "./search-select-modal.component.html",
  styleUrls: ["./search-select-modal.component.scss"],
})
export class SearchSelectModalComponent {

  //-- Inputs -----------------------
  @Input() items: any = []
  @Input() searchPlaceHolder: string | undefined = undefined;
  @Input() title: string = '';
  @Input() subTitle: string = '';
  //-- Outputs ----------------------------------
  @Output() ionBlur = new EventEmitter<string>();
  @Output() ionChange = new EventEmitter<any>();
  @Output() ionFocus = new EventEmitter<any>();
  @Output() ionInput = new EventEmitter<any>();


  constructor() {


    }

  

  // The form control is only set after initialization
  // ngAfterViewInit(): void {
  //   const ngControl: NgControl = this.injector.get(NgControl, null);
  //   if (ngControl) {
  //     this.controlName = ngControl.control as FormControl;
  //   } else {
  //     // Component is missing form control binding
  //   }
  // }


  // ngOnInit() {
  //   if (this.controlName !== "") {

  //   }
  // }


  // writeValue(value: string): void {
  //   this.value = value;
  //   this.onChange(this.value);
  // }

  // onChange: (_: any) => void = (_: any) => { };

  // onTouched: () => void = () => { };

  // registerOnChange(fn: any): void {
  //   this.onChange = fn;
  // }

  // registerOnTouched(fn: any): void {
  //   this.onTouched = fn;
  // }

  // registerOnValidatorChange(fn: () => void): void {
  //   this.onChange = fn;
  // }

}
