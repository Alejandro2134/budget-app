export const Input = ({ type, placeholder = "", name, cssClass, onChange }) => {
    return (
        <input type={type} placeholder={placeholder} name={name} className={cssClass} onChange={onChange} />
    )
}