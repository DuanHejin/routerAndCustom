import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Editor} from 'primeng/editor';

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


  public onTextChange(event: any, editor: Editor) {
    // event.htmlValue = event.textValue;
    // let reg = new RegExp(/<[^>]*>/g);
    let reg = new RegExp(/<(?!a|p|^a|^p).*?>/g);
    let newValue = String(event.htmlValue).replace(reg, "");
    console.log(event);
    console.log(newValue);
    event.htmlValue = newValue;
    // editor.writeValue(event.textValue + "aa");
  }
}
