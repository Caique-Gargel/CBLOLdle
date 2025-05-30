import styles from './Select.module.css' 
function Select({text,name, options,handleOnChange,value,customClass}){
    return(
        <div  className={`${styles.form_control} ${styles[customClass]}`}>
            <label hmtlfor={name}>{text}:</label>
            <select name={name} id={name} onChange={handleOnChange} value={value || ''}>
                
                {options.map((option)=>(
                    <option value={option.id} key={option.id}>
                        {option.name}
                    </option>
                ))}
            </select>
            
        </div>
    )

}
export default Select