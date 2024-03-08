import { BalanceData } from './BalanceData';

export interface BalanceResponse {
  success: boolean;
  data?: BalanceData;
  error?: string;
}
