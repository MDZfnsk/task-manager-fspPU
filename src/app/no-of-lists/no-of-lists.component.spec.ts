import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoOfListsComponent } from './no-of-lists.component';

describe('NoOfListsComponent', () => {
  let component: NoOfListsComponent;
  let fixture: ComponentFixture<NoOfListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoOfListsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoOfListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
