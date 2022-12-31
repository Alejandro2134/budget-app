import { ReactComponent as X } from "./xIcon.svg";

export const Icon = ({ type, onClick }) => {
    const renderIcon = () => {
        const selectIconType = {
            X: <X height="1.5em" width="1.5em" onClick={onClick} />
        }

        return selectIconType[type] || <X />
    }

    return (
        <>
            { renderIcon() }
        </>
    )
}