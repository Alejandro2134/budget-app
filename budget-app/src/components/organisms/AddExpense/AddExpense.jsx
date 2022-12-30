import { Title } from "../../atoms/Title/Title";
import { ExpenseField } from "../../molecules/ExpenseField/ExpenseField";
import { Button } from "../../atoms/Button/Button";

export const AddExpenses = () => {
    return (
        <>
            <Title heading="h3" text="Add Expense" />

            <div className="row mt-3">
                <div className="col-sm">
                    <form>
                        <div className="row">
                            <ExpenseField
                                inputName="expense-name"
                                inputType="text"
                                labelFor="expense-name"
                                labelText="Name"
                            />
                            <ExpenseField
                                inputName="expense-cost"
                                inputType="number"
                                labelFor="expense-cost"
                                labelText="Cost"
                            />
                        </div>
                        <div className="row mt-3">
                            <div className="col-sm">
                                <Button text="Save" />
                            </div>
                        </div>
                </form>
                </div>
            </div>
        </>
    )
}