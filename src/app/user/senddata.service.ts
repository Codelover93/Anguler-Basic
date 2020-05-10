import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SenddataService {
  info= new BehaviorSubject('');
  msg=this.info.asObservable();
  constructor() {
   }

   setdata(data){
    this.info.next(data);
   }
}
