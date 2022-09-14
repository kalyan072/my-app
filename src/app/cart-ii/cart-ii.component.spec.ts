import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartIIComponent } from './cart-ii.component';

describe('CartIIComponent', () => {
  let component: CartIIComponent;
  let fixture: ComponentFixture<CartIIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartIIComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartIIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
