import React, { useState } from 'react';

function Tabs() {
  const [activeTab, setActiveTab] = useState(1);
  const tabsData = [
    {
      'id': 1,
      'name': 'tab 1',
      'content': 'Content 1: \nLorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus ex sapien vitae. Ex sapien vitae pellentesque sem placerat in id. Placerat in id cursus mi pretium tellus duis. Pretium tellus duis convallis tempus leo eu aenean.',
    },
    {
      'id': 2,
      'name': 'tab 2',
      'content': 'Content 2: \nLorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus ex sapien vitae. Ex sapien vitae pellentesque sem placerat in id. Placerat in id cursus mi pretium tellus duis. Pretium tellus duis convallis tempus leo eu aenean.',
    },
    {
      'id': 3,
      'name': 'tab 3',
      'content': 'Content 3: \nLorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus ex sapien vitae. Ex sapien vitae pellentesque sem placerat in id. Placerat in id cursus mi pretium tellus duis. Pretium tellus duis convallis tempus leo eu aenean.',
    },
  ]
  const tabRowStyles = {
    display: 'flex',
  }
  const tabStyles = {
    border: '1px solid #D3D3D3',
    borderRadius: '3px',
    backgroundColor: '#D3D3D3',
    padding: '3px 6px',
  }
  const activeTabStyles = {
    backgroundColor: 'gray',
  }
  return (
    <div>
      <div style={tabRowStyles}>
        {tabsData?.map((tab) => {
          return (
            <div style={activeTab==tab.id?{...tabStyles, ...activeTabStyles}:tabStyles} onClick={()=>setActiveTab(tab.id)}>
              {tab.name}
            </div>
          );
        })}
      </div>
      <div style={{'whiteSpace': 'pre-line'}}>
        {tabsData?.filter((tab) => tab.id == activeTab)[0]?.content}
      </div>
    </div>
  );
}

export default Tabs;
