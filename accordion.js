import React, { useState } from 'react';

function Accordion() {
  const [activeSection, setActiveSection] = React.useState([]);
  const sections = [
    { title: "Section 1", content: "Content for section 1" },
    { title: "Section 2", content: "Content for section 2" },
    { title: "Section 3", content: "Content for section 3" }
  ];
  const handleClick = (idx) => {
    if(activeSection.includes(idx+1)) {
      setActiveSection(prev=>prev.filter(item=>item!==idx+1));
    } else {
      setActiveSection(prev=>[...prev, idx+1]);
    }
  }
  const containerStyles = {
    border: '1px solid #a9a9a9',
    borderRadius: '6px',
    padding: '0 6px',
    margin: '9px'
  }
  const titleStyles = {
    margin: '3px',
    cursor: 'pointer',
    fontWeight: 'bold'
  }

  return (
    <div>
      {sections.map((item, idx) => {
        return (
          <div style={containerStyles}>
            <p style={titleStyles} onClick={()=>handleClick(idx)}>{item.title}</p>
            {activeSection.includes(idx+1) && 
              <>
                <hr />
                <p>{item.content}</p>
              </>
            }
          </div>
        );
      })}
    </div>
  );
}

export default Accordion;
