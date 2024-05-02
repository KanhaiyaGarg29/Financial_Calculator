import React, { useState } from 'react'
import BackButton from './BackButton';

function BreakEven() {
    const[formData,setFormData]=useState({
        cost:"",
        price:"",
        variable:"",
    })
    const{cost,price,variable}=formData
    const handleOnChange = (e) => {
        setFormData((prevData) => ({
          ...prevData,
          [e.target.name]: e.target.value,
        }));
      };

      const [breakEvenPoint, setBreakEvenPoint] = useState("");
      const [breakEvenRevenue, setBreakEvenRevenue] = useState("");
      const [contributionMargin, setContributionMargin] = useState("");
      const [contributionMarginPercent, setContributionMarginPercent] = useState("");

      const submitHandler=(e)=>{
        e.preventDefault();

        const fixedCost = parseFloat(cost);
        const unitPrice = parseFloat(price);
        const variableCost = parseFloat(variable);

        // Calculate break-even point
        const breakEvenPointValue = fixedCost / (unitPrice - variableCost);
        setBreakEvenPoint(breakEvenPointValue);

        // Calculate break-even revenue
        const breakEvenRevenueValue = breakEvenPointValue * unitPrice;
        setBreakEvenRevenue(breakEvenRevenueValue);

        // Calculate contribution margin
        const contributionMarginValue = unitPrice - variableCost;
        setContributionMargin(contributionMarginValue);

        // Calculate contribution margin percentage
        const contributionMarginPercentValue = (contributionMarginValue / unitPrice) * 100;
        setContributionMarginPercent(contributionMarginPercentValue);

      }

  return (
    <div>
        <BackButton></BackButton>
          <form onSubmit={submitHandler}>
            <label>
                Fixed Costs
                <input type="text"
                required
                name="cost"
                value={cost}
                onChange={handleOnChange}
                placeholder="Your fixed cost"></input>
            </label><br></br>
            <label>
                Price Per Unit
                <input type="text"
                required
                name="price"
                value={price}
                onChange={handleOnChange}
                placeholder="Your sales price per unit sold"></input>
            </label><br></br>
            <label>
                Variable Costs Per Unit
                <input type="text"
                required
                value={variable}
                name="variable"
                onChange={handleOnChange}
                placeholder="Your variable costs per unit"></input>
            </label><br></br>

            <button>Calculate</button>
        </form>

        {breakEvenPoint && (
                <div>
                    Break-even Point: {breakEvenPoint.toFixed(2)}<br></br>
                    Break-even Revenue: {breakEvenRevenue.toFixed(2)}<br></br>
                    Contribution Margin: {contributionMargin.toFixed(2)}<br></br>
                    Contribution Margin Percentage: {contributionMarginPercent.toFixed(2)}%
                </div>
            )}

    </div>
  )
}

export default BreakEven