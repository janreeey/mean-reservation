import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import Reservation from '../types/reservations';
import { ReservationServicesService } from '../reservation-services.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-createpage',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, CommonModule],
  templateUrl: './createpage.component.html',
  styleUrl: './createpage.component.scss',
})
export class CreatepageComponent {
  formBuilder = inject(FormBuilder);
  userForm: FormGroup = this.formBuilder.group({
    fullname: [''],
    email: [''],
    address: [''],
    date: [''],
  });

  reservationService = inject(ReservationServicesService);
  router = inject(Router);
  route = inject(ActivatedRoute);
  editResId!: string;

  ngOnInit() {
    this.editResId = this.route.snapshot.params['id'];
    if (this.editResId) {
      this.reservationService
        .getReservation(this.editResId)
        .subscribe((result) => {
          this.userForm.patchValue(result);
        });
    }
  }

  createReservation() {
    const model: Reservation = this.userForm.value;
    this.reservationService.addReservation(model).subscribe((result) => {
      alert('Reservation Created Successfully!');
      this.router.navigateByUrl('/');
    });
  }

  updateReservation() {
    const model: Reservation = this.userForm.value;
    this.reservationService
      .updateReservation(this.editResId, model)
      .subscribe((result) => {
        alert('Updated Successfully');
        this.router.navigateByUrl('/');
      });
  }
}
