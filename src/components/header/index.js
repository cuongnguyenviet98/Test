import { Button } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { ChallengeIcon, InfoIcon, LogoIcon, MemoIcon, MenuIcon } from '../../static/image/svg';
import './styles.scss';


const Header = (props) => {
  const history = useHistory();

  const onGoBack = () => {
    history.push('/');
  };


  return (
   <div className='main-header'>
      <img className='logo-img' onClick={onGoBack} src={LogoIcon} alt="Logo Icon"/>
      <div className='header-right'>
      <Button onClick={() => history.push('./my-record')} className='header-button' children="自分の記録" icon={<img src={MemoIcon} alt="Memo Icon" />} />
      <Button className='header-button' children="チャレンジ" icon={<img src={ChallengeIcon} alt="Challenge Icon" />} />
      <Button className='header-button' children="お知らせ" icon={<img src={InfoIcon} alt="Info Icon" />} />
      <Button className='header-button' icon={<img src={MenuIcon} alt="Menu Icon" />} />
      </div>
   </div>
  );
};

Header.defaultProps = {
  onGoBack: () => {},
};

Header.propTypes = {
  onGoBack: PropTypes.func,
};

export default Header;
