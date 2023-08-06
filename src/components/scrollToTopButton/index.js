import React, { useState, useEffect } from 'react';
import "./styles.scss";
import PropTypes from 'prop-types';
import { ScrollIcon } from '../../static/image/svg';

const ScrollToTopButton = (props) => {
  const [isVisible, setIsVisible] = useState(false);

 // Handle page scroll event
  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Handle click event to scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    // Attach event handlers to the page scroll event
    window.addEventListener('scroll', handleScroll);

   // Clean up event handlers when component is destroyed
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={props.className}>
      {isVisible && (
       <img onClick={scrollToTop} src={ScrollIcon} alt="Scroll Icon"/>
      )}
    </div>
  );
};

ScrollToTopButton.defaultProps = {
  className: '',
};

ScrollToTopButton.propTypes = {
  className: PropTypes.string,
};


export default ScrollToTopButton;