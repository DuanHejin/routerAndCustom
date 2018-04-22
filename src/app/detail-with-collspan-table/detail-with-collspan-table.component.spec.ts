import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailWithCollspanTableComponent } from './detail-with-collspan-table.component';

describe('DetailWithCollspanTableComponent', () => {
  let component: DetailWithCollspanTableComponent;
  let fixture: ComponentFixture<DetailWithCollspanTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailWithCollspanTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailWithCollspanTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
