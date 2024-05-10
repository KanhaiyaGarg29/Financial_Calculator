import React, { useState } from 'react';
import BackButton from './BackButton';
import './CICalc.css';

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
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
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

        const calculatedAnnualizedReturn = (Math.pow(end / start, 1 / years) - 1) * 100;
        const calculatedPercentReturn = ((end - start) / start) * 100;

        setAnnualizedReturn(calculatedAnnualizedReturn.toFixed(2));
        setPercentReturn(calculatedPercentReturn.toFixed(2));
    };

    const resetForm = () => {
        setFormData({
            startingBalance: "",
            endingBalance: "",
            duration: "",
        });
        setAnnualizedReturn(null);
        setPercentReturn(null);
    };

    return (
        <div className="ci-main-container">
              <BackButton />
            <div className="calc-container">

                <h2 className="calc-title">Annualized Return Calculator</h2>

                <form onSubmit={(e) => { e.preventDefault(); calculateReturn(); }} className="calc-form">
                    <div className="form-group">
                        <label className="ci-label">
                            Starting Balance
                            <input
                                type="text"
                                required
                                name="startingBalance"
                                value={startingBalance}
                                onChange={handleOnChange}
                                className="ci-input"
                                placeholder="Enter starting balance"
                            />
                        </label>
                    </div>

                    <div className="form-group">
                        <label className="ci-label">
                            Ending Balance
                            <input
                                type="text"
                                required
                                name="endingBalance"
                                value={endingBalance}
                                onChange={handleOnChange}
                                className="ci-input"
                                placeholder="Enter ending balance"
                            />
                        </label>
                    </div>

                    <div className="form-group">
                        <label className="ci-label">
                            Duration
                            <input
                                type="text"
                                required
                                name="duration"
                                value={duration}
                                onChange={handleOnChange}
                                className="ci-input"
                                placeholder="Enter duration"
                            />
                        </label>
                    </div>

                    <div className="form-group">
                        <label className="ci-label">
                            Duration Type
                            <select
                                name="durationType"
                                value={durationType}
                                onChange={handleOnChange}
                                className="ci-input"
                            >
                                <option value="years">Years</option>
                                <option value="months">Months</option>
                                <option value="quarters">Quarters</option>
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
                         <a href="https://corporatefinanceinstitute.com/resources/wealth-management/annualized-total-return/" target='_blank'>Learn More</a>
                        </button>

                    </div>
                </form>

                {(annualizedReturn || percentReturn) && (
                    <div className="calc-summary">
                        <h2 className="ci-sum-heading">Calculated Returns</h2>
                        <p>Annualized Return: {annualizedReturn}%</p>
                        <p>Percent Return: {percentReturn}%</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default CAGR;
