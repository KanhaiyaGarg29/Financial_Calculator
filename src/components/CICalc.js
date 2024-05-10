import React, { useState } from 'react';
import './CICalc.css';
import BackButton from './BackButton';

function CICalc() {
  const [formData, setFormData] = useState({
    balance: '',
    rate: '',
    interval: '',
    duration: '',
    type: '',
  });

  const { balance, rate, interval, duration, type } = formData;
  const [futureValue, setFutureValue] = useState(null);
  const [interestEarned, setInterestEarned] = useState(null);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const principal = parseFloat(balance);
    const interestRate = parseFloat(rate) / 100;
    const numCompoundsPerYear = interval.toLowerCase() === 'monthly' ? 12 : 1;

    let numDurationInYears;
    if (type.toLowerCase() === 'years') {
      numDurationInYears = parseFloat(duration);
    } else if (type.toLowerCase() === 'months') {
      numDurationInYears = parseFloat(duration) / 12;
    } else {
      numDurationInYears = parseFloat(duration) / 4;
    }

    if (isNaN(principal) || isNaN(interestRate) || isNaN(numDurationInYears)) {
      // Error handling for invalid inputs
      setFutureValue(null);
      setInterestEarned(null);
      return;
    }

    const calculatedFutureValue = principal * (1 + interestRate / numCompoundsPerYear) ** (numCompoundsPerYear * numDurationInYears);

    const calculatedInterestEarned = calculatedFutureValue - principal;

    setFutureValue(calculatedFutureValue.toFixed(2));
    setInterestEarned(calculatedInterestEarned.toFixed(2));
  };

  const resetForm = () => {
    setFormData({
      balance: '',
      rate: '',
      interval: '',
      duration: '',
      type: '',
    });
    setFutureValue(null);
    setInterestEarned(null);
  };

  return (
    <div className='ci-main-container'>
       <BackButton></BackButton>
      <div className="calc-container">
        <h2 className="calc-title">Compound Interest Calculator</h2>
        <form onSubmit={submitHandler} className="calc-form">
          <div className="form-group">
            <label className='ci-label'>
              Starting Balance
              <input
                className='ci-input'
                type="number"
                step="0.01"
                required
                name="balance"
                value={balance}
                onChange={handleOnChange}
                placeholder="Enter your starting balance"
              />
            </label>
          </div>
          <div className="form-group">
            <label className='ci-label'>
              Annual Interest Rate
              <input
                className='ci-input'
                type="number"
                step="0.01"
                required
                name="rate"
                value={rate}
                onChange={handleOnChange}
                placeholder="Enter the annual interest rate"
              />
            </label>
          </div>
          <div className="form-group">
            <label className='ci-label'>
              Compound Interval
              <select
                className='ci-input'
                name="interval"
                value={interval}
                onChange={handleOnChange}
                required
              >
                <option value="">Select an interval</option>
                <option value="monthly">Monthly</option>
                <option value="annually">Annually</option>
              </select>
            </label>
          </div>
          <div className="form-group">
            <label className='ci-label'>
              Duration
              <input
                className='ci-input'
                type="number"
                step="0.1"
                required
                value={duration}
                name="duration"
                onChange={handleOnChange}
                placeholder="Enter the duration"
              />
            </label>
          </div>
          <div className="form-group">
            <label className='ci-label'>
              Duration Type
              <select
                className='ci-input'
                name="type"
                value={type}
                onChange={handleOnChange}
                required
              >
                <option value="">Select the duration type</option>
                <option value="years">Years</option>
                <option value="quarters">Quarters</option>
                <option value="months">Months</option>
              </select>
            </label>
          </div>
          <div className="button-group">
            <button type="submit" className="calc-button">
              Calculate
            </button>

            <button type="button" className="reset-button" onClick={resetForm}>
              Reset
            </button>
            <button type="button" className="learnmore-button">
                  <a href="https://www.ent.com/education-center/smart-money-management/what-is-compound-interest/#:~:text=Compound%20interest%20is%20calculated%20by,the%20loan%2C%20including%20compound%20interest." target='_blank'>Learn More</a>
            </button>
          </div>
        </form>

        {futureValue !== null && interestEarned !== null && (
          <div className="calc-summary">
            <h2 className='ci-sum-heading'>Calculation Result:</h2>
            <p>Future Value: {futureValue}</p>
            <p>Interest Earned: {interestEarned}</p>
            <p>Initial Amount: {balance}</p>
            <p>Annual Rate: {rate}%</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default CICalc;
