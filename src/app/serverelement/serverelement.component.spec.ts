import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerelementComponent } from './serverelement.component';

describe('ServerelementComponent', () => {
  let component: ServerelementComponent;
  let fixture: ComponentFixture<ServerelementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServerelementComponent]
    });
    fixture = TestBed.createComponent(ServerelementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
