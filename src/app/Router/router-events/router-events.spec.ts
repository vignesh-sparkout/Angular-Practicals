import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterEvents } from './router-events';

describe('RouterEvents', () => {
  let component: RouterEvents;
  let fixture: ComponentFixture<RouterEvents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterEvents],
    }).compileComponents();

    fixture = TestBed.createComponent(RouterEvents);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
