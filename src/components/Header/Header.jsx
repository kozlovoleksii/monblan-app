import './Header.css';
import { useEffect } from 'react';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import logo from '../../assets/logo.png';
import wave from '../../assets/images/header-wave.png';

export const Header = () => {
  useEffect(() => {
    flatpickr('#dateFrom', {
      dateFormat: 'd-m-Y',
    });
    flatpickr('#dateTo', {
      dateFormat: 'd-m-Y',
    });
  }, []);

  return (
    <header className="header">
      <img src={wave} alt="decorative wave" className="header__wave" />
      <div className="header__logo">
        <img src={logo} alt="Monblan logo" />
      </div>
      <div className="header__info">
        <div className="header__top">
          <h1 className="header__title">monblanproject</h1>
          <button className="header__start-btn">Start on 17-02-2016</button>
        </div>
        <div className="header__stats">
          <span>
            <strong>870</strong> posts
          </span>
          <span>
            <strong>11,787</strong> followers
          </span>
          <span>
            <strong>112</strong> following
          </span>
        </div>
        <div className="header__filters">
          <label htmlFor="dateFrom">Date</label>
          <input type="text" id="dateFrom" placeholder="from" />
          <input type="text" id="dateTo" placeholder="to" />
        </div>
      </div>
    </header>
  );
};
