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


  private data2014: number[] = [20,15,13,10,9,6,3.8,3,2,1.7];
  private data2015: number[] = [4,34,3,18,5,4,3.7,5,23,1.7];
  private data2016: number[] = [1,23,2,30,3,1,12,2,17,2];

  private dataToUse: number[] = this.data2014;

  public pieData: ChartDataset[] = [

    {data: this.dataToUse
    ,label: "% Popularity"

  }
  ];



  public datalabels: string[] = ["Javascript","Python","Ruby","PHP","Java","C++","C","Go","C#","Shell"]

  public pieoptions: ChartOptions = {
    plugins: {

      title:{
        display: true,
        text: `The Popularity of Programming Languages in ${this.year}`,
        font: {
          size: 20,
        }}}}


        changeData(radioValue : number){
          switch(radioValue){
            case radioValue = 2014: {
              this.dataToUse = this.data2014;
              break;
            }
            case radioValue = 2015: {
              this.dataToUse = this.data2015;
              break;
            }
            case radioValue = 2016: {
              this.dataToUse = this.data2016;
              break;
            }
            default: {
              break;
            }}

            this.year = radioValue;
            this.pieData = [
              {data: this.dataToUse,label: "% Popularity"}
            ];

            this.pieoptions = {
            plugins: {
              title:{
                display: true,
                text: `The Popularity of Programming Languages in ${this.year}`,
                font: {
                  size: 20,
                }}}}
        }

}
