import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayNavComponent } from './lay-nav.component';

describe('LayNavComponent', () => {
  let component: LayNavComponent;
  let fixture: ComponentFixture<LayNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
