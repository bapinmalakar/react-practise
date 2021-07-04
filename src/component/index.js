import React from 'react';
import {Header} from './header';

class StudentView extends React.Component{
    
    constructor(props){
        super(props);
    
    this.state = {studentrecords: [],isAdding: false}

        this.onAddRecord = this.onAddRecord.bind(this);
    }
    

    onAddRecord() {
        console.log('username');
        this.setState({isAdding: true});
    }


    render() {
        return(
            <div style={{
                width: "100vw",
                height: "100vh",
                display: 'flex',
                paddingTop: "23px",
                
                flexDirection: 'column'
               
            }}>
                <Header students={this.state.studentrecords}  onAddRecord={this.onAddRecord} />
                {/* {this.state.isAdding?<div>Student detail</div>, <div> Name </div> : null}  */}
              
                 <div id="register">
                 
               
          
        <h3>Registration page </h3>
        <form method="post"  name="Student detail"  onSubmit= {this.submituserRegistrationForm} >
        <label>Name</label>
        <input type="text" name="username"  />
        <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label>Subject</label>
                    <input type="subject" className="form-control" placeholder="Enter subject" />
                </div>
                <button type="submit" className="btn btn-dark btn-lg btn-block">Submit</button>
                <p className="forgot-password text-right">
                   
                </p>
        </form>

    </div> 
    
            </div>
        )
    }
}

export default StudentView;