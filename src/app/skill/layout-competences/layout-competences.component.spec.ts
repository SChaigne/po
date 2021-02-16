import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutCompetencesComponent } from './layout-competences.component';

describe('LayoutCompetencesComponent', () => {
  let component: LayoutCompetencesComponent;
  let fixture: ComponentFixture<LayoutCompetencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutCompetencesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutCompetencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
