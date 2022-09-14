import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatBindingComponent } from './dat-binding.component';

describe('DatBindingComponent', () => {
  let component: DatBindingComponent;
  let fixture: ComponentFixture<DatBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatBindingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
