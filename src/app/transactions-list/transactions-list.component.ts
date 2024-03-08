import { Component, Input } from '@angular/core';
import { TransactionWithID } from '../../interfaces/BalanceData';

@Component({
  selector: 'app-transactions-list',
  standalone: true,
  imports: [],
  templateUrl: './transactions-list.component.html',
  styleUrl: './transactions-list.component.scss'
})

export class TransactionsListComponent {
  @Input() transactions!: TransactionWithID[];
}
