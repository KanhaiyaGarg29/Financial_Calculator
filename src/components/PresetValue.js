import React, { useState } from 'react'
import BackButton from './BackButton';

function PresetValue() {
    const[formData,setFormData]=useState({
        futureValue:"",
        duration:"",
        type:"",
        discount:"",
    })
    const{futureValue,discount,duration,type}=formData
    const [presentValue, setPresentValue] = useState(null);

    const handleOnChange = (e) => {
        setFormData((prevData) => ({
          ...prevData,
          [e.target.name]: e.target.value,
        }));
      };

      const submitHandler=(e)=>{
        e.preventDefault();
        console.log(formData)
        const FV = parseFloat(futureValue); // Convert to number
        const r = parseFloat(discount) / 100; // Convert to decimal percentage

        let numPeriods = 1;
        if (type === 'Years') {
            numPeriods = duration;
        } else if (type === 'Months') {
            numPeriods = duration / 12;
        } else if (type === 'Quarters') {
            numPeriods = duration / 4;
        }

        const PV = FV / Math.pow(1 + r, numPeriods);

        setPresentValue(PV.toFixed(2));
      }
       

  return (
    <div>
        <BackButton></BackButton>
         <form onSubmit={submitHandler}>
            <label>
                Future Value
                <input type="text"
                required
                name="futureValue"
                value={futureValue}
                onChange={handleOnChange}
                placeholder="Your future value"></input>
                </label>
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
            <label>
                Discount Rate
                <input type="text"
                required
                value={discount}
                name="discount"
                onChange={handleOnChange}
                placeholder="Your projected discount rate"></input>
            </label>

            <button>Calculate</button>
        </form>

        {presentValue !== null && (
                <div>
                    <h2>Summary</h2>
                    <h2>Preset Value:</h2>
                    <p>{presentValue}</p>
                </div>
            )}
    </div>
  )
}

export default PresetValue