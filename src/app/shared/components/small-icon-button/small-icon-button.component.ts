//---------------CORE-----------------------------------------------------------------------------------//
import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "cstm-small-icon-button",
  templateUrl: "./small-icon-button.component.html",
  styleUrls: ["./small-icon-button.component.scss"]
})
export class SmallIconButtonComponent {
  //-- Inputs -----------------------
  @Input() label: string = '';
  @Input() iconUrl: string;
  @Input() active: boolean;
  @Input() value: any;
  //-- Outputs -----------------------
  @Output() onButtonClick = new EventEmitter<any>();

  constructor() { }

  buttonClick() {
    this.onButtonClick.emit(this.value)
  }

}