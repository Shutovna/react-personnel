import {Component} from "react";
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";
import "./app.css"

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: "Nikita S.", salary: 50000, increase: true, rise: false, id: 1},
                {name: "Petya P.", salary: 500, increase: false, rise: true, id: 2},
                {name: "Evgeniy S.", salary: 1000, increase: false, rise: false, id: 4},
                {name: "Alexey K.", salary: 3400, increase: true, rise: true, id: 10}
            ],
        };
        this.maxId = 11
    }

    deleteItem = (id) => {
        console.log(id);
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        });
    }

    addItem = (name, salary) => {
        const newItem = {
            id: this.maxId++,
            name: name,
            salary: salary,
            increase: false,
            rise: false

        }

        this.setState(({data}) => ({
            data: [...data, newItem]
        }));
    }

    onToggleIncrease = (id) => {
        console.log("Increase this " + id);

        this.setState(({data}) => ({
            data: data.map(item => {
                    if (item.id === id) {
                        return {...item, increase: !item.increase};
                    }
                    return item;
                }
            )
        }))
    }

    onToggleRise = (id) => {
        console.log("Rise this " + id);
    }

    getNumberOfEmployees = () => {
        return this.state.data.length;
    }

    getNumberOfIncreased = () => {
        return this.state.data.filter(item => item.increase).length;
    }


    render() {
        return (
            <div className="app">
                <AppInfo
                    numberOfEmployees={this.getNumberOfEmployees()}
                    numberOfIncreased={this.getNumberOfIncreased()}
                />

                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>

                <EmployeesList
                    data={this.state.data}
                    onDelete={this.deleteItem}
                    onToggleIncrease={this.onToggleIncrease}
                    onToggleRise={this.onToggleRise}
                />

                <EmployeesAddForm
                    onAdd={this.addItem}
                />
            </div>
        );
    }
}

export default App;