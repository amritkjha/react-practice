import React, { useState, useEffect } from 'react';

function MortgageCalculator() {
  const [loanAmount, setLoanAmount] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  const [loanTerm, setLoanTerm] = useState(0);
  const [emi, setEmi] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const calculateEmi = () => {
    if(interestRate&&loanAmount&&loanTerm) {
      const r = interestRate / 12 / 100;   // monthly interest
      const n = loanTerm * 12;             // total months

      return (loanAmount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    }
  }
  useEffect(() => {
    const emii = calculateEmi();
    const totalAmountt = emii * loanTerm * 12;
    const totalInterestt = totalAmountt - loanAmount;
    setEmi(emii>0?(emii.toFixed(2)):0);
    setTotalAmount(totalAmountt>0?(totalAmountt.toFixed(2)):0);
    setTotalInterest(totalInterestt>0?(totalInterestt.toFixed(2)):0);
  }, [loanAmount, loanTerm, interestRate]);

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
  }

  return (
    <div style={containerStyle}>
      <>
        <label>Loan Amount</label>
        <input type='number' value={loanAmount} onChange={(e)=>setLoanAmount(e.target.value)} />
      </>
      <>
        <label>Annual Interest Rate (%)</label>
        <input type='number' value={interestRate} onChange={(e)=>setInterestRate(e.target.value)} />
      </>
      <>
        <label>Loan term (in years)</label>
        <input type='number' value={loanTerm} onChange={(e)=>setLoanTerm(e.target.value)} />
      </>
      <div>
        <h1>Calculations: </h1>
        <p>Monthly mortgage payment: {emi?emi:'Enter valid values'}</p>
        <p>Total payment amount: {totalAmount?totalAmount:'Enter valid values'}</p>
        <p>Total interest paid: {totalInterest?totalInterest:'Enter valid values'}</p>
      </div>
    </div>
  );
}

export default MortgageCalculator;
