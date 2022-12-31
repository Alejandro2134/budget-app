import { useContext } from 'react';

import { Text } from "../../atoms/Text/Text"
import { Icon } from "../../atoms/Icon/Icon"
import { AppContext } from '../../../context/AppContext';

export const OneExpense = ({ expenseType, expenseAmount, expenseId }) => {
    const { removeExpense } = useContext(AppContext);

    const handleOnClick = () => {
        removeExpense(expenseId);
    }

    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            <Text text={expenseType} />

            <div>
                <Text text={`£${expenseAmount}`} cssClass="badge bg-primary rounded-pill me-3" />
                <Icon type="X" onClick={handleOnClick} />
            </div>
        </li>
    )
}