import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { SummaryIconComponent } from "./summary-icon.component";

describe("SummaryIconComponent", () => {
  let component: SummaryIconComponent;
  let fixture: ComponentFixture<SummaryIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummaryIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
