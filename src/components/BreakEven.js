import React, { useState } from 'react';
import BackButton from './BackButton';
import './CICalc.css';

function BreakEven() {
  const [formData, setFormData] = useState({
    cost: '',
    price: '',
    variable: '',
  });

  const { cost, price, variable } = formData;

  const [breakEvenPoint, setBreakEvenPoint] = useState(null);
  const [breakEvenRevenue, setBreakEvenRevenue] = useState(null);
  const [contributionMargin, setContributionMargin] = useState(null);
  const [contributionMarginPercent, setContributionMarginPercent] = useState(null);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const fixedCost = parseFloat(cost);
    const unitPrice = parseFloat(price);
    const variableCost = parseFloat(variable);

    // Calculate break-even point
    const breakEvenPointValue = fixedCost / (unitPrice - variableCost);
    setBreakEvenPoint(breakEvenPointValue.toFixed(2));

    // Calculate break-even revenue
    const breakEvenRevenueValue = breakEvenPointValue * unitPrice;
    setBreakEvenRevenue(breakEvenRevenueValue.toFixed(2));

    // Calculate contribution margin
    const contributionMarginValue = unitPrice - variableCost;
    setContributionMargin(contributionMarginValue.toFixed(2));

    // Calculate contribution margin percentage
    const contributionMarginPercentValue = (contributionMarginValue / unitPrice) * 100;
    setContributionMarginPercent(contributionMarginPercentValue.toFixed(2));

  };

  const resetForm = () => {
    setFormData({
      cost: '',
      price: '',
      variable: '',
    });
    setContributionMarginPercent(null);
    setBreakEvenRevenue(null);
    setBreakEvenPoint(null);
    setContributionMargin(null);
  };


  return (
    <div className="ci-main-container">
      <BackButton />
      <div className="calc-container">

        <h2 className="calc-title">Break-Even Point Calculator</h2>

        <form onSubmit={submitHandler} className="calc-form">
          <div className="form-group">
            <label className="ci-label">
              Fixed Costs
              <input
                type="text"
                required
                name="cost"
                value={cost}
                onChange={handleOnChange}
                className="ci-input"
                placeholder="Enter fixed costs"
              />
            </label>
          </div>

          <div className="form-group">
            <label className="ci-label">
              Price Per Unit
              <input
                type="text"
                required
                name="price"
                value={price}
                onChange={handleOnChange}
                className="ci-input"
                placeholder="Enter price per unit"
              />
            </label>
          </div>

          <div className="form-group">
            <label className="ci-label">
              Variable Costs Per Unit
              <input
                type="text"
                required
                value={variable}
                name="variable"
                onChange={handleOnChange}
                className="ci-input"
                placeholder="Enter variable costs per unit"
              />
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
                  <a href="https://squareup.com/us/en/the-bottom-line/managing-your-finances/how-to-calculate-break-even-point-analysis#:~:text=Revenue%20is%20the%20price%20for,%E2%80%93%20Variable%20Cost%20per%20Unit)." target='_blank'>Learn More</a>
             </button>
          </div>
        </form>

        {breakEvenPoint && (
          <div className="calc-summary">
            <h2 className="ci-sum-heading">Break-Even Analysis Summary</h2>
            <p>Break-Even Point: {breakEvenPoint}</p>
            <p>Break-Even Revenue: {breakEvenRevenue}</p>
            <p>Contribution Margin: {contributionMargin}</p>
            <p>Contribution Margin Percentage: {contributionMarginPercent}%</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default BreakEven;
