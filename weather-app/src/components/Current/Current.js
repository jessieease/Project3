import React from 'react';
import Temperature from '../Temperature';
import VerticalDivider from '../VerticalDivider';
import Text from './components/Text';
import Meta from './components/Meta';
import getWeather from '../../apis/getWeather';
import styles from './Current.module.css';

class Current extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      data: null,
      loading: true,
    };
    
    this.setData = this.setData.bind(this);
  }

  setData(data) {
    this.setState(data);
  }

  getWeather() {
    getWeather('2158177', (data) => {
      this.setData({
        temp: data.main.temp,
        weather: data.weather[0].main,
        humidity: `${data.main.humidity}%`,
        wind: `${data.main.wind} km/h`,
        cityName: data.name,
      })
    });
  }

  componentDidMount() {
    this.getWeather();
  }


  render() {
    const { data } = this.state;
    console.log(this.state,111);

    if(!data) {
      return 'Loading...'
    }
    return (
      <div data-testid="CURRENT" className={styles.current}>
        <div className={styles.left}>
        </div>
        <React.Fragment>
          <div className={styles.left}>
            <div data-testid="TEMP" className={styles.temperature}>
              <Temperature>{data.main.temp}</Temperature>
            </div>
            <div data-testid="WEATHER" className={styles.weather}>
              <Text>{data.weather[0].main}</Text>
            </div>
            <div className={styles.metas}>
              <div data-testid="HUMIDITY" className={styles.humidity}>
                <Meta title="HUMIDITY" value={`${data.main.humidity}%`} />
              </div>
              <VerticalDivider width="2px" color="rgba(255, 255, 255, 0.7)" />
              <div data-testid="WIND" className={styles.wind}>
                <Meta title="WIND" value={`${data.wind.speed} K/M`} />
              </div>
            </div>
          </div>
          <div className={styles.right}>
          <h1 data-testid="NAME" className={styles.city}>{data.name}</h1>
          </div>
        </React.Fragment>
      )
      <div className={styles.bottom} />
    </div>
    )
  }
};

export default Current;
