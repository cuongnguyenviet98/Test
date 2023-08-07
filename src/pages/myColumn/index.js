import React, { useState } from 'react';
import './styles.scss';
import ScrollToTopButton from '../../components/scrollToTopButton';
import { fakeColumns } from './handler';
import _ from 'lodash';

const MyColumn = () => {

  const initialItemsToShow = 2;

  const [itemsToShow, setItemsToShow] = useState(initialItemsToShow);

  const handleLoadMore = () => {
    setItemsToShow((prevItems) => prevItems + initialItemsToShow);
  };

  const renderDetailOption = (title, subTitle) => (
    <div className='item-option'>
      <p className='title'>{title}</p>
      <p className='sub-border' />
      <p className='sub-title'>{subTitle}</p>
    </div>
  )

  return (
    <div className='my-column'>
      <div className='column-option'>
        {renderDetailOption('RECOMMENDED COLUMN', 'オススメ')}
        {renderDetailOption('RECOMMENDED DIET', 'ダイエット')}
        {renderDetailOption('RECOMMENDED BEAUTY', '美容')}
        {renderDetailOption('RECOMMENDED HEALTH', '健康')}
      </div>
      <div className='detail-column'>
        {
          _.map(fakeColumns.slice(0, itemsToShow), (d) => (
            _.map(d.column, (item) => (
              <div className='column-item'>
                <div className='img-box'>
                  <img src={item.image} alt="" />
                  <span>
                    {`${d.date}.${item.time}`}
                  </span>
                </div>
                <p className='sub-title'>{item.subTitle}</p>
                <p className='title'>{item.title}</p>
              </div>
            ))
          ))
        }
      </div>
      <div className='button-box'>
        <button className='more-button' onClick={handleLoadMore}>記録をもっと見る</button>
        </div>
      <ScrollToTopButton className="scroll-to-top-button" />
    </div>
  );
};


export default MyColumn;
