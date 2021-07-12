import React from 'react';
import {Header} from './header';
import StudentAddForm from './registartionform';
import {StudentDetailsModals} from './../modals/studentDetails';

class StudentView extends React.Component{
    
    constructor(props){
        super(props);
    
        this.state = {
            studentrecords: [
                {
                    id: Math.random().toString().substring(2),
                    name: 'Student 1',
                    eamil: 'student1@mail.com',
                    course: 'BCA',
                    batchYear: 2000
                },
                {
                    id: Math.random().toString().substring(2),
                    name: 'Student 2',
                    eamil: 'student2@mail.com',
                    course: 'BCA',
                    batchYear: 2000
                },
                {
                    id: Math.random().toString().substring(2),
                    name: 'Student 3',
                    eamil: 'student3@mail.com',
                    course: 'MCA',
                    batchYear: 2017
                }
            ],
            isAdding: false,
            slectedIndex: -1,
            showDetailsModal: false
    }

        this.onAddRecord = this.onAddRecord.bind(this);
        this.onStudentRecordPush = this.onStudentRecordPush.bind(this);
        this.hideRegistrationForm = this.hideRegistrationForm.bind(this);
        this.onSeletedRecord = this.onSeletedRecord.bind(this);
        this.onHideModal = this.onHideModal.bind(this);
    }


    onSeletedRecord(index=-1) {
        console.log('Selectd index is: ', index);
        if(this.state.studentrecords[index] && this.state.studentrecords[index].id) {
            this.setState({
                slectedIndex: index,
                showDetailsModal: true
            })
        }
    }

    onHideModal() {
        this.setState({
            showDetailsModal: false
        })
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
                flexDirection: 'column',
                gap: '10px'
            }}>
                {this.state.showDetailsModal && this.state.slectedIndex>=0 ? <StudentDetailsModals 
                    {...this.state.studentrecords[this.state.slectedIndex]}
                    onHideModal={this.onHideModal}
                /> : null}

                <Header 
                    students={this.state.studentrecords}  
                    onAddRecord={this.onAddRecord} 
                    slectedIndex={this.state.slectedIndex}
                    onSeletedRecord={this.onSeletedRecord}
                />
                {/* {this.state.isAdding?<div>Student detail</div>, <div> Name </div> : null}  */}
                {this.state.isAdding || !this.state.studentrecords.length? <StudentAddForm onStudentRecordPush={this.onStudentRecordPush} hideRegistrationForm={this.hideRegistrationForm}  totalRecords={this.state.studentrecords.length}/> : null}
            </div>
        )
    }
}

export default StudentView;