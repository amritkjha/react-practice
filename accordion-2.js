import React from 'react';

export default function Accordion() {
  const data = [
    {
      id: 1,
      title: 'title 1',
      content: 'content 1'
    },
    {
      id: 2,
      title: 'title 2',
      content: 'content 2'
    },
    {
      id: 3,
      title: 'title 3',
      content: 'content 3'
    },
  ]
  const [activeHeaders, setActiveHeaders] = React.useState([]);
  const headerRefs = React.useRef([]);
  const handleHeaderToggle = (id) => {
    activeHeaders.includes(id)?
    setActiveHeaders(prev=>prev.filter(item=>item!==id))
    :setActiveHeaders(prev=>[...prev, id]);
  }
  const handleKeyDown = (e, idx) => {
    if(e.key == 'ArrowDown') {
      let newIdx = idx==data.length-1?0:idx+1;
      headerRefs.current[newIdx].focus();
    }
    if(e.key == 'ArrowUp') {
      let newIdx = idx==0?data.length-1:idx-1;
      headerRefs.current[newIdx].focus();
    }
  }
  const headerStyles = {
    paddingRight: '227px',
  }
  return (
    <div>
      {data.map((item, idx) => {
        return (
          <div>
            <button
            ref={el=>headerRefs.current[idx]=el}
            onKeyDown={e=>handleKeyDown(e, idx)}
            id={`accordion-header-${item.id}`}
            aria-expanded={activeHeaders?.includes(idx+1)}
            aria-controls={`accordion-content-${item.id}`}
            style={headerStyles}
            onClick={()=>handleHeaderToggle(item.id)}>
              {item.title}
            </button>
            {activeHeaders?.includes(idx+1) && <p id={`accordion-content-${item.id}`} role='region' aria-labelled-by={`accordion-header-${item.id}`} hidden={!activeHeaders?.includes(idx+1)}>
              {item.content}
            </p>}
          </div>
        );
      })}
    </div>
  );
}
