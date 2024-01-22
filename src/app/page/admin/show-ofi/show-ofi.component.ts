import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../servicio/api.service';


@Component({
  selector: 'app-show-ofi',
  templateUrl: './show-ofi.component.html',
  styleUrls: ['./show-ofi.component.css']
})
export class ShowOfiComponent implements OnInit {

  id: any;
  constructor(private activate: ActivatedRoute, private  api:ApiService) { }

  ngOnInit(): void {
    this.activate.paramMap.subscribe(paramMap =>{
      const id = paramMap.get('ofiid');
      this.api.getId(id).subscribe(data =>{
      
      });
    });
  }

}
