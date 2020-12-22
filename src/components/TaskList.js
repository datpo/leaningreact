import { Component } from 'react'
import Control from './TaskControl';
import ItemTask from './ItemTask';

class TaskList extends Component {

    // constructor(props){
    //     super(props);
    // }

    render() {
        
        var ele =  this.props.task.map((item, index) => {
           return <ItemTask key = {index} name = {item.name} status = {item.status} id={item.id} onUpdateStatus={this.props.onUpdateStatus}/>
        });
        return (
            <div class="row mt-15">
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <table class="table table-bordered table-hover">
                        <thead>
                            <tr>
                                <th class="text-center">STT</th>
                                <th class="text-center">Tên</th>
                                <th class="text-center">Trạng Thái</th>
                                <th class="text-center">Hành Động</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td></td>
                                <td>
                                    <input type="text" class="form-control" />
                                </td>
                                <td>
                                    <select class="form-control">
                                        <option value="-1">Tất Cả</option>
                                        <option value="0">Ẩn</option>
                                        <option value="1">Kích Hoạt</option>
                                    </select>
                                </td>
                                <td></td>
                            </tr>
                           {ele}
                            {/* <ItemTask name={this.props.task.name} status = {this.props.task.status} /> */}
                            {/* <ItemTask /> */}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default TaskList;