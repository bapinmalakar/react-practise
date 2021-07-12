import React from 'react';
import {Header} from './header';
import StudentAddForm from './registartionform';

class StudentView extends React.Component{
    
    constructor(props){
        super(props);
    
        this.state = {studentrecords: [],isAdding: false}

        this.onAddRecord = this.onAddRecord.bind(this);
        this.onStudentRecordPush = this.onStudentRecordPush.bind(this);
        this.hideRegistrationForm = this.hideRegistrationForm.bind(this);
    }
    

    onAddRecord() {
        console.log('username');
        if(this.state.isAdding || !this.state.studentrecords.length) {
            return;
        }

        this.setState({isAdding: true});
    }

    onStudentRecordPush(data) {
        this.state.studentrecords.push(data);
        this.setState({studentrecords: this.state.studentrecords, isAdding: false});
    }

    hideRegistrationForm() {
        this.setState({isAdding: false});
    }


    render() {
        // console.log('New data: ', this.state.studentrecords);
        return(
            <div style={{
                width: "100vw",
                height: "100vh",
                display: 'flex',
                paddingTop: "23px",
                flexDirection: 'column',
                gap: '10px'
            }}>
                <Header students={this.state.studentrecords}  onAddRecord={this.onAddRecord}/>
                {/* {this.state.isAdding?<div>Student detail</div>, <div> Name </div> : null}  */}
                {this.state.isAdding || !this.state.studentrecords.length? <StudentAddForm onStudentRecordPush={this.onStudentRecordPush} hideRegistrationForm={this.hideRegistrationForm}  totalRecords={this.state.studentrecords.length}/> : null}
            </div>
        )
    }
}

export default StudentView;