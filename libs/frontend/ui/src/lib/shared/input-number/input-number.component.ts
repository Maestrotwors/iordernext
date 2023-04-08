import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { FormsModule } from '@angular/forms';
import { NumberParser } from '@app/frontend/helpers';

@Component({
  selector: 'app-input-number',
  standalone: true,
  imports: [NzInputNumberModule, FormsModule],
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputNumberComponent {
  @Input() value = 0;
  @Input() max = Infinity;
  @Input() inBasket: number | null = null;
  @Output() modelChanged = new EventEmitter<number>();

  constructor(public numberParser: NumberParser) {}
  parser = this.numberParser.parseNumber;

  changeModel(value: number): void {
    this.modelChanged.emit(value);
  }
}
