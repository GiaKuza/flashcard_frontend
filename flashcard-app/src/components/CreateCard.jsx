import React, {Component} from 'react';
import axios from 'axios';
import './CreateCard.css'



class CreateCard extends Component{
    constructor(props){
        super(props);

        this.state = {
            "title": "",
            "description": "",
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

    }
    
    //handleChange
    //build object from the form
    handleChange(event){
        console.log(event)
        this.setState({
        [event.target.name]: event.target.value
        });

        
    }

    //handleSubmit
    //make axios post call
    handleSubmit(event){
        
        event.preventDefault();
        axios.post('http://localhost:5000/api/collections/', this.state).then(res => {
            console.log(`statusCode: ${res.statusCode}`)
            console.log(res)
          })
        //clear the form
        this.setState ({
            "title": "",
            "description": "",
      
        });
        alert('flashcard has been added!')

        //this.props.getAllSongs();
        this.props.updateSubjects();

        }

    
    render(){
        return(
            <form className='create-form' onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor='title'>Title</label>
          <input 
            name='title'
            placeholder='Title' 
            value = {this.state.title}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor='description'>Description</label>
          <input
            name='description' 
            placeholder='description'
            value={this.state.album}
            onChange={this.handleChange}
          />
        </div>
        
        <div>
          <button>Add this flashcard</button>
        </div>
      </form>
        );
    }

}

export default CreateCard;