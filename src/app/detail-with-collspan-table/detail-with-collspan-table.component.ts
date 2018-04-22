import { Component, OnInit } from '@angular/core';
import { DetailItem } from '../detail/detail.component';

interface AssignItem {
  id: number;
  entryType: string;
  assignId: number;
  roleName: string;
  userList: string[];
}

interface ItemForDis {
  roleName: string;
  userName: string;
  needRenderer: boolean;
  needChkRenderer: boolean;
  status: string;
  date: Date;
  isFirst?: boolean;
  data?: any;
}

@Component({
  selector: 'app-detail-with-collspan-table',
  templateUrl: './detail-with-collspan-table.component.html',
  styleUrls: ['./detail-with-collspan-table.component.css']
})
export class DetailWithCollspanTableComponent implements OnInit {

  public rows: ItemForDis[] = [];

  constructor() { }

  ngOnInit() {

    let dataList = this.getDetailItemList();
    this.rows = this.transToTableDataList(dataList);

  }

  private transToTableDataList(dataList: AssignItem[]): ItemForDis[] {
    let result:ItemForDis[] = [];
    
    for(let i = 0; i < dataList.length; i++) {
      let assign = dataList[i];
      if (assign.entryType === "role") {
        
        let needChkRenderer = false;
        if (assign.assignId !== -1) {
          needChkRenderer = true
        }
        
        let currentRole: string = "";
        for (const userName of assign.userList) {
          let rowData = this.getRowData(assign.roleName, userName, assign, true, needChkRenderer);
          if (!currentRole) {
            currentRole = assign.roleName;            
            rowData.isFirst = true;
          } else {
            let lastRowData = result[result.length -1];
            if (lastRowData.roleName === assign.roleName) {
              rowData.isFirst = false;
            } else {
              currentRole = assign.roleName;
              rowData.isFirst = true;
            }
          }
          result.push(rowData);          
        }
      } else {
        result.push(this.getRowData("必須", assign.userList[0], assign));
      }
    }

    return result;
  }

  private getRowData(roleName: string, userName: string, data: any, needRenderer: boolean = false, needChkRenderer: boolean = false): ItemForDis {
    return {
      roleName: roleName,
      userName: userName,
      needRenderer: needRenderer,
      needChkRenderer: needChkRenderer,
      status: "random",
      date: new Date(),
      data: data,
    };
  }

  private getDetailItemList(): AssignItem[] {
    return [{
      id: 1,
      assignId: 1,
      entryType: "user",
      roleName: "",
      userList: ["userA"]
    },{
      id: 2,
      assignId: 2,
      entryType: "role",
      roleName: "ルーロA",
      userList: ["ルーロA-userA","ルーロA-userB"]
    },{
      id: 3,
      assignId: -1,
      entryType: "role",
      roleName: "担当者",
      userList: ["担当者-user1","担当者-user2"]
    },{
      id: 4,
      assignId: 3,
      entryType: "user",
      roleName: "",
      userList: ["userB"]
    }];
  }

}
