//-------------- Core  --------------------------------------------------//
import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "cstm-icon-card-button",
  templateUrl: "./icon-card-button.component.html",
  styleUrls: ["./icon-card-button.component.scss"]
})
export class IconCardButtonComponent {
  //-- Inputs -----------------------
  @Input() label: string = '';
  @Input() iconUrl: string;
  @Input() active: boolean;
  @Input() activeIconUrl: string;
  @Input() inactiveIconUrl: string;
  @Input() value: any;
  //-- Outputs -----------------------
  @Output() onButtonClick = new EventEmitter<any>();

  constructor() { }

  buttonClick() {
    this.onButtonClick.emit(this.value)
  }

}