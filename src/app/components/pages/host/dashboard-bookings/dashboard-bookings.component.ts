import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/shared/auth/token.service';
import { ReservationService } from 'src/app/shared/vehicules/reservation.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { CreateNewDisputeComponentComponent } from '../create-new-dispute-component/create-new-dispute-component.component';



@Component({
    selector: 'app-dashboard-bookings',
    templateUrl: './dashboard-bookings.component.html',
    styleUrls: ['./dashboard-bookings.component.scss']
})
export class DashboardBookingsComponent implements OnInit {

    public listBookings:any;
    public bookings:any;

    public id          :any;
    gridListings: number = 1;
    public ready:boolean = false;
    public loading:boolean = true;
    public responseMessage:any;
    private bsModalRef: BsModalRef;
    public  img : any = "https://7rentals.com/backend/public/storage/image/" ;

    constructor( public reservation :ReservationService, public tokenService: TokenService,private modalService: BsModalService) { }

    ngOnInit(): void {
        this.id = this.tokenService.getUser().user.id;
        console.log(this.id);
        this.reservation.getBookingsRequest(this.id).subscribe(
            (data:any)=> {
              this.loading=false ;
                this.bookings = data.bookings;
                      console.log(this.bookings)} )
    }

    public fetchBookingListing() {
      this.id = this.tokenService.getUser().user.id;
      this.reservation.getBookingsRequest(this.id).subscribe(
        (data:any)=> {this.bookings = data.bookings;
                        if(this.bookings){ this.loading=false ;}

                  console.log(this.bookings)} ),
        (error:any) => console.log(error) ;

        this.ready = true;
    }

    breadcrumb = [
        {
            title: 'Demande de réservation',
            subTitle: 'Dashboard'
        }
    ]


    public changeBookingStatus(bookingId:any, action:any, transactionId:any)
    {
      this.reservation.changeBookingStatus(bookingId,action,transactionId).subscribe(
        (data:any)=> {this.responseMessage = data.message;this.loading=true ;
                      alert(this.responseMessage)} ),
        (error:any) => console.log(error);

      this.fetchBookingListing();
    }


    public validatePayment(amount:any,order_number:any,transaction_id:any) {

      let user = this.tokenService.getUser();

      this.reservation.validatePayment(user.user.id,amount,order_number,transaction_id).subscribe(
        (data:any)=> {this.responseMessage = data.message;this.loading=true ;
                 alert(this.responseMessage)} ),
        (error:any) => console.log(error);

      this.fetchBookingListing();

    }

    public openDispute() {
      this.bsModalRef = this.modalService.show(CreateNewDisputeComponentComponent, { ignoreBackdropClick: true });
      this.bsModalRef.setClass('modal-lg');
      this.bsModalRef.content.emitData.subscribe((event: GenericEvent) => {
          if (event.name === 'close') {
              this.bsModalRef.hide();
          } else if (event.name === 'close-modal') {
              this.bsModalRef.hide();
          } else if (event.name === 'dispute-saved') {
              this.bsModalRef.hide();
              this.fetchBookingListing();
          }
      });


    }

}

export interface GenericEvent {
  name: string;
  payload?: any;
}

