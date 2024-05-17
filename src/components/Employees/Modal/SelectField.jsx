const SelectField = ({ label, required, options, name }) => {
    return (

        <div className="input-field-container">
            <label htmlFor={name} className="input-label">{label}</label>
            <select name={name} id={name} required={required}>
                {options.map((option, index) => {
                    return <option key={index}>{option}</option>
                })}
            </select>
        </div>
    )
}
export default SelectField