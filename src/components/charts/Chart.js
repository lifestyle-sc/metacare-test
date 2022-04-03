import { CalendarTodayOutlined } from '@mui/icons-material';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
import { useEffect, useContext } from 'react';
import StocksContext from '../../context/StocksContext';
import { getLabelAndDataSet } from '../../context/stocksAction';
import { options } from '../../chart.config';

const Chart = ({ title, color, keyword }) => {
  const stocksContext = useContext(StocksContext);

  const { dispatch, dataSet, label } = stocksContext;

  const data = {
    labels: label,
    datasets: [
      {
        id: 1,
        label: '',
        data: dataSet,
        borderColor: color,
        borderWidth: 1.3,
        pointBackgroundColor: '#ffffff',
      },
    ],
  };

  useEffect(() => {
    const resolvePromise = async () => {
      const data = await getLabelAndDataSet();
      dispatch({ type: "GET_lABEL_AND_DATASET", payload: data });
    };

    resolvePromise();

    console.log(dataSet)
  }, []);
  return (
    <div className="chart">
      <div className="chart--main">
        <div className="chart--main--header">
          <div className="chart--main--header--left">
            <h3 className="chart--main--header--title">
              {title}
            </h3>
            <span className="chart--main--header--profit">+4.14%</span>
          </div>
          <div className="chart--main--header--right">
            <div className="chart--main--header--sub--title">
              <span className="chart--main--header--sub--title--left" style={{backgroundColor: color}}></span>
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
          <Line datasetIdKey="id" data={data} options={options} />
        </div>
      </div>

      <div className="chart--aside">
        <div className="chart--aside--item">
          <h5 className="chart--aside--item--title">Average {keyword} Time</h5>
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
