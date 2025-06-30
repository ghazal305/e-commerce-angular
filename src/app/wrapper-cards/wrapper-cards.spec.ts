import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WrapperCards } from './wrapper-cards';

describe('WrapperCards', () => {
  let component: WrapperCards;
  let fixture: ComponentFixture<WrapperCards>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WrapperCards]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WrapperCards);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
