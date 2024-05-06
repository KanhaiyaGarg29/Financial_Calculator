import React, { useState } from 'react';
import BackButton from './BackButton';
import './CICalc.css';

function PresetValue() {
    const [formData, setFormData] = useState({
        futureValue: '',
        duration: '',
        type: '',
        discount: '',
    });

    const { futureValue, discount, duration, type } = formData;
    const [presentValue, setPresentValue] = useState(null);

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const submitHandler = (e) => {
        e.preventDefault();

        const FV = parseFloat(futureValue);
        const r = parseFloat(discount) / 100;

        let numPeriods;
        if (type === 'Years') {
            numPeriods = duration;
        } else if (type === 'Months') {
            numPeriods = duration / 12;
        } else if (type === 'Quarters') {
            numPeriods = duration / 4;
        }

        const PV = FV / Math.pow(1 + r, numPeriods);

        setPresentValue(PV.toFixed(2));
    };

    const resetForm = () => {
        setFormData({
            futureValue: '',
            duration: '',
            type: '',
            discount: '',
        });
        setPresentValue(null);
    };

    return (
        <div className="ci-main-container">
            <div className="calc-container">


                <h2 className="calc-title">Present Value Calculator</h2>

                <form onSubmit={submitHandler} className="calc-form">
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
                                placeholder="Your future value"
                            />
                        </label>
                    </div>
                    <div className="form-group">
                        <label className="ci-label">
                            Duration
                            <input
                                type="text"
                                required
                                value={duration}
                                name="duration"
                                onChange={handleOnChange}
                                className="ci-input"
                                placeholder="Duration of your investment"
                            />
                        </label>
                    </div>
                    <div className="form-group">
                        <label className="ci-label">
                            Duration Type
                            <select
                                name="type"
                                value={type}
                                onChange={handleOnChange}
                                className="ci-input"
                            >
                                <option>Select Duration Type</option>
                                <option>Years</option>
                                <option>Quarters</option>
                                <option>Months</option>
                            </select>
                        </label>
                    </div>
                    <div className="form-group">
                        <label className="ci-label">
                            Discount Rate
                            <input
                                type="text"
                                required
                                value={discount}
                                name="discount"
                                onChange={handleOnChange}
                                className="ci-input"
                                placeholder="Your projected discount rate"
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
                        <BackButton />
                    </div>
                </form>

                {presentValue !== null && (
                    <div className="calc-summary">
                        <h2 className="ci-sum-heading">Summary</h2>
                        <p>Present Value: {presentValue}</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default PresetValue;
