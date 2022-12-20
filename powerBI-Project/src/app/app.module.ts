import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ReportComponent } from './Widgets/report/report.component';
import { PowerBIEmbedModule } from 'powerbi-client-angular';
import { NgChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    AppComponent,
    ReportComponent
  ],
  imports: [
    BrowserModule,
    PowerBIEmbedModule,
    NgChartsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
