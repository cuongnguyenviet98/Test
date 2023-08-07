import React, { useState, useEffect } from 'react';
import Highcharts from 'highcharts';
import PropTypes from 'prop-types';
import "./styles.scss";

const Chart = (props) => {
  const [dataByDay, setDataByDay] = useState([]);
  const generateDataForDay = (date) => {
    return {
      date: date,
      weight: parseFloat((Math.random() * 100).toFixed(2)), // Fake body weight
      bodyFatPercentage: parseFloat((Math.random() * 50).toFixed(2)) // Fake body fat percentage
    };
  };
  const numDays = 30;

  useEffect(() => {
    const today = new Date();
    // Create array of data by date
    const dataByDayArr = Array.from({ length: numDays }, (_, index) => {
      const currentDate = new Date(today);
      currentDate.setDate(currentDate.getDate() - index);
      return generateDataForDay(currentDate.toISOString().slice(0, 10));
    });
    setDataByDay(dataByDayArr);

  }, []);

  useEffect(() => {
   // Create spline-symbols data from dataByDay array to use in Highcharts chart
    const weightData = dataByDay.map((dataItem) => ({
      x: new Date(dataItem.date).getTime(),
      y: dataItem.weight
    }));

    const bodyFatData = dataByDay.map((dataItem) => ({
      x: new Date(dataItem.date).getTime(),
      y: dataItem.bodyFatPercentage
    }));

    // Create Highcharts chart
    Highcharts.chart('chart-container', {
      chart: {
        type: 'spline',
        backgroundColor: '#2E2E2E' // Set background color to black
      },
      title: {
        text: props.title,
        align: 'left',
        style: {
          color: '#FFF',
          fontSize: "15px",
          fontWeight: "400",
        }
      },
      xAxis: {
        type: 'datetime',
        gridLineColor: '#777777', // Đặt màu đường kẻ theo chiều dọc,
        gridLineWidth: 1,
        labels: {
          style: {
            color: '#FFFFFF'// Set text color to white
          }
        }
      },
      yAxis: [{
        title: {
          text: '',
          style: {
            color: '#FFFFFF' // Set text color to white
          }
        }, 
        gridLineColor: 'transparent', // Set horizontal line color to transparent
        gridLineWidth: 0,// Do not draw horizontal lines
        // labels: {
        //   style: {
        //     color: 'red'
        //   }
        // }
        enabled: false
      }, {
        title: {
          text: '',
          style: {
            color: '#FFFFFF' // Set text color to white
          }
        },
        gridLineColor: 'transparent', // Set horizontal line color to transparent
        gridLineWidth: 0, // Do not draw horizontal lines
        opposite: true,
        // labels: {
        //   style: {
        //     color: '#FFFFFF'
        //   }
        // }
        enabled: false
      },
    ],
      series: [{
        name: 'Weight',
        data: weightData,
        color: '#8FE9D0',
        marker: {
          enabled: true,
          symbol: 'circle',
          radius: 4
        }
      }, {
        name: 'Body Fat Percentage',
        data: bodyFatData,
        color: '#FFCC21',
        yAxis: 1, // Use 2nd axis for fat percentage
        marker: {
          enabled: true,
          symbol: 'square',
          radius: 4
        }
      }],
      // legend: {
      //   itemStyle: {
      //     color: '#FFFFFF'
      //   }
      // },
      legend: {
        enabled: false // Turn off legend
      },
      credits: {
        enabled: false // Turn off Highcharts' author info
      }
    });
  }, [dataByDay]);


  return (
     <div style={{ position: 'relative',  width: '100%', height: '100%' }}>
     <div  id="chart-container" style={{  height: !props.isHideButton ? '88%' : '100%' }}></div>
     <div style={{ position: 'absolute', left: '10px', bottom: '10px' }}>
       {!props.isHideButton && (
       <div className='chart-button-option'>
         <button>日</button>
        <button>週</button>
        <button>月</button>
        <button>年</button>
       </div>
       )}
     </div>
   </div>
  );
};

Chart.defaultProps = {
  title: '',
  isHideButton: false,
};

Chart.propTypes = {
  title: PropTypes.string,
  isHideButton: PropTypes.bool,
};

export default Chart;
