import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualIpComponent } from './manual-ip.component';

describe('ManualIpComponent', () => {
  let component: ManualIpComponent;
  let fixture: ComponentFixture<ManualIpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManualIpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManualIpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
