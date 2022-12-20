import { Component } from '@angular/core';
import { ChartDataset, ChartOptions } from 'chart.js';
import { PowerBIEmbedModule } from 'powerbi-client-angular/powerbi-embed.module';
@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent {

  private year: number = 2014;


  private data1: number[] = [20,15,13,10,9,6,3.8,3,2,1.7];
  private data2: number[] = [4,34,3,18,5,4,3.7,5,23,1.7];

  private dataToUse: number[] = this.data1;

  public pieData: ChartDataset[] = [

    {data: this.dataToUse}
  ];



  public datalabels: string[] = ["Javascript","Python","Ruby","PHP","Java","C++","C","Go","C#","Shell"]

  public pieoptions: ChartOptions = {
    plugins: {
      title:{
        display: true,
        text: `The Popularity of Programming Languages in ${this.year}`,
        font: {
          size: 20,
        }

      }

    }
  }

  changeData(){
    if (this.dataToUse === this.data1){
      this.dataToUse = this.data2;
    }else{
      this.dataToUse = this.data1;
    }


    this.pieData = [
      {data: this.dataToUse}
    ];

  }

}
