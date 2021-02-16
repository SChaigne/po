import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutCompanyComponent } from './layout-company.component';

describe('LayoutCompanyComponent', () => {
  let component: LayoutCompanyComponent;
  let fixture: ComponentFixture<LayoutCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutCompanyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
