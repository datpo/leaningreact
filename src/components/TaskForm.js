import { Component } from 'react'
import Control from './TaskControl';
import ItemTask from './ItemTask';

class TaskForm extends Component {


    constructor(props) {
        super(props);
        this.state = {
            
            name:'',
            status: false
           
        };
    }


//
    // componentWillMount(){
    //     if(localStorage && localStorage.getItem('task')){
    //         var task = JSON.parse(localStorage.getItem('task'));
    //         this.setState({
    //             elementList: task
    //         })
    //     }
    // }



    // addDataBtn = () => {
    //     console.log('fuckyou');

    //     var task = [
    //         { id: this.generateId(), name: 'fuckyou', status: 'kich hoat' },
    //         { id: this.generateId(), name: 'hoc react', status: 'ko kich hoat' },
    //     ];


    //     const newEle = this.state.elementList.slice();
    //     for (var i = 0; i < task.length; i++) {
    //         newEle.push(task[i]);
    //     }


    //     // this.setState({
    //     //     elementList: task
    //     // })



    //     this.setState({
    //         elementList: newEle
    //     });
    //     localStorage.setItem('task', JSON.stringify(task));


    //     console.log("abc:", task);
    //     console.log("props: ", this.props.taskABC);
    // }

    // s4() {
    //     return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    // }

    // generateId() {
    //     return this.s4() + "-" + this.s4();
    // }

   

    onChange = (event) =>{

        // lay tung phan tu target
        var target = event.target;
        var name = target.name;
        var value = target.value;

        if(name === 'status'){
            value = 'true'?true:false;
        }
        // set gia tri theo ten va value 
        this.setState({
            [name]:value
            
        });
    }

    onSubmit = (event) =>{
        event.preventDefault();
         console.log(this.state);
    }

    onClick = () => {
      this.props.onClick(this.state.name, this.state.status);
    }

    render() {
        // let element = this.state.elementList.map((product, index) =>
        //     <ItemTask key={index} name={product.name} status={product.status} index={index} />
        // )

   //     console.log("localstor: ", localStorage.getItem("task"));
        // console.log(this.props);
        return (
            <div class="panel panel-warning">
                <div class="panel-heading">
                    <h3 class="panel-title">Thêm Công Việc
                       
                    </h3>
                </div>
                <div class="panel-body">
                    <form onSubmit={this.onSubmit}>
                        <div class="form-group">
                            <label>Tên :</label>
                            <input type="text" 
                            class="form-control" 
                            name="name"
                            value={this.state.name}
                            onChange={this.onChange}
                            />
                        </div>
                        <label>Trạng Thái :</label>
                        <select class="form-control" required="required" name="status"
                        onChange={this.onChange}>
                            <option value={true}>Kích Hoạt</option>
                            <option value={false}>Ẩn</option>
                        </select>
                        <br />
                        <div class="text-center">
                            <button type="submit" class="btn btn-warning" onClick={this.onClick}>Thêm</button>&nbsp;
                                <button type="submit" class="btn btn-danger">Hủy Bỏ</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default TaskForm;