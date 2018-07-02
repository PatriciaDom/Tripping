/**
 * New typescript file
 */
import { CurrencyPipe } from '@angular/common';
export class Trip {
  id: number;
  trip_type: string;
  origin: string;
  destiny: string;
  start_date: Date;
  end_date: Date;
  duration: number;
  price: CurrencyPipe;
}
