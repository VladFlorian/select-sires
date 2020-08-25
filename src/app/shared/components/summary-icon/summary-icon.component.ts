import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "summary-icon",
  templateUrl: "./summary-icon.component.html",
  styleUrls: ["./summary-icon.component.scss"]
})

export class SummaryIconComponent implements OnInit {
  constructor() { }

  @Input() public icon: string;
  @Input() public label: string;
  @Input() public quantity: string;

  public ngOnInit() { }
}
