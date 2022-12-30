import { Button } from "../../atoms/Button/Button"
import { Text } from "../../atoms/Text/Text"

export const BudgetMoney = ({ hasButton, moneyType, moneyAmount, cssClass }) => {
    return (
        <div className={cssClass}>
            <Text text={`${moneyType}: ${moneyAmount}`} />
            { hasButton && <Button text="Edit" /> }
        </div>   
    )
}