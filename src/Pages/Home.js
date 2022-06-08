import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Transfers from '../Modules/Transfers';
import ManageTransfers from '../Modules/ManageTransfers';
import Savings from '../Modules/Savings';

export default function Home() {
  return (
    <Tabs>
      <TabList>
        <Tab>Transfers</Tab>
        <Tab>Savings</Tab>
        <Tab>Manage Transfers</Tab>
      </TabList>

      <TabPanel>
        <h2>Internal Transfers</h2>
        <Transfers />
      </TabPanel>
      <TabPanel>
        <Savings />
      </TabPanel>
      <TabPanel>
        <ManageTransfers />
      </TabPanel>
    </Tabs>
  )
}
