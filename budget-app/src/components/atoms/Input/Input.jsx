export const Input = ({ type, placeholder = "", name, cssClass }) => {
    return (
        <input type={type} placeholder={placeholder} name={name} className={cssClass} />
    )
}