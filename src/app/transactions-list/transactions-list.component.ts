import { Component, inject } from '@angular/core';
import { BalanceStore } from '../../store/BalanceStore';

@Component({
  selector: 'app-transactions-list',
  standalone: true,
  imports: [],
  templateUrl: './transactions-list.component.html',
  styleUrl: './transactions-list.component.scss'
})

export class TransactionsListComponent {
  readonly store = inject(BalanceStore);
}
