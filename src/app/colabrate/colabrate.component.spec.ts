import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColabrateComponent } from './colabrate.component';

describe('ColabrateComponent', () => {
  let component: ColabrateComponent;
  let fixture: ComponentFixture<ColabrateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColabrateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColabrateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
