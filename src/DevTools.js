import React,{Component} from 'react'
import {createDevTools} from 'redux-devtools'
import DockMonitor from 'redux-devtools-dock-monitor'
import LogMonitor from 'redux-devtools-log-monitor'


const DevTools = createDevTools(
  <DockMonitor toggleVisibilityKey='h' defaultIsVisible={false} changePositionKey='q' >
    <LogMonitor />
  </DockMonitor>
);
export default DevTools;