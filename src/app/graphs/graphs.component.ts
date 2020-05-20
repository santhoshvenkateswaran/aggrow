import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts'
import { CHART_DATA } from './graphs.model';

// high charts dependencies
declare let require: any;
const Boost = require('highcharts/modules/boost');
const noData = require('highcharts/modules/no-data-to-display');
const More = require('highcharts/highcharts-more');
const exportMap = require('highcharts/modules/exporting');
const highstock = require('highcharts/modules/stock');
const fullScreen = require('highcharts/modules/full-screen');

Boost(Highcharts);
noData(Highcharts);
More(Highcharts);
noData(Highcharts);
exportMap(Highcharts);
highstock(Highcharts);
fullScreen(Highcharts);

@Component({
  selector: 'app-graphs',
  templateUrl: './graphs.component.html',
  styleUrls: ['./graphs.component.scss']
})
export class GraphsComponent implements OnInit {

  highCharts: any
  Highcharts = Highcharts;
  chartOptions = {};
  isSet: boolean;
  curChart: string;
  crops = ['Arecanut', 'Bajra', 'Banana', 'Cashewnut', 'Castor', 'Chillies', 'Coconut', 'Coriander',
    'Cotton', 'Gram', 'Groundnut', 'Horse-gram', 'Jowar', 'Maize', 'Moong', 'Onion', 'Ragi', 'Rice', 'Sesamum',
    'Sugarcane', 'Sunflower', 'Sweet potato', 'Tapioca', 'Turmeric', 'Urad'];
  cropCount = [];
  algorithms = [];
  accuracies = [];
  cropInfo = [];
  tableInfo = [];

  constructor() {
    this.highCharts = Highcharts;
    this.chartOptions = {};
    this.algorithms = ['Logistic Regression', 'Naive Bayes', 'Decision Tree', 'SVM', 'Gradient Boosting', 'Our Proposed Algortihm'];
    this.cropCount = [146, 411, 433, 325, 307, 392, 203, 269, 504, 216, 543, 368, 402, 425, 486, 380,
      477, 496, 350, 168, 438, 313, 385, 357, 508];
    // this.accuracies = [0.781, 0.788, 0.819, 0.873, 0.914, 0.936, 0.945];
    this.accuracies = [68.19, 73.83, 87.35, 90.10, 92.62, 95.49];
    this.cropInfo = [
      { name: "Arecanut", img: "assets/IMG/Arecanut.jpg" },
      { name: "Bajra", img: "assets/IMG/Bajra.jpg" },
      { name: "Banana", img: "assets/IMG/Banana.jpeg" },
      { name: "Cashewnut", img: "assets/IMG/Cashewnut.jpg" },
      { name: "Castor seed", img: "assets/IMG/Castor.jpeg" },
      { name: "Chillies", img: "assets/IMG/Chillies.jpg" },
      { name: "Coconut", img: "assets/IMG/Coconut.jpg" },
      { name: "Coriander", img: "assets/IMG/Coriander.jpg" },
      { name: "Cotton", img: "assets/IMG/Cotton.jpg" },
      { name: "Gram", img: "assets/IMG/Gram.jpg" },
      { name: "Groundnut", img: "assets/IMG/Groundnut.jpg" },
      { name: "Horse-gram", img: "assets/IMG/Horse.jpg" },
      { name: "Jowar", img: "assets/IMG/Jowar.jpg" },
      { name: "Maize", img: "assets/IMG/Maize.jpg" },
      { name: "Moong", img: "assets/IMG/Moong.jpg" },
      { name: "Onion", img: "assets/IMG/Onion.png" },
      { name: "Ragi", img: "assets/IMG/Ragi.jpg" },
      { name: "Rice", img: "assets/IMG/Rice.jpeg" },
      { name: "Sesamum", img: "assets/IMG/Sesamum.jpg" },
      { name: "Sugarcane", img: "assets/IMG/Sugarcane.jpeg" },
      { name: "Sunflower", img: "assets/IMG/Sunflower.png" },
      { name: "Sweet potato", img: "assets/IMG/Sweet.jpg" },
      { name: "Tapioca", img: "assets/IMG/Tapioca.jpg" },
      { name: "Turmeric", img: "assets/IMG/Turmeric.jpg" },
      { name: "Urad", img: "assets/IMG/Urad.jpg" },
    ];
    this.tableInfo = [
      [1, 1, 0, 0, 1, 0.9549],
      [1, 0, 1, 0, 1, 0.9490],
      [0, 0, 0, 0, 1, 0.9479],
      [1, 0, 0, 1, 1, 0.9452],
      [1, 0, 0, 0, 0, 0.9436],
      [1, 0, 0, 0, 1, 0.9430],
      [1, 1, 1, 0, 1, 0.9404],
      [1, 1, 0, 1, 1, 0.9242],
      [1, 1, 1, 1, 1, 0.9183],
      [0, 1, 0, 0, 1, 0.9146],
      [1, 1, 0, 0, 0, 0.9146],
      [1, 1, 0, 1, 0, 0.9070],
      [1, 1, 1, 0, 0, 0.9054],
      [0, 1, 0, 1, 1, 0.8984],
      [0, 1, 1, 0, 1, 0.8974],
      [1, 0, 1, 1, 1, 0.8753],
      [0, 1, 0, 0, 0, 0.8538],
      [0, 0, 1, 0, 1, 0.8495],
      [1, 1, 1, 1, 0, 0.8490],
      [0, 1, 1, 1, 1, 0.8474],
      [1, 0, 1, 0, 0, 0.8426],
      [0, 0, 0, 1, 1, 0.8361],
      [1, 0, 0, 1, 0, 0.8334],
      [0, 0, 1, 1, 1, 0.8291],
      [1, 0, 1, 1, 0, 0.8270],
      [0, 1, 0, 1, 0, 0.8200],
      [0, 1, 1, 0, 0, 0.8092],
      [0, 1, 1, 1, 0, 0.7985],
      [0, 0, 1, 1, 0, 0.7781],
      [0, 0, 0, 1, 0, 0.7743],
      [0, 0, 1, 0, 0, 0.7738],
      // [0, 0, 0, 0, 0, 0.0231],
    ];
  }

  ngOnInit(): void {
    this.isSet = false;
    this.setData('crop-list');
  }

  setData(chartName: string): void {
    if (chartName == 'crop-list') {
      this.isSet = false;
      this.curChart = 'crop-list';
      setTimeout(() => {
        this.isSet = true;
      }, 400);
    } else if (chartName == 'crop-distribution') {
      this.curChart = 'crop-distribution';
      this.isSet = false;
      this.chartOptions = JSON.parse(JSON.stringify(CHART_DATA));
      this.chartOptions['colors'] = ['#1fa67a'];
      this.chartOptions['title'].text = 'Crop Distribution';
      this.chartOptions['tooltip'].pointFormat = '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> {point.percentage:.0f}<br/>',
        this.chartOptions['xAxis'].categories = this.crops;
      this.chartOptions['xAxis'].title.text = 'Crop Variety';
      this.chartOptions['yAxis'].title.text = 'Number of Records';
      this.chartOptions['series'][0].name = 'Count';
      this.chartOptions['series'][0].data = this.cropCount;
      this.isSet = true;
    } else if (chartName == 'algorithm-analysis') {
      this.curChart = 'algorithm-analysis';
      this.isSet = false;
      this.chartOptions = JSON.parse(JSON.stringify(CHART_DATA));
      this.chartOptions['colors'] = ['#3498DB'];
      this.chartOptions['title'].text = 'Algorithms Analysis';
      this.chartOptions['xAxis'].categories = this.algorithms;
      this.chartOptions['xAxis'].title.text = 'Algorithm';
      this.chartOptions['yAxis'].title.text = 'Accuracy';
      this.chartOptions['yAxis'].max = 100;
      this.chartOptions['tooltip'].pointFormat = '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> {point.percentage:.0f}%<br/>',
        this.chartOptions['series'][0].name = 'Accuracy';
      this.chartOptions['series'][0].data = this.accuracies;
      this.isSet = true;
    } else if (chartName == 'algorithm-ensemble') {
      this.isSet = false;
      this.curChart = 'algorithm-ensemble';
      setTimeout(() => {
        this.isSet = true;
      }, 400);
    }
  }

}
