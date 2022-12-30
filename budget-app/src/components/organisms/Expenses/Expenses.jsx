import { Title } from "../../atoms/Title/Title";
import { Input } from "../../atoms/Input/Input";
import { OneExpense } from "../../molecules/OneExpense/OneExpense";

export const Expenses = () => {
    return  (
        <>
            <Title heading="h3" text="Expenses" />

            <div className="row">
                <div className="col-sm">
                    <Input type="text" placeholder="Type to search..." cssClass="form-control mb-2 mr-sm-2" />
                    <ul className="list-group mt-3 mb-3">
                        <OneExpense expenseType="Shopping" expenseAmount="£50" />
                        <OneExpense expenseType="Holiday" expenseAmount="£300" />
                        <OneExpense expenseType="Transportation" expenseAmount="£70" />
                        <OneExpense expenseType="Fuel" expenseAmount="£40" />
                    </ul>
                </div>
            </div>
        </>
    )
}