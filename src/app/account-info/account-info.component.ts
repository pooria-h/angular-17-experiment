import { Component, inject } from '@angular/core';
import { BalanceStore } from '../../store/BalanceStore';

@Component({
  selector: 'app-account-info',
  standalone: true,
  imports: [],
  templateUrl: './account-info.component.html',
  styleUrl: './account-info.component.scss'
})
export class AccountInfoComponent {
  readonly store = inject(BalanceStore);
}
