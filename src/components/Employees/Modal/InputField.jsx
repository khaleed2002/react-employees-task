const InputField = ({ label, defaultValue, placeholder, type, required, name }) => {
    return (

        <div className="input-field-container">
            <label htmlFor={name} className="input-label">{label}</label>
            <input type={type} id="name" required={required} name={name} placeholder={placeholder} defaultValue={defaultValue} />
        </div>
    )
}
export default InputField