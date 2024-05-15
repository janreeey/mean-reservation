import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import Reservation from './types/reservations';

@Injectable({
  providedIn: 'root',
})
export class ReservationServicesService {
  apiURL = 'http://localhost:8003';
  httpClient = inject(HttpClient);

  constructor() {}

  getReservations() {
    return this.httpClient.get<Reservation[]>(this.apiURL + '/reservations');
  }

  addReservation(model: Reservation) {
    return this.httpClient.post(this.apiURL + '/reservations/create', model);
  }

  getReservation(id: string) {
    return this.httpClient.get<Reservation>(
      this.apiURL + '/reservations/' + id
    );
  }

  updateReservation(id: string, model: Reservation) {
    return this.httpClient.patch(
      this.apiURL + '/reservations/update/' + id,
      model
    );
  }

  deleteReservation(id: string) {
    return this.httpClient.delete(this.apiURL + '/reservations/delete/' + id);
  }
}
