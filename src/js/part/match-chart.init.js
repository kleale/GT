/*
* Chart start
*/
/* 
Chart.js 
https://code.highcharts.com/highcharts.js
*/
/**
 * Dark theme for Highcharts JS
 * @author Torstein Honsi
 */

// Load the fonts
Highcharts.createElement('link', {
   href: 'https://fonts.googleapis.com/css?family=Roboto',
   rel: 'stylesheet',
   type: 'text/css'
}, null, document.getElementsByTagName('head')[0]);

Highcharts.theme = {
   colors: ["#47c54a", "#df4b4f", "#16b4d1", "#2c708e", "#d300aa", "#c19400", "#a2110c",
      "#55BF3B", "#DF5353", "#7798BF", "#aaeeee"],
   chart: {
      backgroundColor: {
         linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
         stops: [
            [0, '#2D3C48'],
            [1, '#2D3C48']
         ]
      },
      style: {
         fontFamily: "'Roboto', sans-serif"
      },
      plotBorderColor: '#606063'
   },
   title: {
      style: {
         color: '#E0E0E3',
         textTransform: 'uppercase',
         fontSize: '20px'
      }
   },
   subtitle: {
      style: {
         color: '#E0E0E3',
         textTransform: 'uppercase'
      }
   },
   xAxis: {
      gridLineColor: '#364C5D',
      labels: {
         style: {
            color: '#E0E0E3'
         }
      },
      lineColor: '#364C5D',
      minorGridLineColor: '#505053',
      tickColor: '#364C5D',
      title: {
         style: {
            color: '#A0A0A3'

         }
      }
   },
   yAxis: {
      gridLineColor: '#364C5D',
      labels: {
         style: {
            color: '#E0E0E3'
         }
      },
      lineColor: '#364C5D',
      minorGridLineColor: '#505053',
      tickColor: '#364C5D',
      tickWidth: 1,
      title: {
         style: {
            color: '#A0A0A3'
         }
      }
   },
   tooltip: {
      backgroundColor: 'rgba(0, 0, 0, 0.85)',
      style: {
         color: '#F0F0F0'
      }
   },
   plotOptions: {
      series: {
         dataLabels: {
            color: '#B0B0B3'
         },
         marker: {
            lineColor: '#333'
         }
      },
      boxplot: {
         fillColor: '#505053'
      },
      candlestick: {
         lineColor: 'white'
      },
      errorbar: {
         color: 'white'
      },
      bar:{
          borderWidth: '0'
      }
   },
   legend: {
      itemStyle: {
         color: '#E0E0E3'
      },
      itemHoverStyle: {
         color: '#FFF'
      },
      itemHiddenStyle: {
         color: '#606063'
      }
   },
   credits: {
      style: {
         color: '#666'
      }
   },
   labels: {
      style: {
         color: '#707073'
      }
   },

   drilldown: {
      activeAxisLabelStyle: {
         color: '#F0F0F3'
      },
      activeDataLabelStyle: {
         color: '#F0F0F3'
      }
   },

   navigation: {
      buttonOptions: {
         symbolStroke: '#DDDDDD',
         theme: {
            fill: '#505053'
         }
      }
   },

   // scroll charts
   rangeSelector: {
      buttonTheme: {
         fill: '#505053',
         stroke: '#000000',
         style: {
            color: '#CCC'
         },
         states: {
            hover: {
               fill: '#707073',
               stroke: '#000000',
               style: {
                  color: 'white'
               }
            },
            select: {
               fill: '#000003',
               stroke: '#000000',
               style: {
                  color: 'white'
               }
            }
         }
      },
      inputBoxBorderColor: '#505053',
      inputStyle: {
         backgroundColor: '#333',
         color: 'silver'
      },
      labelStyle: {
         color: 'silver'
      }
   },

   navigator: {
      handles: {
         backgroundColor: '#666',
         borderColor: '#AAA'
      },
      outlineColor: '#CCC',
      maskFill: 'rgba(255,255,255,0.1)',
      series: {
         color: '#7798BF',
         lineColor: '#A6C7ED'
      },
      xAxis: {
         gridLineColor: '#505053'
      }
   },

   scrollbar: {
      barBackgroundColor: '#808083',
      barBorderColor: '#808083',
      buttonArrowColor: '#CCC',
      buttonBackgroundColor: '#606063',
      buttonBorderColor: '#606063',
      rifleColor: '#FFF',
      trackBackgroundColor: '#404043',
      trackBorderColor: '#404043'
   },

   // special colors for some of the
   legendBackgroundColor: 'rgba(0, 0, 0, 0.5)',
   background2: '#505053',
   dataLabelsColor: '#B0B0B3',
   textColor: '#C0C0C0',
   contrastTextColor: '#F0F0F3',
   maskColor: 'rgba(255,255,255,0.3)'
};

// Apply the theme
Highcharts.setOptions(Highcharts.theme);

// ALL GANDI
$(function () {
    $('#st-all-chart').highcharts({
        chart: {
            type: 'bar'
        },
        title: {
            text: ''
        },
        subtitle: {
            text: ''
        },
        xAxis: {
            categories: ["Dota2 Lounge", "EGB.com", "VitalBet", "Headshot", "BMC"],
            title: {
                text: null
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Коэффициент',
                align: 'high'
            },
            labels: {
                overflow: 'justify'
            }
        },
        tooltip: {
            valueSuffix: ''
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true
                }
            }
        },
        legend: {
            layout: 'horizontal',
            //align: 'right',
            //verticalAlign: 'top',
            //x: 0,
            //y: 0,
            //floating: true,
            borderWidth: 0,
            backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || 'rgba(0,0,0,0)'),
            shadow: false
        },
        credits: {
            enabled: false
        },
        series: [{
            name: 'London Conspiracy Dota2',
            data: [1.5, 2.5, 1.6, 1.7, 2.1]
        }, {
            name: 'Secret',
            data: [2.2, 1.4, 1.9, 2.5, 1.6]
        }]
    });
});

//#st-gand-chart

$(function () {
    $('#st-gand-chart-t1').highcharts({
        chart: {
          type: 'column',
          spacingBottom: 1,
          spacingTop: 1
        },
        title: {
            text: ''
        },
        xAxis: {
          categories: ["Dota2 Lounge", "EGB.com", "VitalBet", "Headshot", "BMC"],
          labels: {
            enabled: true
            //staggerLines: 2
          },
          opposite: true
        },
        yAxis: {
            tickInterval: 1,
            min: 0,
            plotOptions: {bar: {dataLabels: {enabled: true}}},
            title: {
                enabled: true,
                text: 'Secret'
            }
        },
        legend: {
            layout: 'horizontal',
            verticalAlign: "top",
            borderWidth: 1,
            backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || 'rgba(0,0,0,0)'),
            shadow: false
        },
        plotOptions: {
            borderWidth: 0,
            series: {
                stacking: 'normal'
            },
            bar: {
                dataLabels: {
                    enabled: true
                }
            }
        },
        credits: {
            enabled: false
        },
        series: [{
            name: 'Коэффициент',
            data: [1.5, 2.5, 1.6, 1.7, 2.1],
            index:2,
            zIndex:10
        }, {
            name: 'Гандикап',
            data: [1.2, 0.4, 1, 0.5, 0.6],
            index:1,
            zIndex:9
        }]
    });
  
// вторая команда
  
    $('#st-gand-chart-t2').highcharts({
        chart: {
          type: 'column',
          spacingBottom: 1,
          spacingTop: 1
        },
        title: {
            text: ''
        },
        xAxis: {
          categories: ["Dota2 Lounge", "EGB.com", "VitalBet", "Headshot", "BMC"],
          labels: {enabled: true}
        },
        yAxis: {
            tickInterval: 1,
            reversed: true,
            min: 0,
            plotOptions: {bar: {dataLabels: {enabled: true}}},
            title: {
                //rotation: 0,
                enabled: true,
                text: 'London Conspiracy Dota2'
            }
        },
        legend: {
            layout: 'horizontal',
            verticalAlign: "bottom",
            borderWidth: 0,
            backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || 'rgba(0,0,0,0)'),
            shadow: false
        },
        plotOptions: {
            borderWidth: 0,
            series: {
                stacking: 'normal'
            },
            bar: {
                dataLabels: {
                    enabled: true
                }
            }
        },
        credits: {
            enabled: false
        },
        series: [{
            name: 'Коэффициент',
            data: [1.5, 2.5, 1.6, 1.7, 2.1],
            index:2,
            zIndex:10
        }, {
            name: 'Гандикап',
            data: [1.2, 0.4, 1, 0.5, 0.6],
            index:1,
            zIndex:9
        }]
    });
});


// движение

$(function () {
    $('#st-move-chart-1').highcharts({
        chart: {
            type: 'area',
            spacingBottom: -5,
            spacingTop: 1
        },
        title: {
            text: ''
        },
        xAxis: {
          labels: {
            enabled: false
          },
        },
        yAxis: {
            title: {
                text: 'London Conspiracy Dota2'
            },
            tickInterval: 1
        },
        plotOptions: {
            area: {
                //pointStart: 1940,
                marker: {
                    enabled: false,
                    symbol: 'circle',
                    radius: 2,
                    states: {
                        hover: {
                            enabled: true
                        }
                    }
                }
            }
        },
        legend: {
            layout: 'horizontal',
            verticalAlign: "top",
            borderWidth: 1,
            backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || 'rgba(0,0,0,0)'),
            shadow: false
        },
        series: [{
            name: 'EGB',
            data: [null, null, null, null, null, 1,3,5,3,7,6,5,4,2,6,7,8,5,4,2,1,2]
        }, {
            name: 'VITAL',
            data: [null, null, null, null, null, null, null, null, null, null, 3,2,3,4,1,2,5,3,2,5,2,6,2,3,5,2]
        }]
    });
  
  $('#st-move-chart-2').highcharts({
        chart: {
            type: 'area',
            spacingBottom: 0,
            spacingTop: -5
        },
        title: {
            text: ''
        },
        xAxis: {
          labels: {
            enabled: false
          },
        },
        yAxis: {
            title: {
                text: 'Secret'
            },
            tickInterval: 1,
            reversed: true
        },
        plotOptions: {
            area: {
                //pointStart: 1940,
                marker: {
                    enabled: false,
                    symbol: 'circle',
                    radius: 2,
                    states: {
                        hover: {
                            enabled: true
                        }
                    }
                }
            }
        },
        legend: {
            layout: 'horizontal',
            verticalAlign: "bottom",
            borderWidth: 1,
            backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || 'rgba(0,0,0,0)'),
            shadow: false
        },
        series: [{
            name: 'EGB',
            data: [null, null, null, null, null, 1,3,5,3,7,6,5,4,2,6,7,8,5,4,2,1,2]
        }, {
            name: 'VITAL',
            data: [null, null, null, null, null, null, null, null, null, null, 3,2,3,4,1,2,5,3,2,5,2,6,2,3,5,2]
        }]
    });
});


// 100% выигрыш
$(function () {
    $('#st-100-chart').highcharts({
        chart: {
            type: 'bar',
            spacingTop: 20
        },
        title: {
            text: ''
        },
        subtitle: {
            text: ''
        },
        xAxis: {
            categories: ["Dota2 Lounge", "EGB.com"],
            title: {
                text: null
            }
        },
        yAxis: {
            labels: {
                overflow: 'justify'
            }
        },
        plotOptions: {
            series: {
                stacking: 'normal'
            },
            bar: {
                dataLabels: {
                    enabled: true
                }
            }
        },
        series: [{
            name: 'Коэффициент',
            data: [1.5, 2.5],
            index:2,
            zIndex:10
        }, {
            name: 'Гандикап',
            data: [1.2, 0.4],
            index:1,
            zIndex:9
        }]
    });
});

// st-hot-chart

$(function () {
    $('#st-hot-chart').highcharts({
        chart: {
            type: 'bar'
        },
        title: {
            text: ''
        },
        subtitle: {
            text: ''
        },
        xAxis: {
            categories: ["London Consp VS Navi", "Secret vs Cloud7", "Cloud7 vs MVP.P", "Fanftic vs NAVI", "Secret vs NAVI"],
            title: {
                text: null
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Коэффициент',
                align: 'high'
            },
            labels: {
                overflow: 'justify'
            }
        },
        tooltip: {
            valueSuffix: ''
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true
                }
            }
        },
        legend: {
            layout: 'horizontal',
            //align: 'right',
            //verticalAlign: 'top',
            //x: 0,
            //y: 0,
            //floating: true,
            borderWidth: 0,
            backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || 'rgba(0,0,0,0)'),
            shadow: false
        },
        credits: {
            enabled: false
        },
        series: [{
            name: 'Dota2 Lounge',
            data: [1.5, 2.5, 1.6, 1.7, 2.1]
        }, {
            name: 'EGB.com',
            data: [2.2, 1.4, 1.9, 2.5, 1.6]
        }, {
            name: 'VitalBet',
            data: [2.2, 1.4, 1.9, 2.5, 1.6]
        }, {
            name: 'Headshot',
            data: [2.2, 1.4, 1.9, 2.5, 1.6]
        }, {
            name: 'BMC',
            data: [2.2, 1.4, 1.9, 2.5, 1.6]
        }]
    });
});


/* синдикат Donut */

$(function () {

    //var colors = Highcharts.getOptions().colors;
  
    // Create the chart
    $('#sind_donut').highcharts({
        //categories : ['Эксперты', 'Secret'],
        colors: ["#037db5", "#ea6465"],
        chart: {
            type: 'pie',
            backgroundColor: 'none'
        },
        title: {
            text: ''
        },
        plotOptions: {
            pie: {
                shadow: false,
                center: ['50%', '50%']
            },
            series: {
                borderWidth: 0,
                dataLabels: {
                    enabled: true,
                    reserveSpace: false,
                    useHTML: true,
                    format: '{series.name}<br>{point.name}: {point.y:.1f}%'
                }
            }
        },
        tooltip: {
            valueSuffix: '%'
        },
        series: [{
            name: 'Эксперты',
            data: [
                    ['London', 84.76],
                    ['Secret', 14.24]
                ],
            size: '20%',
            dataLabels: {
              enabled: true,
              inside: true
            }
        }, {
            name: 'Букмекеры',
            data: [
                    ['London', 53.5],
                    ['Secret', 46.5]
                ],
            size: '40%',
            innerSize: '75%'
        }]
        
    });
});


/* Sindicat line*/
$(function () {
    $('#sind_line').highcharts({
        colors: ["#2d6185", "#3f79a2", "#d94c4c", "#b63b3b"],
        chart: {
          type: 'bar',
          backgroundColor: 'none',
          spacingBottom: 5,
          spacingTop: 5,
          spacingLeft: 0,
          spacingRight: 0
        },
        credits: {
          enabled: false
        },
        xAxis: {
           lineWidth: 0,
           minorGridLineWidth: 0,
           lineColor: 'transparent',
           labels: {
               enabled: false
           },
          title: {
            enabled: false
          },
         minorTickLength: 0,
         tickLength: 0,
          
        },
        yAxis: {
           lineWidth: 0,
           minorGridLineWidth: 0,
           lineColor: 'transparent',
           labels: {
               enabled: false
           },
          title: {
            enabled: false
          },
           minorTickLength: 0,
           tickLength: 0
        },
        title: {
            enabled: false,
            text:''
        },
        legend: {
            enabled: false
        },
        plotOptions: {
            series: {
              stacking: 'percent',
              crop: false,
              title:''
            }
        },
        tooltip: {
            headerFormat: ''
        },
        series: [{
            name: 'London (Э)',
            data: [62],
            index: 4
        }, {
            name: 'London (Б)',
            data: [279],
            index: 3
        }, {
            name: 'Cloud7 (Б)',
            data: [8],
            index: 2
        }, {
            name: 'Cloud7 (Э)',
            data: [4],
            index: 1
        }]
    });
});

