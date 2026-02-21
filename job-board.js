import React from 'react';

export default function JobBoard() {
  const [jobList, setJobList] = React.useState([]);
  React.useEffect(() => {
    const fetchJobs = async() => {
      const data = await fetch('https://jsonfakery.com/jobs');
      const list = await data.json();
      setJobList(list);
    }
    fetchJobs();
  }, [])
  const jobCardStyles = {
    border: '1px solid #D3D3D3',
    padding: '9px 12px',
    margin: '6px',
    borderRadius: '6px'
  }
  const locationStyles = {
    width: '100%',
    display: 'flex'
  }
  const remoteTagStyles = {
    marginLeft: 'auto',
    color: 'white',
    borderRadius: '44%',
    backgroundColor: 'blue',
    fontSize: '12px',
    padding: '6px'
  }
  const titleStyles = {
    display: 'flex',
    margin: '0px'
  }
  const applyStyles = {
    marginLeft: 'auto',
    fontSize: '12px'
  }
  return (
    <div>
      {jobList?.map(job => {
        return (
          <div style={jobCardStyles}>
            <h3 style={titleStyles}>{job.title}<a style={applyStyles} href={`tel:${job.contact}`}>Apply</a></h3>
            <span>{job.company}</span>
            <p>{job.description}</p>
            <p style={locationStyles}>{job.location}{job.is_remote_work?<span style={remoteTagStyles}>Remote</span>:null}</p>
          </div>
        );
      })}
    </div>
  );
}
