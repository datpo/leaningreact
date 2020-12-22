import './App.css';
import TaskForm from './components/TaskForm';
import { Component } from 'react'
import TaskControl from './components/TaskControl'
import TaskList from './components/TaskList'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      elementList: [
        { id: '1', name: 'hoc java', status: true },
        { id: '2', name: 'hoc react', status: false }

      ],
      isDisplayForm: false
    };

  }

  componentWillMount(){
    console.log("componentwillmount: ", localStorage.getItem('tasks'));
    var list = JSON.parse(localStorage.getItem('tasks'));
    this.setState({
      elementList:list
    })
  }

  onClick = (name, status) => {
    // console.log("abc: ", name, status);
    const temList = this.state.elementList.slice();
    
    temList.push({
      id: this.generateId(), name: name, status: status
    })
    this.setState({
      elementList: temList
    });
    localStorage.setItem('tasks', JSON.stringify(temList));
  }

  onToggleForm = () => {
    this.setState({ isDisplayForm: !this.state.isDisplayForm })
  }

  s4() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  }

  generateId() {
    return this.s4() + "-" + this.s4();
  }

  onUpdateStatus = (id) => {
    var index = this.findIndex(id);
    console.log("index: ", index);
  }

  findIndex = (id) =>{
    var result = '';
    this.state.elementList.forEach((item, index) =>{
     
      if(item.id === id){
        result = id;
        return index;
      }
    });
    return result;
  }

  render() {
    // var { state} = this.state;
    // console.log("list: ", this.state.elementList);
    var elementTaskForm = this.state.isDisplayForm ? <TaskForm onClick={this.onClick} /> : '';
    return (
      <div className="container">
        <div className="text-center">
          <h1>Quản Lý Công Việc</h1><hr />
        </div>
        <div className="row">
          <div className={this.state.isDisplayForm ? 'col-xs-4 col-sm-4 col-md-4 col-lg-4' : ''}>
            {elementTaskForm}
          </div>
          <div className={this.state.isDisplayForm ? 'col-xs-8 col-sm-8 col-md-8 col-lg-8' : 'col-xs-12 col-sm-12 col-md-12 col-lg-12'}>
            <button type="button" className="btn btn-primary" onClick={this.onToggleForm}  >
              <span className="fa fa-plus mr-5" ></span>
                  Thêm Công Việc
              </button>
            <TaskControl />
            {/* {taskListElement} */}
            <TaskList task={this.state.elementList} onClick={this.onClick} onUpdateStatus = {this.onUpdateStatus}/>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
