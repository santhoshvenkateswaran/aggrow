import { NONE_TYPE } from '@angular/compiler';
import * as Highcharts from 'highcharts';

const FONT_FAMILY = 'Roboto, sans-serif';
const CHARTS_BORDER_COLOR = '#CFDDE6';

export const CHART_DATA = {
    chart: {
        type: 'column',
        backgroundColor: 'white',
        borderColor: CHARTS_BORDER_COLOR,
        borderWidth: 1,
        hover: {
            enabled: false,
        },
        style: {
            fontFamily: FONT_FAMILY,
        },
    },
    tooltip: {
        backgroundColor: 'white',
        useHTML: true,
        borderRadius: 5,
        borderWidth: 0,
        style: {
            color: '#53565A',
            fontSize: '14px',
            lineHeight: '16px'
        }
    },
    colors: [],
    title: {
        text: '',
    },
    credits: {
        enabled: false,
    },
    xAxis:{
        categories: [],
        crosshair: true,
        title: {
            text: ''
        }
     }, 
     yAxis : {
        min: 0,
        title: {
           text: ''         
        }      
     },
    series: [{
        name: '',
        data: []
     }],
    legend: {
        enabled: false,
    },
    plotOptions: {
        column: {
            dataLabels: {
            enabled: true,
            }
        }
    }
};