import React, { useState } from 'react';
import BackButton from './BackButton';
import './CICalc.css';

function InvestmentTimeCalc() {
    const [formData, setFormData] = useState({
        startingValue: "",
        futureValue: "",
        annualInterestRate: "",
    });

    const { startingValue, futureValue, annualInterestRate } = formData;

    const [years, setYears] = useState("");
    const [months, setMonths] = useState("");
    const [days, setDays] = useState("");

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const calculateTime = () => {
        const start = parseFloat(startingValue);
        const future = parseFloat(futureValue);
        const interest = parseFloat(annualInterestRate) / 100;

        const calculatedYears = Math.log(future / start) / Math.log(1 + interest);
        const calculatedMonths = calculatedYears * 12;
        const calculatedDays = calculatedYears * 365;

        setYears(calculatedYears.toFixed(2));
        setMonths(calculatedMonths.toFixed(2));
        setDays(calculatedDays.toFixed(2));
    };

    const resetForm = () => {
        setFormData({
            startingValue: "",
            futureValue: "",
            annualInterestRate: "",
        });
        setYears(null);
        setMonths(null);
        setDays(null);
    };


    return (
        <div className="ci-main-container">
             <BackButton />
            <div className="calc-container">

                <h2 className="calc-title">Investment Time Calculator</h2>

                <form onSubmit={(e) => { e.preventDefault(); calculateTime(); }} className="calc-form">
                    <div className="form-group">
                        <label className="ci-label">
                            Starting Value
                            <input
                                type="text"
                                required
                                name="startingValue"
                                value={startingValue}
                                onChange={handleOnChange}
                                className="ci-input"
                                placeholder="Enter starting value"
                            />
                        </label>
                    </div>

                    <div className="form-group">
                        <label className="ci-label">
                            Future Value
                            <input
                                type="text"
                                required
                                name="futureValue"
                                value={futureValue}
                                onChange={handleOnChange}
                                className="ci-input"
                                placeholder="Enter future value"
                            />
                        </label>
                    </div>

                    <div className="form-group">
                        <label className="ci-label">
                            Annual Interest Rate
                            <input
                                type="text"
                                required
                                name="annualInterestRate"
                                value={annualInterestRate}
                                onChange={handleOnChange}
                                className="ci-input"
                                placeholder="Enter annual interest rate"
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
                            <a href="https://www.wallstreetmojo.com/present-value-formula/" target='_blank'>Learn More</a>
                        </button>
                    </div>
                </form>

                {(years || months || days) && (
                    <div className="calc-summary">
                        <h2 className="ci-sum-heading">Investment Time Summary</h2>
                        <p>Years Required: {years}</p>
                        <p>Months Required: {months}</p>
                        <p>Days Required: {days}</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default InvestmentTimeCalc;
