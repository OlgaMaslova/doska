import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchLocaleComponent } from './switch-locale.component';

describe('SwitchLocaleComponent', () => {
  let component: SwitchLocaleComponent;
  let fixture: ComponentFixture<SwitchLocaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwitchLocaleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchLocaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
