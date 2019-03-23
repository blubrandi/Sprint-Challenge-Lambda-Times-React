import React from 'react';

import PropTypes from 'prop-types'

const Tab = ({tab, selected, selectTabHandler}) => {
  let selectedClass = 'tab'
  if (tab === selected) {
    selectedClass = 'tab active-tab'
  }
  return (
    <div
      className={selectedClass}
      onClick={() => {selectTabHandler(tab)}}
    >
      {tab.toUpperCase()}
    </div>
  )
}

Tab.propTypes = {
  selectedTab: PropTypes.string.isRequired,
  tab: PropTypes.string.isRequired,
  selectTabHandler: PropTypes.func.isRequired
}

export default Tab;
