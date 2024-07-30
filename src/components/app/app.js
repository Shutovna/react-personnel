import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";
import "./app.css"

function App() {
    const data = [
        {name: "Nikita S.", salary: 50000, increase: true, id: 1},
        {name: "Petya P.", salary: 500, increase: false, id: 2},
        {name: "Evgeniy S.", salary: 1000, increase: false, id: 4},
        {name: "Alexey K.", salary: 3400, increase: true, id: 10}
    ];
    return (
        <div className="app">
            <AppInfo/>

            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>

            <EmployeesList data={data}/>

            <EmployeesAddForm/>
        </div>
    );
}

export default App;