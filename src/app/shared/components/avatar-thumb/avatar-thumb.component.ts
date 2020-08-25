//-------------- Core -----------------------------------------------------------------------------//
import { BreakpointObserver, BreakpointState } from "@angular/cdk/layout";
import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "avatar-thumb",
  templateUrl: "./avatar-thumb.component.html",
  styleUrls: ["./avatar-thumb.component.scss"],
  encapsulation: ViewEncapsulation.None
})

export class AvatarThumbComponent implements OnInit {
  //Inputs/Outputs -------------------------------------------------->
  @Input() click: any;
  @Input() dimensions: number;
  @Input() editable: boolean;
  @Input() src: string;
  @Input() responsive;
  @Output() imageSubmit: EventEmitter<any> = new EventEmitter<any>();
//-----------------------
  isLarge: boolean;
  isMedium: boolean;
  isSmall: boolean;
  lgObserver: string;
  mdObserver: string;
  smObserver: string;

  constructor(
    public smallScreen: BreakpointObserver,
    public mediumScren: BreakpointObserver,
    public largeScreen: BreakpointObserver
  ) {
    this.isSmall = false;
    this.isMedium = false;
    this.isLarge = false;
  }

  public fileChange(data) {
    this.imageSubmit.emit(data);
  }

  public ngOnInit() {
    this.smObserver = "(min-width: 1px) and (max-width: 767px)";
    this.mdObserver = "(min-width: 768px) and (max-width: 1023px)";

    this.lgObserver = "(min-width: 1024px)";
    this.smallScreen.observe([
      this.smObserver])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.isSmall = true;
        } else {
          this.isSmall = false;
        }
      });
    this.mediumScren.observe([
      this.mdObserver])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.isMedium = true;
        } else {
          this.isMedium = false;
        }
      });
    this.largeScreen.observe([
      this.lgObserver])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.isLarge = true;
        } else {
          this.isLarge = false;
        }
      });
  }
}
