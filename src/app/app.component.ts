import { Component, OnInit, inject } from '@angular/core';
import { BalanceStore } from '../store/BalanceStore';
import { AccountInfoComponent } from './account-info/account-info.component';
import { TransactionsListComponent } from './transactions-list/transactions-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    AccountInfoComponent,
    TransactionsListComponent
  ],
  providers: [BalanceStore],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})

export class AppComponent implements OnInit {
  readonly store = inject(BalanceStore);

  constructor() { }

  async ngOnInit() {
    await this.store.fetchBalance();
  }
}
