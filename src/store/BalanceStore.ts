import { signalStore, withState, withMethods, withComputed, patchState } from '@ngrx/signals';
import { inject, computed } from '@angular/core';
import { Account, BalanceData, TransactionWithID } from '../interfaces/BalanceData';
import { BalanceService } from '../services/BalanceService';
import { transactionsWithIDs } from '../services/TransactionsFormatter';

const initialState = {
  account: {
    iban: '',
    name: '',
    balance: 0
  } as Account,
  currency: '' as string,
  transactions: [] as TransactionWithID[],
  isFetched: false,
  error: '' as string
};

export const BalanceStore = signalStore(
  withState(initialState),
  withComputed(({ error }) => ({
    hasErrors: computed(() => {
      return error().length > 0;
    }),
  })),
  withMethods((
    store,
    balanceService = inject(BalanceService)) => ({
    setBalanceOnSuccess: (payload: BalanceData) => {
      patchState(store, {
        account: payload.account,
        currency: payload.currency,
        transactions: transactionsWithIDs(payload.transactions),
        isFetched: true
      });
    },
    setBalanceOnFailure: (error: string) => {
      if (error.length === 0) {
        throw new Error('Error message cannot be empty');
      }
      patchState(store, {
        error,
        isFetched: true,
      });
    },
    async fetchBalance() {
      const response = await balanceService.getBalance();
      if (response.success && response.data) {
        this.setBalanceOnSuccess(response.data);
      } else {
        this.setBalanceOnFailure(response.error || `An error occurred`);
      }
    }
  }))
);
