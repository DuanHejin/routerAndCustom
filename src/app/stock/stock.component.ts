import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {

  public stockId: number;
  public testValue: number;

  public commentText: string = "";

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {

    // this.stockId = this.activatedRoute.snapshot.params["id"];

    this.activatedRoute.params.subscribe((params: Params) => {
      this.stockId = params["id"];
    });
    this.testValue = this.activatedRoute.snapshot.data[0]["testValue"];

  }


  public onTextChange(event: any) {
    event.htmlValue = event.textValue;
    console.log(event);
  }
}
