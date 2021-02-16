import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PPEComponent } from './ppe.component';

describe('PPEComponent', () => {
  let component: PPEComponent;
  let fixture: ComponentFixture<PPEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PPEComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PPEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
