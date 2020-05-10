import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  username="";
  constructor(private actr:ActivatedRoute, private router:Router) { 
    actr.paramMap.subscribe(
      (rse:ParamMap)=>{
        this.username=rse.get('usermame');
      }
    );
    if(this.username==null){
      router.navigate(['/admin']);
    }
  }
  ngOnInit(): void {
  }

}
