import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import { BalanceResponse } from '../interfaces/BalanceResponse';

@Injectable({
  providedIn: 'root'
})
export class BalanceService {
  private apiUrl = 'http://localhost:8080/api/getbalance';

  constructor(private http: HttpClient) { }

  async getBalance(): Promise<BalanceResponse> {
    try {
      const response = await lastValueFrom(this.http.get<any>(this.apiUrl));
      return { success: true, data: response };
    } catch (error) {
      if (error instanceof HttpErrorResponse) {
        return { success: false, error: `Backend returned ${error.status}` };
      }
      return { success: false, error: `An error occurred: ${error}` };
    }
  }
}
