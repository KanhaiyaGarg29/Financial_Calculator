import React, { useState } from 'react';
import BackButton from './BackButton';

function CAGR() {
    const [formData, setFormData] = useState({
        startingBalance: "",
        endingBalance: "",
        duration: "",
        durationType: "years",
    });
    const { startingBalance, endingBalance, duration, durationType } = formData;

    const [annualizedReturn, setAnnualizedReturn] = useState("");
    const [percentReturn, setPercentReturn] = useState("");

    const handleOnChange = (e) => {
        setFormData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value,
        }));
    };

    const calculateReturn = () => {
        const start = parseFloat(startingBalance);
        const end = parseFloat(endingBalance);
        const dur = parseFloat(duration);

        let years = dur;
        if (durationType === "months") {
            years = dur / 12;
        } else if (durationType === "quarters") {
            years = dur / 4;
        }

        const annualizedReturn = (Math.pow(end / start, 1 / years) - 1)*100;
        const percentReturn = (end-start)/start*100

        setAnnualizedReturn(annualizedReturn.toFixed(2));
        setPercentReturn(percentReturn.toFixed(2));
    };

    return (
        <div>
            <BackButton></BackButton>
            <form onSubmit={(e) => { e.preventDefault(); calculateReturn(); }}>
                <label>
                    Starting Balance
                    <input
                        type="text"
                        required
                        name="startingBalance"
                        value={startingBalance}
                        onChange={handleOnChange}
                        placeholder="Starting balance"
                    />
                </label><br />
                <label>
                    Ending Balance
                    <input
                        type="text"
                        required
                        name="endingBalance"
                        value={endingBalance}
                        onChange={handleOnChange}
                        placeholder="Ending balance"
                    />
                </label><br />
                <label>
                    Duration
                    <input
                        type="text"
                        required
                        name="duration"
                        value={duration}
                        onChange={handleOnChange}
                        placeholder="Duration"
                    />
                </label><br />
                <label>
                    Duration Type
                    <select
                        name="durationType"
                        value={durationType}
                        onChange={handleOnChange}>
                        <option value="years">Years</option>
                        <option value="months">Months</option>
                        <option value="quarters">Quarters</option>
                    </select>
                </label><br />

                <button type="submit">Calculate</button>
            </form>

            {/* Display calculated returns */}
            {(annualizedReturn || percentReturn) && (
                <div>
                    <h2>Annualized Return</h2>
                    <p>{annualizedReturn}</p>
                    <h2>Percent Return</h2>
                    <p>{percentReturn}%</p>
                </div>
            )}
        </div>
    );
}

export default CAGR;
