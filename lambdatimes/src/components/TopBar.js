import React from 'react';

import styled from 'styled-components'

const SiteTopBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  position: fixed;
  height: 44px;
  background-color: #333;
  top: 0;

container {
  width: 100%;
  display: flex;
  justify-content: none;
  align-items: none;
  flex-direction: row;
  color: #fff;
  letter-spacing: 1px;
  padding: 0 10px;
}
@media (min-width: 1280px) {
  container {
    width: 1280px;
  }
}
containerLeft {
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
}
containerLeftLink {
  cursor: pointer;
  margin-right: 25%;
  font-weight: bold;
}
containerCenter {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex: 3;
  font-size: 9px;
}
containerCenterLink {
  cursor: pointer;
  margin-right: 5%;
}
containerCenterLink:last-child {
  margin-right: 0;
}
containerCenterLink:hover {
  text-decoration: underline;
}

containerCenterRight {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
  font-weight: bold;
}
containerCenterRightLink {
  cursor: pointer;
}
`

const TopBar = () => {
  return (
    <SiteTopBar>
      <container>
        <containerLeft>
          <containerLeftLink>TOPICS</containerLeftLink><containerLeftLink>SEARCH</containerLeftLink>
        </containerLeft>
        <containerCenter>
          <containerCenterLink>GENERAL</containerCenterLink><containerCenterLink>BROWNBAG</containerCenterLink><containerCenterLink>RANDOM</containerCenterLink><containerCenterLink>MUSIC</containerCenterLink><containerCenterLink>ANNOUNCEMENTS</containerCenterLink>
        </containerCenter>
        <containerCenterRight>
          <containerCenterRightLink>LOG IN</containerCenterRightLink>
        </containerCenterRight>
      </container>
    </SiteTopBar>
  )
}

export default TopBar;