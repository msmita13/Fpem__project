import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualSalComponent } from './manual-sal.component';

describe('ManualSalComponent', () => {
  let component: ManualSalComponent;
  let fixture: ComponentFixture<ManualSalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManualSalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManualSalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
