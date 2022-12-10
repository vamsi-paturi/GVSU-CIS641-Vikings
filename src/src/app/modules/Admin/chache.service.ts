import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ChacheService {
  constructor() {}
  hotelForBooking: string = '';
  taxiForBooking: string = '';
}
