import React, {Component} from "react";
import axios from "axios";
import swal from "sweetalert";

class CategoryAdd extends Component{
    constructor(props) {
        super(props);

        this.onChangeCategoryname = this.onChangeCategoryname.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            categoryname: ''
        }
    }
    onChangeCategoryname(e){
        this.setState({
            categoryname: e.target.value
        });
    }

    /**
     * to display the successfully added new category message
     * after adding new category text field covert to empty
     * */
    sweetalertfunction(){
        swal({
            title: "New Category Added",
            text: "You are Successfully Added new Category.",
            icon: "success",
            button: true,
        }).then(()=>{
            this.setState({
                categoryname: ''
            });
        });
    }

    /**
     * create an object and pass the values in the text field to that object
     * the values in the object is send to the addCategory end point by using axios
     * if the success value that is returned from the backend is true
     * display successfully added alert using sweetalert
     * if the success value that is returned from the backend is false
     * display an error alert
     * */
    onSubmit(e){
        e.preventDefault();

        const category = {

            categoryname: this.state.categoryname,

        }

        console.log(category);

        axios.post('http://localhost:5000/categories/addCategory', category)
            .then(res => {
                if (res.data.success === true) {
                    this.sweetalertfunction();
                }
                if (res.data.success === false) {
                    swal({
                        title: "Category Not Added!",
                        text: res.data.message,
                        icon: "error",
                        button: true,
                        dangerMode: true,
                    });
                }
            });
    }

    render() {
        return (
            <div style={{margin: "10px"}}>
                <ul className="nav justify-content-end">
                    <li className="nav-item">
                        <button type="button" className="btn btn-sm"
                                style={{backgroundColor: "#E1BEE7", marginRight: "10px"}}><a className="nav-link active"
                                                                                             style={{color: "#000"}}
                                                                                             href="/adminHome">Back</a></button>
                    </li>
                    <li className="nav-item">
                        <button type="button" className="btn btn-sm"
                                style={{backgroundColor: "#E1BEE7", marginLeft: "10px"}}><a className="nav-link"
                                                                                            style={{color: "#000"}}
                                                                                            href="/adminLogin">Logout</a>
                        </button>
                    </li>
                </ul>
                <br/>
            <div className="container">
                <h3 style={{color: "#4A235A"}}>Add Category Page</h3>
                <br/>
                <form onSubmit={this.onSubmit} className="jumbotron" style={{backgroundColor:"#E1F5FE"}}>
                    <div className="form-group">
                        <label>New Category Name: </label>
                        <input type="text"
                               className="form-control"
                               value={this.state.categoryname}
                               onChange={this.onChangeCategoryname}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Add Category" style={{color:"#fff",backgroundColor:"#208FC8"}} className="btn"/>
                    </div>
                </form>
            </div>
            </div>
        );
    }
}
export default CategoryAdd;