import { useContext, useState } from 'react';

import { Title } from "../../atoms/Title/Title";
import { ExpenseField } from "../../molecules/ExpenseField/ExpenseField";
import { Button } from "../../atoms/Button/Button";
import { AppContext } from '../../../context/AppContext';
import { v4 as uuidv4 } from 'uuid';

export const AddExpenses = () => {
    const { addExpense } = useContext(AppContext);
    const [expenseName, setExpenseName] = useState("");
    const [expenseCost, setExpenseCost] = useState(0);
    
    const handleChangeExpenseName = (event) => {
        setExpenseName(event.target.value);
    }

    const handleChangeExpenseConst = (event) => {
        setExpenseCost(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        addExpense({ id: uuidv4(), name: expenseName, cost: +expenseCost });
    }

    return (
        <>
            <Title heading="h3" text="Add Expense" />

            <div className="row mt-3">
                <div className="col-sm">
                    <form onSubmit={handleSubmit}>
                        <div className="row">
                            <ExpenseField
                                inputName="expense-name"
                                inputType="text"
                                labelFor="expense-name"
                                labelText="Name"
                                onChangeInput={handleChangeExpenseName}
                            />
                            <ExpenseField
                                inputName="expense-cost"
                                inputType="number"
                                labelFor="expense-cost"
                                labelText="Cost"
                                onChangeInput={handleChangeExpenseConst}
                            />
                        </div>
                        <div className="row mt-3">
                            <div className="col-sm">
                                <Button text="Save" type="submit" />
                            </div>
                        </div>
                </form>
                </div>
            </div>
        </>
    )
}