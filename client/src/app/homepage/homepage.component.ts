import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import Reservation from '../types/reservations';
import { ReservationServicesService } from '../reservation-services.service';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss',
})
export class HomepageComponent implements OnInit {
  reservations: Reservation[] = [];

  constructor(private reservationService: ReservationServicesService) {}

  ngOnInit() {
    this.reservationService
      .getReservations()
      .subscribe((result: Reservation[]) => {
        this.reservations = result;
      });
  }

  deleteReservation(id: string) {
    const ok = confirm('Are you sure you want to delete this product?');
    if (ok) {
      this.reservationService.deleteReservation(id).subscribe((result) => {
        this.reservations = this.reservations.filter((p) => p._id != id);
        alert('Deleted Successfully!');
      });
    }
  }
}
