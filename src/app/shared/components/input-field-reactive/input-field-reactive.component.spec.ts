import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { InputFieldComponentReactive } from "./input-field-reactive.component";

describe("InputFieldComponentReactive", () => {
  let component: InputFieldComponentReactive;
  let fixture: ComponentFixture<InputFieldComponentReactive>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputFieldComponentReactive ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputFieldComponentReactive);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
