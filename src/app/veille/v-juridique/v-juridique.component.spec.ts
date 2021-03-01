import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VJuridiqueComponent } from './v-juridique.component';

describe('VJuridiqueComponent', () => {
  let component: VJuridiqueComponent;
  let fixture: ComponentFixture<VJuridiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VJuridiqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VJuridiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
