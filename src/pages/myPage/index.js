import React, { useState } from 'react';
import _ from 'lodash';
import './styles.scss';
import Chart from '../../components/chart';
import PieChart from '../../components/pieChart';
import { DinnerIcon, LunchIcon, MorningIcon, SnackIcon } from '../../static/image/svg';
import { fakeMeals } from './handler';
import ScrollToTopButton from '../../components/scrollToTopButton';

const MyPage = () => {
  const initialItemsToShow = 2;

  const [itemsToShow, setItemsToShow] = useState(initialItemsToShow);
  const fakePercentage = Math.floor(Math.random() * 101);

  const handleLoadMore = () => {
    setItemsToShow((prevItems) => prevItems + initialItemsToShow);
  };


  return (
    <div className='my-page'>
      <div className='top-my-page'>
        <div className='left-my-page'>
          <div className='chart-custom'>
            <PieChart fakePercentage={fakePercentage} />
          </div>
        </div>
        <div className='right-my-page'>
          <Chart isHideButton/>
        </div>
      </div>
      <div className='bottom-my-page'>
        <div className='meals'>
          <img src={MorningIcon} alt="Morning Icon" />
          <img src={LunchIcon} alt="Lunch Icon" />
          <img src={DinnerIcon} alt="Dinner Icon" />
          <img src={SnackIcon} alt="Snack Icon" />
        </div>
        <div className='meals-content'>
          {
            _.map(fakeMeals.slice(0, itemsToShow), (d) => (
              _.map(d.meals, (item) => (
                <div className='meal-item'>
                  <img src={item.image} alt="" />
                  <span>
                    {`${d.date}.${item.name}`}
                  </span>
                </div>
              ))
            ))
          }
        </div>
        <div className='button-box'>
        <button className='more-button' onClick={handleLoadMore}>記録をもっと見る</button>
        </div>
      </div>
      <ScrollToTopButton/>
    </div>
  );
};


export default MyPage;
