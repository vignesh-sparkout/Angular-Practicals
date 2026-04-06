import { TestBed } from '@angular/core/testing';
import { HoverDirective } from './hover';

describe('HoverDirective', () => {
  it('should create an instance', () => {
    TestBed.configureTestingModule({
      declarations: [ HoverDirective ]
    });
    const fixture = TestBed.createComponent(HoverDirective);
    expect(fixture).toBeTruthy();
  });
});
