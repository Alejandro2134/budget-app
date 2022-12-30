import { Input } from "../../atoms/Input/Input"
import { Label } from "../../atoms/Label/Label"

export const ExpenseField = ({ inputType, inputName, labelFor, labelText }) => {
    return (
        <div className="col-sm col-lg-4">
            <Label htmlFor={labelFor} text={labelText} />
            <Input type={inputType} name={inputName} cssClass="form-control" />
        </div>
    )
}