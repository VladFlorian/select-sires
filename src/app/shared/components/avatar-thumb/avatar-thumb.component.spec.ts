import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { AvatarThumbComponent } from "./avatar-thumb.component";

describe("AvatarThumbComponent", () => {
  let component: AvatarThumbComponent;
  let fixture: ComponentFixture<AvatarThumbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvatarThumbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvatarThumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
