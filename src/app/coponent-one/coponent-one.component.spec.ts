import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoponentOneComponent } from './coponent-one.component';

describe('CoponentOneComponent', () => {
  let component: CoponentOneComponent;
  let fixture: ComponentFixture<CoponentOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoponentOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoponentOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
