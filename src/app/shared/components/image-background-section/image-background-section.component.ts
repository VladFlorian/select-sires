//------------ Core ---------------------------------------->
import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "image-background-section",
  templateUrl: "./image-background-section.component.html",
  styleUrls: ["./image-background-section.component.scss"],
})

export class ImageBackgroundSectionComponent implements OnInit {
  constructor() {
    this.phaseGradient = "";
    this.bgClass = "bg-img";
    this.imageLoaded = false;
  }

  public bgClass: string;
  @Input() public blurBackground: boolean;
  @Input() public gradient: string;
  public imageLoaded: boolean;
  @Input() public innerClass: string;
  @Input() public offset: number;
  @Input() public overlayBg: string;
  public phaseGradient: string;
  @Input() public src: string;

  public backgroundImgClass(phase) {
    this.bgClass = "bg-img";
    // test to see if the blur effect needs to be added
    if (this.blurBackground) {
      this.bgClass = "bg-img bg-blur ";
    }
    // concatenate the appropriate gradient string to the container after the blur test completes
    if (phase) {
      this.setBgGradient(phase);
    }
  }

  public loadedCb() {
    if (!this.imageLoaded) {
      this.imageLoaded = true;
    }
  }

  public ngOnInit() {
    // set the background image class onInit
    this.backgroundImgClass(this.overlayBg);
  }

  public setBgGradient(color) {
    switch (color) {
      case "purple" :
        this.bgClass = this.bgClass + " gradient-purple";
        break;
      case "yellow":
        this.bgClass = this.bgClass + " gradient-yellow";
        break;
      case "red":
        this.bgClass = this.bgClass + " gradient-red";
        break;
      default:
        this.bgClass = this.bgClass + "";
    }
  }
}
