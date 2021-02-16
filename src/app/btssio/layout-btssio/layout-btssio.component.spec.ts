import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutBtssioComponent } from './layout-btssio.component';

describe('LayoutBtssioComponent', () => {
  let component: LayoutBtssioComponent;
  let fixture: ComponentFixture<LayoutBtssioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutBtssioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutBtssioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
