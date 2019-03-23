import React from 'react';

import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

const TabClass = styled.div`
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

    ${props => 
      props.selectedTabClass === props.tab &&
      css`
      background-color: #fff;
      color: #333;
      border: 2px solid #333;
    `}
`

const Tab = ({tab, selected, selectTabHandler}) => {
  let selectedTabClass = 'tab'
  if (tab === selected) {
    selectedTabClass = 'tab active-tab'
  }
  
  return (
    <TabClass
    selectedTabClass={selectedTabClass}
      onClick={() => {selectTabHandler(tab)}}
    >
      {tab.toUpperCase()}
    </TabClass>
  )
}

Tab.propTypes = {
  selectedTab: PropTypes.string.isRequired,
  tab: PropTypes.string.isRequired,
  selectTabHandler: PropTypes.func.isRequired
}

export default Tab;
