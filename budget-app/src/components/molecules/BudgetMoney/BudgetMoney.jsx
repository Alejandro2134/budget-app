import { useContext, useState } from 'react';
import { AppContext } from '../../../context/AppContext';

import { Button } from "../../atoms/Button/Button"
import { Input } from '../../atoms/Input/Input';
import { Text } from "../../atoms/Text/Text"

export const BudgetMoney = ({ hasButton, moneyType, moneyAmount, cssClass }) => {
    const { budget, updateBudget } = useContext(AppContext);
    const [expenseCost, setExpenseCost] = useState(0);
    const [isEdit, setIsEdit] = useState(false); 

    const handleOnChange = (event) => {
        setExpenseCost(event.target.value);
    }

    const handleOnClickEdit = () => {
        setIsEdit(!isEdit);
    }

    const handleOnClickSave = () => {
        setIsEdit(!isEdit);
        expenseCost === 0
            ? updateBudget(budget)
            : updateBudget(expenseCost)
    }

    return (
        <div className={cssClass}>
            {
                isEdit 
                    ? (
                        <>
                            <Input type="number" placeholder={budget} name="edit-expense-cost" cssClass="form-control" onChange={handleOnChange} />
                            { hasButton && <Button text="Save" type="button" onClick={handleOnClickSave} /> }
                        </>
                    )
                    : (
                        <>
                            <Text text={`${moneyType}: ${moneyAmount}`} />
                            { hasButton && <Button text="Edit" type="button" onClick={handleOnClickEdit} /> }
                        </>
                    )
            }
        </div>   
    )
}