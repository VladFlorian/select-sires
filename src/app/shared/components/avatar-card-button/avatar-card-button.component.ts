//-------------- Core ----------------------------------------------------------------------------------//
import { Component, Input, OnInit } from "@angular/core";
@Component({
  selector: "cstm-avatar-card-button",
  templateUrl: "./avatar-card-button.component.html",
  styleUrls: ["./avatar-card-button.component.scss"],
})

export class AvatarCardButtonComponent implements OnInit {
  //-- Inputs --------------------
  @Input() fullName: string = '';
  @Input() label: string = '';
  @Input() imgUrl: string;
  @Input() active: boolean;
  @Input() value: any;
  //-- Main Variables -----------------------------------------------------------------------------------
  initials: string = '';
  avatarBackgroundColors = ["#00AA55", "#009FD4", "#B381B3", "#939393", "#E3BC00", "#D47500", "#DC2A2A"];

  constructor() {}

  ngOnInit() {
    const fullNameTemp = this.fullName || '';
    this.initials = this.convertNameToInitials(fullNameTemp);
  }

  convertNameToInitials(fullName) {
    const nameParts = fullName.split(' ');
    const initials = (nameParts.length > 1)
    ? nameParts[0].charAt(0).toUpperCase() + nameParts[1].charAt(0).toUpperCase()
    : nameParts[0].charAt(0).toUpperCase() + nameParts[0].charAt(1).toUpperCase();
    return initials;
  }

  getAvatarBackgroundColor() {
    return this.avatarBackgroundColors[this.numberFromText(this.initials) % this.avatarBackgroundColors.length];
  }

  numberFromText(text) { // numberFromText("AA");
    const charCodes = text
      .split('') // => ["A", "A"] 
      .map(char => char.charCodeAt(0)) // => [65, 65]
      .join(''); // => "6565"
    return charCodes;
  };

}