export const data = {
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


export const options = {
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