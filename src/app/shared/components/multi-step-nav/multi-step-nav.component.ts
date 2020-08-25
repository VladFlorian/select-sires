//---------------CORE-----------------------------------------------------------------------------------//
import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "cstm-multi-step-nav",
  templateUrl: "./multi-step-nav.component.html",
  styleUrls: ["./multi-step-nav.component.scss"],
})
export class MultiStepNavComponent {
  //-- Inputs -----------------------
  @Input() menuItems: {label: string, pageNumber: number} [] = [];
  @Input() currentPageNum: number = 1;
  //-- Outputs -----------------------
  @Output() pageNumberChanged = new EventEmitter<number>();

  constructor() { }

  pageChange(newPageNumber){
    this.pageNumberChanged.emit(newPageNumber)
  }

}
