import React from 'react';

export default function FlightBooker() {
  const [departureDate, setDepartureDate] = React.useState('');
  const [returnDate, setReturnDate] = React.useState('');
  const [error, setError] = React.useState('');
  const getTodayDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = ('0'+(today.getMonth()+1)).split(-2);
    const day = today.getDate();
    return `${year}-${month}-${day}`;
  }
  const mainContainer = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
  }
  const datesContainerStyles = {
    display: 'flex'
  }
  const errorStyles = {
    color: departureDate>returnDate?'red':'green',
    fontSize: '15px',
  }
  const buttonStyles = {
    marginTop: '18px',
    padding: '6px 27px',
    color: 'white',
    backgroundColor: '#24a0ed',
    border: 0,
    borderRadius: '6px',
    fontWeight: 'bold',
    cursor: 'pointer'
  }
  React.useEffect(() => {
    if(departureDate>returnDate)setError('Departure date cannot be after Return date');
    else setError('Booking valid');
  }, [departureDate, returnDate])
  return (
    <div style={mainContainer}>
      <div style={datesContainerStyles}>
        <div>
          <label>Date of departure</label>
          <input type='date' value={departureDate} min={getTodayDate()} onChange={(e)=>setDepartureDate(e.target.value)} />
        </div>
        <div>
          <label>Date of return</label>
          <input type='date' value={returnDate} min={departureDate || getTodayDate()} onChange={(e)=>setReturnDate(e.target.value)} />
        </div>
      </div>
      {error && <span style={errorStyles}>{error}</span>}
      <button style={buttonStyles}>Book Flight</button>
    </div>
  );
}
