import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvaforComponent } from './provafor.component';

describe('ProvaforComponent', () => {
  let component: ProvaforComponent;
  let fixture: ComponentFixture<ProvaforComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProvaforComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvaforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
