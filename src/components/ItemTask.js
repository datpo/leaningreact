import { Component } from 'react'

class ItemTask extends Component {
    onUpdateStatus = () =>{
        
        this.props.onUpdateStatus(this.props.id);
    }
    render() {
        console.log("status: ", this.props.status);
        return (
            // <tr>
            //     <td>{this.props.index}</td>
            //     <td>{this.props.name}</td>
            //     <td className="text-center">
            //         {this.props.status}
            //     </td>
            //     <td className="text-center">
            //         <button
            //             type="button"
            //             className="btn btn-warning"
            //             onClick={this.onEditTask}>
            //             <span className="fa fa-pencil mr-5"></span>Sửa
            //     </button>
            //     &nbsp;
            //     <button
            //             type="button" className="btn btn-danger"
            //             onClick={this.onDeleteItem}>
            //             <span className="fa fa-trash mr-5"></span>Xóa
            //     </button>
            //     </td>
            // </tr>
            <tr>
                <td>1</td>
                <td>{this.props.name}</td>
                <td class="text-center" >
                    <span class={this.props.status === true? "label label-success": "label label-danger"}
                    onClick = {this.onUpdateStatus}>
                        {this.props.status===true?"kich hoat" : "khoong kich hoat"}
                    </span>
                </td>
                <td class="text-center">
                    <button type="button" class="btn btn-warning">
                        <span class="fa fa-pencil mr-5"></span>Sửa
                                </button>
                                &nbsp;
                                <button type="button" class="btn btn-danger">
                        <span class="fa fa-trash mr-5"></span>Xóa
                                </button>
                </td>
            </tr>
        )
    }
}
export default ItemTask;