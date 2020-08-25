import { Component, Input, OnInit, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "form-label",
  templateUrl: "./form-label.component.html",
  styleUrls: ["./form-label.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class FormLabelComponent implements OnInit {
  constructor() {}

  @Input() public active: boolean;
  @Input() public error: boolean;
  @Input() public errorMessage: string;

  public ngOnInit() {}
}
