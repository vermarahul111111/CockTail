import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcocktailsComponent } from './viewcocktails.component';

describe('ViewcocktailsComponent', () => {
  let component: ViewcocktailsComponent;
  let fixture: ComponentFixture<ViewcocktailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewcocktailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewcocktailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
