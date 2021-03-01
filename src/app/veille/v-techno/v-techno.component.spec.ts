import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VTechnoComponent } from './v-techno.component';

describe('VTechnoComponent', () => {
  let component: VTechnoComponent;
  let fixture: ComponentFixture<VTechnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VTechnoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VTechnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
