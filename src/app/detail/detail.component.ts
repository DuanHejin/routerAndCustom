import { Component, OnInit } from '@angular/core';

export interface DetailItem {
  id: number;
  label: string;
  value: string;
  date: Date;
  name: string;
  data?: any;
  type?:string;
  isSpecRole?: boolean;
}

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  public rows: DetailItem[] = [];

  constructor() { }

  ngOnInit() {
    for (let i = 1; i <= 5; i++) {
      let valueStr = `東京の4月22日の最高気温の予想は28度ですが、この4月に28度という気温は、東京の142年間の観測で、上位5位に入る気温です（表）。`;


      this.rows.push({id: i, label: `label_${i}`, value: `${i}_${valueStr}`, date: new Date(), name: `name_${i}`})
    }

  }

}
