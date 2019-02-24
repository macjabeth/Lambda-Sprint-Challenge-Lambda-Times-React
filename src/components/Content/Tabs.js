import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Tab from './Tab';

const Tabs = ({tabs, ...props}) => {
  return (
    <TabsContainer>
      <Topics>
        <Title>TRENDING TOPICS:</Title>
        {tabs.map(tab => <Tab tab={tab} key={tab} {...props} />)}
      </Topics>
    </TabsContainer>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedTab: PropTypes.string.isRequired,
  selectTabHandler: PropTypes.func.isRequired
}

const TabsContainer = styled.div`
  border-bottom: 1px solid lightgrey;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: 47px;
  background-color: #fff;

  @media (min-width: 1280px) {
    width: 1280px;
  }
`;

const Topics = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
`;

const Title = styled.span`
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
`;

export default Tabs;
