import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const Tab = ({selectTabHandler, ...props}) => {
  return (
    <TabWrapper {...props} onClick={() => selectTabHandler(props.tab)}>
      {props.tab.toUpperCase()}
    </TabWrapper>
  );
};

Tab.propTypes = {
  tab: PropTypes.string.isRequired,
  selectedTab: PropTypes.string.isRequired,
  selectTabHandler: PropTypes.func.isRequired
}

const TabWrapper = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  color: #fff;
  background-color: #333;
  margin: 0 5px;
  padding: 2px 10px;
  font-size: 12px;
  letter-spacing: 2px;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }

  ${({tab, selectedTab}) => tab === selectedTab && css`
    background-color: #fff;
    color: #333;
    border: 2px solid #333;
  `}
`;

export default Tab;
