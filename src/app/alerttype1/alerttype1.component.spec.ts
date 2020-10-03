import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Alerttype1Component } from './alerttype1.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('Alerttype1Component', () => {
  let component: Alerttype1Component;
  let fixture: ComponentFixture<Alerttype1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule],
      declarations: [ Alerttype1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Alerttype1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggleAlerts', () => {
    component.toggleAlerts('Test alert', false)
    expect(component.visiblestatus).toBeTrue
  });
});
