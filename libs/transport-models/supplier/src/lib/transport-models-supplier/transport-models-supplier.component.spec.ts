import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TransportModelsSupplierComponent } from './transport-models-supplier.component';

describe('TransportModelsSupplierComponent', () => {
  let component: TransportModelsSupplierComponent;
  let fixture: ComponentFixture<TransportModelsSupplierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransportModelsSupplierComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TransportModelsSupplierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
