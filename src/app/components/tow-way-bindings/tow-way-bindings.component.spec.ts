import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TowWayBindingsComponent } from './tow-way-bindings.component';

describe('TowWayBindingsComponent', () => {
  let component: TowWayBindingsComponent;
  let fixture: ComponentFixture<TowWayBindingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TowWayBindingsComponent]
    });
    fixture = TestBed.createComponent(TowWayBindingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
