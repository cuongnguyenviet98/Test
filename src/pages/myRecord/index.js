import React, { useState } from 'react';
import './styles.scss';
import ScrollToTopButton from '../../components/scrollToTopButton';
import { MyRecommend1, MyRecommend2, MyRecommend3 } from '../../static/image/jpg';
import Chart from '../../components/chart';
import { myDiaryData, myExerciseData } from './handler';
import _ from 'lodash';

const MyRecord = () => {
  const initialItemsToShow = 8;
  const currentDate = new Date();
  const [itemsToShow, setItemsToShow] = useState(initialItemsToShow);

  const handleLoadMore = () => {
    setItemsToShow((prevItems) => prevItems + initialItemsToShow);
  };

  const renderDetailOption = (srcImg, title, noteTitle) => (
    <div className='item-option'>
      <img src={srcImg} alt="My Recommend 1" />
      <div className='text-option'>
        <p className='title'>{title}</p>
        <span className='note-title'>{noteTitle}</span>
      </div>
    </div>
  )

  const renderTitle = (title) => {
    return (
      `${title} ${currentDate.getFullYear()}.${currentDate.getMonth() + 1}.${currentDate.getDate()}`
    )
  }

  return (
    <div className='my-record'>
      <div className='detail-option'>
        {renderDetailOption(MyRecommend1, 'BODY RECORD', '自分のカラダの記録')}
        {renderDetailOption(MyRecommend2, 'MY EXERCISE', '自分の運動の記録')}
        {renderDetailOption(MyRecommend3, 'MY DIARY', '自分の日記')}
      </div>
      <div className='body-record-chart'>
        <Chart title={renderTitle('BODY RECORD')} />
      </div>
      <div className='my-exercise'>
        <p className='title'>{renderTitle('MY EXERCISE')}</p>
        <div className='my-exercise-content'>
          {
            _.map(myExerciseData, (d) => (
              <div className='content'>
                <div className='content-left'>
                  <div className='title'>&#8226; {d.title}</div>
                  <div className='kcal'>{d.kcal}</div>
                </div>
                <div className='content-right'>{d.time}</div>
              </div>
            ))
          }
        </div>
      </div>
      <div className='my-diary'>
        <div className='big-title'>MY DIARY</div>
        <div className='diary-box'>
          {
            _.map(myDiaryData.slice(0, itemsToShow), (d) => (
              <div className='diary-content'>
                <p className='date'>{d.date}</p>
                <p className='time'>{d.time}</p>
                <p className='title'>{d.title}</p>
                <p className='note'>{d.note}</p>
              </div>
            ))
          }
        </div>
        <div className='button-box'>
        <button className='more-button' onClick={handleLoadMore}>記録をもっと見る</button>
        </div>
      </div>
      <ScrollToTopButton className="scroll-to-top-button" />
    </div>
  );
};


export default MyRecord;
