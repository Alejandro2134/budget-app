import { useContext } from 'react';
import { AppContext } from '../../../context/AppContext';
import { Title } from "../../atoms/Title/Title";
import { BudgetMoney } from "../../molecules/BudgetMoney/BudgetMoney";

export const Budget = () => {
    const { budget, expenses } = useContext(AppContext);

    const initialValue = 0;
    const moneySpended = expenses.reduce((sum, currentValue) => {
        return sum + currentValue.cost;
    }, initialValue);
    const remainingMoney = budget - moneySpended;

    return (
        <>
            <Title heading="h1" text="My Budget Planner" />
            <div className="row mt-3">
                <div className="col-sm">
                    <BudgetMoney hasButton={true} moneyType="Budget" moneyAmount={`£${budget}`} cssClass="alert alert-secondary p-3 d-flex align-items-center justify-content-between" />
                </div>

                <div className="col-sm">
                    <BudgetMoney
                        hasButton={false}
                        moneyType="Remaining"
                        moneyAmount={`£${remainingMoney}`}
                        cssClass={ Math.sign(remainingMoney) === -1 ? "alert p-4 alert-danger" : "alert p-4 alert-success"}
                    />
                </div>

                <div className="col-sm">
                    <BudgetMoney
                        hasButton={false}
                        moneyType="Spent so far"
                        moneyAmount={`£${moneySpended}`}
                        cssClass="alert alert-primary p-4"
                    />
                </div>
            </div>
        </>
    )
}