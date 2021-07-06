import React from 'react';
import './SubjectList.css'


function SubjectList(props){
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
                       props.subjects.map((subject, index) => (
                            <tr key={subject._id} onClick={() => props.handleClick(index)} >
                                 <td >{subject.name} </td>
                            </tr>
                            )
                        )
                    }                                
                </tbody>
            </table>
        </div>
       
    );
}


export default SubjectList;