import { ExpandMore, Menu, NotificationsNone, Search } from '@mui/icons-material';
import Chart from './charts/Chart';

const Main = () => {
  return (
    <div>
      <header className="main--header">
        <Menu className='main--header--menu--icon'/>
        <div className="main--header--input--container">
          <input
            type="text"
            className="main-header--input"
            placeholder="Ask us any question"
          />
          <Search fontSize="small" className="light-text-muted" />
        </div>

        <div className="main--header--profile">
          <div className="main--header--notify">
            <NotificationsNone fontSize="small" className="notification--bar" />
            <span className="notification--message">3</span>
          </div>
          <div className="main--header--profile--details">
            <div className="profile--img"></div>
            <ExpandMore fontSize="small" className="text-muted" />
          </div>
        </div>
      </header>

      <main className="main--section">
        <div className="main--section--header">
          <ul className="main--section--list">
            <li className="main--section--list--item main--section--list--item--active">
              <button className="main--section--list--button">
                Efficiency
              </button>
            </li>
            <li className="main--section--list--item">
              <button className="main--section--list--button">Volume</button>
            </li>
            <li className="main--section--list--item">
              <button className="main--section--list--button">
                Customer Satisfaction
              </button>
            </li>
            <li className="main--section--list--item">
              <button className="main--section--list--button">Backlog</button>
            </li>
          </ul>
        </div>

        <div className="main--section--menu">
          <div className="main--section--menu--header">
            <h2 className="main--section--menu--h1">Efficiency Analytics</h2>
            <div className="main--section--menu--form">
              <div className="main--section--menu--input--container">
                <Search
                  fontSize="small"
                  className="icon-small light-text-muted"
                />
                <input
                  type="text"
                  placeholder="Search"
                  className="main--section--menu--input"
                />
              </div>
              <button type="button" className="main--section--menu--filter">
                Filter Options
                <ExpandMore fontSize="small" className="icon-small" />
              </button>

              <button type="button" className="main--section--menu--exportBtn">
                Export
              </button>
            </div>
          </div>
          <Chart title={'Average response time'} color={'#f05d23'} keyword={'Response'}/>
          <Chart title={'Replies per resolution'} color={'#3e68ff'} keyword={'Replies'}/>
          <Chart title={'Average resolution time'} color={'#fb6491'} keyword={'Resolution'}/>
          <Chart title={'First contact resolution rate'} color={'#07c9e2'} keyword={'Contact'}/>
        </div>
      </main>
    </div>
  );
};

export default Main;
