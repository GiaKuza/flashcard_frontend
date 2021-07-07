import React, {Component} from 'react';
import './SubjectList.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'


class SubjectList extends Component {
    constructor(props){
        super(props);
        this.state = {
            selectedRow: 0,
            subjects: this.props.subjects
            
        }
        //let currentSubject = this.state.subjects[this.state.selectedRow];
        //console.log('current subjects',currentSubject)
    }


   /* changeColor  = (index) => selectedRow => e => {
        let selectedSubject = this.props.subjects[index];
        if (selectedRow !== undefined) {
          this.setState({ cards: selectedSubject, cardIndex: 0, selectedRow  });
        }
        console.log('handleClick index',index);
        //let selectedSubject = this.state.subjects[index];
    }*/
    
    changeColor = selectedRow => e => {
        console.log("changecolor function", selectedRow)
        if (selectedRow !== undefined) {
          this.setState({ 
              selectedRow  });
        }
        
      };
    
    render(){

        let currentSubject = this.state.subjects[this.state.selectedRow];
        console.log('current subjects',currentSubject)
        console.log('state subjexts', this.state.subjects)

    return(
        <div className="subject-div">
            <table className='table table-hover table-bordered '>
                <thead className='thead-dark'>
                    <tr>
                        <th scope='col'> Subjects </th>
                    </tr>
                </thead>
                <tbody>
                    {
                       this.state.subjects.map((subject, index) => (
                            <tr key={subject._id}  onClick= {this.changeColor(index)} className={this.state.selectedRow === index ? "tableSelected" : "" } >
                                 {console.log(index, this.state.selectedRow)}
                                 <td >{subject.name} </td>
                            </tr>
                            )
                        )
                    }                                
                </tbody>
            </table>
        </div>
       
    );
}}


export default SubjectList;