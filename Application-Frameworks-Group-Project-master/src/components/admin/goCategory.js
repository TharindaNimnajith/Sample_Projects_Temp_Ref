import React, {Component} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

/**
 * functional component
 * create vertical navigation bar to display categories added by admin
 * */

class Category extends Component{
    constructor(props) {
        super(props);

        this.state = {
            categories: []
        }
    }

    /**
     * adding category details to the categories array using get end point
     * */
    componentDidMount() {
        axios.post('http://localhost:5000/categories/get')
            .then(response =>{
                this.setState({categories: response.data})
                console.log(response.data);
            })
            .catch((error) =>{
                console.log(error);
            });
    }

    /**
     * setting the objects in the elements in the category array to the CategoryView component
     * after return it
     * */

    render() {
        return (

            this.state.categories.map(category => (
                <div key={category.categoryname}>
                    {/*<link rel="stylesheet" href={"/productsList/" + category.categoryname}/>*/}
                    <Link to={"/productsList/" + category.categoryname}>{category.categoryname}</Link>
                </div>
            ))
        );
    }
}
export default Category;