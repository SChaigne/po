import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutCertificationsComponent } from './layout-certifications.component';

describe('LayoutCertificationsComponent', () => {
  let component: LayoutCertificationsComponent;
  let fixture: ComponentFixture<LayoutCertificationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutCertificationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutCertificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
