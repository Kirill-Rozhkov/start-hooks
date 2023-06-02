import React from "react"
import PropTypes from "prop-types"
import CollapseWrapper from "../common/collapse"

const ListForm = ({ children }) => {
    return React.Children.map(children, (child) => {
        const config = { number: child.props.number }
        console.log(config)
        return React.cloneElement(child, config)
    })
}
ListForm.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
}

const ChildrenExercise = () => {
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть компоненты Списка. Вам необходимо к каждому из них
                добавить порядковый номер, относительно того, как они
                располагаются на странице. Вы можете использовать как{" "}
                <code>React.Children.map</code> так и{" "}
                <code>React.Children.toArray</code>
            </p>
            <ListForm>
                <Component number={1} />
                <Component number={2} />
                <Component number={3} />
            </ListForm>
        </CollapseWrapper>
    )
}

const Component = ({ number }) => {
    return <div>{number} Компонент списка</div>
}
Component.propTypes = {
    number: PropTypes.number
}

export default ChildrenExercise
