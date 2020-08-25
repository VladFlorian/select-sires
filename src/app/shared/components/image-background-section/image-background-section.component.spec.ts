import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ImageBackgroundSectionComponent } from "./image-background-section.component";

describe("ImageBackgroundSectionComponent", () => {
  let component: ImageBackgroundSectionComponent;
  let fixture: ComponentFixture<ImageBackgroundSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageBackgroundSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageBackgroundSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
