import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WesternWeddingComponent } from './western-wedding.component';

describe('WesternWeddingComponent', () => {
  let component: WesternWeddingComponent;
  let fixture: ComponentFixture<WesternWeddingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WesternWeddingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WesternWeddingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
