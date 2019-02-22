import React from 'react';
import PropTypes from 'prop-types';

const Tab = ({tab, selectedTab, selectTabHandler}) => {
  const tabClass = ['tab'].concat(tab === selectedTab ? ['active-tab'] : []).join(' ');
  return (
    <div className={tabClass} onClick={() => selectTabHandler(tab)}>
      {tab.toUpperCase()}
    </div>
  );
};

Tab.propTypes = {
  tab: PropTypes.string.isRequired,
  selectedTab: PropTypes.string.isRequired,
  selectTabHandler: PropTypes.func.isRequired
}

export default Tab;
