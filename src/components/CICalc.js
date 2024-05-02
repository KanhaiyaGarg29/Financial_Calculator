import React, { useState } from 'react'
import BackButton from './BackButton';

function CICalc() {
    const[formData,setFormData]=useState({
        balance:"",
        rate:"",
        interval:"",
        duration:"",
        type:""
    })
    const{balance,rate,interval,duration,type}=formData
    const [futureValue, setFutureValue] = useState(null);
    const [interestEarned, setInterestEarned] = useState(null);

    const handleOnChange = (e) => {
        setFormData((prevData) => ({
          ...prevData,
          [e.target.name]: e.target.value,
        }));
      };

      const submitHandler=(e)=>{
        e.preventDefault();
        console.log(formData)
        const Principal = parseFloat(balance); // Convert to number
        const InterestRate = parseFloat(rate) / 100; // Convert to decimal percentage
    
        let numCompoundsPerYear = 1;
        if (interval === 'monthly') {
          numCompoundsPerYear = 12;
        } else if (interval === 'quarterly') {
          numCompoundsPerYear = 4;
        }
    
        const numDurationInYears = type === 'years' ? duration :
                                   type === 'months' ? duration / 12 : duration / 4;
    
        const futureValue = Principal * (1 + InterestRate / numCompoundsPerYear) ** (numCompoundsPerYear * numDurationInYears);
    
        const interestEarned = futureValue - Principal;
    
        setFutureValue(futureValue.toFixed(2));
        setInterestEarned(interestEarned.toFixed(2));
      };
    
      

  return (
    <div>
      <BackButton></BackButton>
        <form onSubmit={submitHandler}>
            <label>
                Starting Balance
                <input type="text"
                required
                name="balance"
                value={balance}
                onChange={handleOnChange}
                placeholder="Your starting balance"></input>
            </label><br></br>
            <label>
                Annual Interest rate
                <input type="text"
                required
                name="rate"
                value={rate}
                onChange={handleOnChange}
                placeholder="Annual Interest rate"></input>
            </label><br></br>
            <label>
                Compound Interval
                <select name="interval" value={interval} onChange={handleOnChange}>
                    <option>Select the interval</option>
                    <option>Annualy</option>
                    <option>Monthly</option>
                </select>
            </label><br></br>
            <label>
                Duration
                <input type="text"
                required
                value={duration}
                name="duration"
                onChange={handleOnChange}
                placeholder="Duration of your Investement"></input>
            </label><br></br>
            <label>
               Duration Type  
               <select name="type" value={type} onChange={handleOnChange}>
                <option>Select Duration Type</option>
                <option>Years</option>
                <option>Quarters</option>
                <option>Months</option>
               </select>
            </label><br></br>

            <button>Calculate</button>
        </form>

        {futureValue !== null && interestEarned !== null && (
                <div>
                    <h2>Summary</h2>
                   
                    <p>Future Value: {futureValue}</p>
                    <p>Interest Earned: {interestEarned}</p>
                    <p>Initial Amount: {balance}</p>
                    <p>Annual Rate: {rate}%</p>
                </div>
            )}
    </div>
  )
}

export default CICalc