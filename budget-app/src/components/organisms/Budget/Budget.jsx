import { Title } from "../../atoms/Title/Title";
import { BudgetMoney } from "../../molecules/BudgetMoney/BudgetMoney";

export const Budget = () => {
    return (
        <>
            <Title heading="h1" text="My Budget Planner" />
            <div className="row mt-3">
                <div className="col-sm">
                    <BudgetMoney hasButton={true} moneyType="Budget" moneyAmount="£2000" cssClass="alert alert-secondary p-3 d-flex align-items-center justify-content-between" />
                </div>

                <div className="col-sm">
                    <BudgetMoney
                        hasButton={false}
                        moneyType="Remaining"
                        moneyAmount="£1040"
                        cssClass="alert p-4 alert-success"
                    />
                </div>

                <div className="col-sm">
                    <BudgetMoney
                        hasButton={false}
                        moneyType="Spent so far"
                        moneyAmount="£960"
                        cssClass="alert alert-primary p-4"
                    />
                </div>
            </div>
        </>
    )
}