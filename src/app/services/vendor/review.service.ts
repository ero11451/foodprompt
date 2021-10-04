import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

   currentNameSubject$ = new BehaviorSubject({});
   data = this.currentNameSubject$.asObservable();

   reviewPenState$ = new BehaviorSubject(false);
   reviewPenState = this.currentNameSubject$.asObservable();
   
   constructor() { }

   updatedReview(data: any) {
      this.currentNameSubject$.next(data)
    }
  
    closeReview(state:boolean) {
      this.reviewPenState$.next(state)
    }
}
