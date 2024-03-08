import { Component, Input } from '@angular/core';
import { Account } from '../../interfaces/BalanceData';

@Component({
  selector: 'app-account-info',
  standalone: true,
  imports: [],
  templateUrl: './account-info.component.html',
  styleUrl: './account-info.component.scss'
})
export class AccountInfoComponent {
  @Input() account!: Account;
  @Input() currency!: string;
}
