
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