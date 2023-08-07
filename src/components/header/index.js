import { Button, Popover } from 'antd';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { ChallengeIcon, InfoIcon, LogoIcon, MemoIcon, MenuIcon } from '../../static/image/svg';
import './styles.scss';


const Header = (props) => {
  const [open, setOpen] = useState(false);
  const hide = () => {
    setOpen(false);
  };
  const handleOpenChange = (newOpen) => {
    setOpen(newOpen);
  };
  const history = useHistory();

  const onGoBack = () => {
    history.push('/');
  };

  const renderContent = () => (
    <div className='box-menu'>
      <div onClick={() => history.push('./my-record')} className='item'>自分の記録</div>
      <div className='item'>体重グラフ</div>
      <div className='item'>目標</div>
      <div className='item'>選択中のコース</div>
      <div onClick={() => history.push('./my-column')} className='item'>コラム一覧</div>
      <div className='item'>設定</div>
    </div>
  )

  return (
    <div className='main-header'>
      <img className='logo-img' onClick={onGoBack} src={LogoIcon} alt="Logo Icon" />
      <div className='header-right'>
        <Button onClick={() => history.push('./my-record')} className='header-button' children="自分の記録" icon={<img src={MemoIcon} alt="Memo Icon" />} />
        <Button className='header-button' children="チャレンジ" icon={<img src={ChallengeIcon} alt="Challenge Icon" />} />
        <Button className='header-button' children="お知らせ" icon={<img src={InfoIcon} alt="Info Icon" />} />
        <Popover
        className='popover-box'
          content={renderContent()}
          trigger="click"
          placement="bottomRight"
          open={open}
          onOpenChange={handleOpenChange}

        >
          <Button className='header-button' icon={<img src={MenuIcon} alt="Menu Icon" />} />
        </Popover>
      </div>
    </div>
  );
};

Header.defaultProps = {
  onGoBack: () => { },
};

Header.propTypes = {
  onGoBack: PropTypes.func,
};

export default Header;
