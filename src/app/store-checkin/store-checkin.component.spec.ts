import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreCheckinComponent } from './store-checkin.component';

describe('StoreCheckinComponent', () => {
  let component: StoreCheckinComponent;
  let fixture: ComponentFixture<StoreCheckinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoreCheckinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreCheckinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
