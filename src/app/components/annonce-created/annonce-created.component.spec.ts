import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnonceCreatedComponent } from './annonce-created.component';

describe('AnnonceCreatedComponent', () => {
  let component: AnnonceCreatedComponent;
  let fixture: ComponentFixture<AnnonceCreatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnonceCreatedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnonceCreatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
