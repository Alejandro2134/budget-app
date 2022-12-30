import { Text } from "../../atoms/Text/Text"
import { Icon } from "../../atoms/Icon/Icon"

export const OneExpense = ({ expenseType, expenseAmount }) => {
    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            <Text text={expenseType} />

            <div>
                <Text text={expenseAmount} cssClass="badge bg-primary rounded-pill me-3" />
                <Icon type="X" />
            </div>
        </li>
    )
}