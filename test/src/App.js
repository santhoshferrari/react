import React, { Component } from "react";
import DynamicForm from "./components/DynamicForm";
import "./App.css";

class App extends Component {
  state = {
    data: [
      {
        id: 1,
        name: "bose",
        age: 23,
      },
      {
        id: 2,
        name: "sakthivel",
        age: 24,
      },
      {
        id: 3,
        name: "subash",
        age: 25,
      }
    ],
    current: {}
  };

  onSubmit = model => {
    let data = [];
    if (model.id) {
      data = this.state.data.filter(d => {
        return d.id != model.id;
      });
    } else {
      model.id = +new Date();
      data = this.state.data.slice();
    }

    this.setState({
      data: [model, ...data],
      current: {}
    });
  };

  onEdit = id => {
    let record = this.state.data.find(d => {
      return d.id == id;
    });
    alert(JSON.stringify(record));
    this.setState({
      current: record
    });
  };

  onNewClick = e => {
    this.setState({
      current: {}
    });
  };

  render() {
    let data = this.state.data.map(d => {
      return (
        <tr key={d.id}>
          <td>{d.name}</td>
          <td>{d.age}</td>
          <td>
            <button class='btn btn-success' onClick={() => {this.onEdit(d.id);}}>edit</button>
          </td>
        </tr>
      );
    });

    return (
      <div className="App">
        <div className="form-actions">
        </div>
        <DynamicForm
          key={this.state.current.id}
          className="form"
          title="Registration"
          defaultValues={this.state.current}
          model={[
            { key: "name", label: "Name", props: { required: true } },
            { key: "age", label: "Age", type: "number" },
          ]}
          onSubmit={model => {
            this.onSubmit(model);
          }}
          /><br></br>
        
        <table border="1">
          <tbody>{data}</tbody>
        </table>
      </div>
    );
  }
}

export default App;