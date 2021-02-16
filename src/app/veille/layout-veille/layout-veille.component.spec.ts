import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutVeilleComponent } from './layout-veille.component';

describe('LayoutVeilleComponent', () => {
  let component: LayoutVeilleComponent;
  let fixture: ComponentFixture<LayoutVeilleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutVeilleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutVeilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
