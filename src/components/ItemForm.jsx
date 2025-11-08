import { useState } from "react";
import "./ItemForm.css";

function ItemForm({ onAddItem }) {
    const INITIAL_DATA = {
        name: "",
        quantity: "",
        purpose: "",
        agreeToTerms: false,
    };

    const [formData, setFormData] = useState(INITIAL_DATA);
    const [errors, setErrors] = useState({});

    function handleChange(event) {
        const { name, value, type, checked } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === "checkbox" ? checked : value,
        }));
    }
    
    function validate() {
        const newErrors = {};

        if (!formData.name) newErrors.name = "Name is required.";
        if (!formData.quantity || isNaN(formData.quantity) || formData.quantity <= 0) {
            newErrors.quantity = "Quantity must be a positive number.";
        }
        if (!formData.purpose) newErrors.purpose = "Purpose is required.";
        if (!formData.agreeToTerms) newErrors.agreeToTerms = "You must agree to the terms.";
        
        setErrors(newErrors);

        const errorMessageStyle = { color: "red", fontSize: "0.8rem" };

        Object.keys(newErrors).forEach((key) => {
            newErrors[key] = <span style={errorMessageStyle}>{newErrors[key]}</span>;
        });
        
        return Object.keys(newErrors).length === 0;
    }

    function handleSubmit(event) {
        event.preventDefault();

        const isValid = validate();

        if (isValid) {
            const newItem = {
                ...formData,
                id: `${Date.now()}-${Math.floor(Math.random() * 1000)}`,
            };
            onAddItem(newItem);
            setFormData(INITIAL_DATA);
            setErrors({});
        }
    }

    return (
        <form className="item-form" onSubmit={handleSubmit}>
            <div className="form-group">
                <label>Name:</label>
                <input 
                    type="text" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                />
                {errors.name && <span className="error">{errors.name}</span>}
            </div>

            <div className="form-group">
                <label>Quantity:</label>
                <input 
                    type="number" 
                    name="quantity" 
                    value={formData.quantity} 
                    onChange={handleChange} 
                />
                {errors.quantity && <span className="error">{errors.quantity}</span>}
            </div>

            <div className="form-group">
                <label>Purpose:</label>
                <input 
                    type="text" 
                    name="purpose" 
                    value={formData.purpose} 
                    onChange={handleChange} 
                />
                {errors.purpose && <span className="error">{errors.purpose}</span>}
            </div>

            <div className="form-group">
                <label>
                    <input 
                        type="checkbox" 
                        name="agreeToTerms" 
                        checked={formData.agreeToTerms} 
                        onChange={handleChange} 
                    />
                    I agree to the terms and conditions
                </label>
                {errors.agreeToTerms && <span className="error">{errors.agreeToTerms}</span>}
            </div>

            <button type="submit">Add Item</button>
        </form>
    );
}

export default ItemForm;
