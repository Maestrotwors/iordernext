import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TransportModelsBasicComponent } from './transport-models-basic.component';

describe('TransportModelsBasicComponent', () => {
  let component: TransportModelsBasicComponent;
  let fixture: ComponentFixture<TransportModelsBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransportModelsBasicComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TransportModelsBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
