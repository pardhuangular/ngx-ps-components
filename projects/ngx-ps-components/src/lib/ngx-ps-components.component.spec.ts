import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxPsComponentsComponent } from './ngx-ps-components.component';

describe('NgxPsComponentsComponent', () => {
  let component: NgxPsComponentsComponent;
  let fixture: ComponentFixture<NgxPsComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxPsComponentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxPsComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
