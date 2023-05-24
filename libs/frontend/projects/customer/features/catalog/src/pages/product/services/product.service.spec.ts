import { ProductService } from './product.service';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BasketService } from '../../../../../../shared/src/lib/services/basket/basket.service';
import { ProductStore } from '../store/product.store';

describe('ProductService', () => {
	let service: ProductService;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpClientTestingModule],
			providers: [ProductService, BasketService, ProductStore],
    	});
		service = TestBed.inject(ProductService);
	});

	it('should be created', () => {
		expect(service).toBeInstanceOf(ProductService);
	});
});