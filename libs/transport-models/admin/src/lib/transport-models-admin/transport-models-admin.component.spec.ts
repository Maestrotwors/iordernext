import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TransportModelsAdminComponent } from './transport-models-admin.component';

describe('TransportModelsAdminComponent', () => {
  let component: TransportModelsAdminComponent;
  let fixture: ComponentFixture<TransportModelsAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransportModelsAdminComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TransportModelsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
