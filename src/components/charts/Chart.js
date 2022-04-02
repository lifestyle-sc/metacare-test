import { CalendarTodayOutlined } from '@mui/icons-material';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
import React from 'react';

const data = {
  labels: [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ],
  datasets: [
    {
      id: 1,
      label: '',
      // fill: true,
      // data: [20, 9.5, 10, 42, 16, 12.5, 35, 45.5, 27.9, 19.5, 33, 23.5],
      data: [
        200000, 95000, 101000, 82000, 100000, 125000, 155200, 120000, 210950,
        195800, 150000, 235000,
      ],
      borderColor: '#f05d23',
      borderWidth: 1.3,
      pointBackgroundColor: '#ffffff',
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    y: 
      {
        grid: {
          drawBorder: false,
          color: '#ECEBF5',

        },
        ticks: {
          color: '#696D8C',
        },
      },
    x:
      {
        grid: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          color: '#696d8c',
        },
      },
  },
}

const Chart = () => {
  return (
    <div className="chart">
      <div className="chart--main">
        <div className="chart--main--header">
          <div className="chart--main--header--left">
            <h3 className="chart--main--header--title">
              Average response Time
            </h3>
            <span className="chart--main--header--profit">+4.14%</span>
          </div>
          <div className="chart--main--header--right">
            <div className="chart--main--header--sub--title">
              <span className="chart--main--header--sub--title--left"></span>
              <h5 className="chart--main--header--sub--title--right">
                High Priority
              </h5>
            </div>
            <button type="button" className="chart--main--calender">
              This Month
              <CalendarTodayOutlined fontSize="small" className="icon-small" />
            </button>
          </div>
        </div>

        <div className="chart--main--chart">
          <Line
            datasetIdKey="id"
            data={data}
            options={options}
          />
        </div>
      </div>

      <div className="chart--aside">
        <div className="chart--aside--item">
          <h5 className="chart--aside--item--title">Average Response Time</h5>
          <p className="chart--aside--item--body">30 Mins</p>
        </div>

        <div className="chart--aside--item">
          <h5 className="chart--aside--item--title">Response Time</h5>
          <p className="chart--aside--item--body">1 Hour 30 Mins</p>
        </div>
      </div>
    </div>
  );
};

export default Chart;
