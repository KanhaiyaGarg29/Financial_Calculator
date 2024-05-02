import React, { useState } from 'react';
import BackButton from './BackButton';

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
        setFormData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value,
        }));
    };

    const calculateTime = () => {
        const start = parseFloat(startingValue);
        const future = parseFloat(futureValue);
        const interest = parseFloat(annualInterestRate) / 100;

        const years = (Math.log(future / start) / Math.log(1 + interest));
        const months=years*12;
        const days=years*365;
        setYears(years);
        setMonths(months);
        setDays(days);
    };

    return (
        <div>
            <BackButton></BackButton>
            <form onSubmit={(e) => { e.preventDefault(); calculateTime(); }}>
                <label>
                    Starting Value
                    <input
                        type="text"
                        required
                        name="startingValue"
                        value={startingValue}
                        onChange={handleOnChange}
                        placeholder="Starting value"
                    />
                </label><br />
                <label>
                    Future Value
                    <input
                        type="text"
                        required
                        name="futureValue"
                        value={futureValue}
                        onChange={handleOnChange}
                        placeholder="Future value"
                    />
                </label><br />
                <label>
                    Annual Interest Rate
                    <input
                        type="text"
                        required
                        name="annualInterestRate"
                        value={annualInterestRate}
                        onChange={handleOnChange}
                        placeholder="Annual interest rate"
                    />
                </label><br />

                <button type="submit">Calculate</button>
            </form>

            {(years || months || days) && (
                <div>
                    <h2>Investment Time</h2>
                    <p>Years required : {years.toFixed(2)}</p>
                    <p>Months required : {months.toFixed(2)}</p>
                    <p>Days required : {days.toFixed(2)}</p>
                </div>
            )}
        </div>
    );
}

export default InvestmentTimeCalc;
