import { Component, OnInit, Input } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-graficas',
  templateUrl: './graficas.component.html',
  styleUrls: ['./graficas.component.css']
})
export class GraficasComponent implements OnInit {

  @Input('label') public doughnutChartLabels: Label[] = [];
  @Input('datos') public doughnutChartData: MultiDataSet = [];
  @Input('tipo') public doughnutChartType: ChartType = 'doughnut';

  public donutColors=[
    {
      backgroundColor: [
        'red',
        'blue',
        'rgba(0, 148, 97, 1)',
        'rgba(129, 78, 40, 1)',
        'rgba(129, 199, 111, 1)'
    ]
    }
  ];

  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }


  constructor() { }

  ngOnInit(): void {
  }

}
