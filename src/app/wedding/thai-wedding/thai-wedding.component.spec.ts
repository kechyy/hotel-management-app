import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThaiWeddingComponent } from './thai-wedding.component';

describe('ThaiWeddingComponent', () => {
  let component: ThaiWeddingComponent;
  let fixture: ComponentFixture<ThaiWeddingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThaiWeddingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThaiWeddingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
