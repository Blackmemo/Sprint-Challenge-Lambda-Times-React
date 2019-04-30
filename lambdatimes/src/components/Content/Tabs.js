import React from 'react';
import Tab from './Tab';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TabsMain = styled.div`
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
}`;

const TabsTopics = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
`;

const TopicsTitle = styled.span`
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
`;

const Tabs = props => {
  return (
    <TabsMain>
      <TabsTopics>
        <TopicsTitle>TRENDING TOPICS:</TopicsTitle>
        { props.tabs.map(tab => {
          return (
            <div>
            <Tab
            selectTabHandler={props.selectTabHandler} 
            selectedTab={props.selectedTab}
            tab={tab}
            />

            </div>
          )
        })
          /* map over the tabs provided on your props, create a new Tab component for each one.
            give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props*/}
      </TabsTopics>
    </TabsMain>
  );
};

// Make sure to use PropTypes to validate your types!
Tabs.propTypes = {
  tabs: PropTypes.array.isRequired
}
export default Tabs;
