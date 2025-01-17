import "./app-info.css"

const AppInfo = (props) => {
    return (
        <div className={"app-info"}>
            <h1>Учет сотрудников в компании</h1>
            <h2>Общее число сотрудников: {props.numberOfEmployees}</h2>
            <h2>Премию получат: {props.numberOfIncreased}</h2>
        </div>
    )
}

export default AppInfo;