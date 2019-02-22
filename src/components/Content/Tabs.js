import React from 'react';
import Tab from './Tab';
import PropTypes from 'prop-types';

const Tabs = ({tabs, ...props}) => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {tabs.map(tab => <Tab tab={tab} key={tab} {...props} />)}
      </div>
    </div>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedTab: PropTypes.string.isRequired,
  selectTabHandler: PropTypes.func.isRequired
}

export default Tabs;
