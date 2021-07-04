import React from 'react';
import styled from 'styled-components';


const RegistartionContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const RegistrationTitle = styled.div`
    font-size: 13px;
    font-weight: bold;
    text-align: center;
`;

const RegistrationForms = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding-left: 20px;
    padding-right: 20px;
`;

const FormGroup = styled.div`
    display: flex;
    flex-direction: row;
    ${props=> props.marginLeft && {gap: props.marginLeft}};
`;


const InputLabel = styled.label`
    display: flex;
    align-items: center;
    font-size: 15px;
    color: #666;
`;

const InputTextbox = styled.input`
    max-width: 400px;
    min-width: 350px;
    height: 25px;
    border-radius: 5px;
    border: none;
    border-bottom: solid;
    border-width: 1px;
    text-align: center;
    outline: none;
    margin-left: ${props=> props.marginGap}px;
`;

const RegistrationButtons = styled.button`
    padding: 7px 10px 6px 10px;
    border-radius: 15px;
    cursor: pointer;
    background: ${props=> props.backgroundColor? props.backgroundColor : '#4CAF50'};
`;

class RegistrationForm extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            name: '',
            eamil: '',
            course: '',
            batchYear: new Date().getFullYear()
        }

        this.onChangeValue = this.onChangeValue.bind(this);
        this.onSave = this.onSave.bind(this);
        this.onClear = this.onClear.bind(this);
    }

    onSave() {
        const studentRecord = {
            id: Math.random().toString().substring(2),
            name: this.state.name,
            eamil: this.state.eamil,
            course: this.state.course,
            batchYear: this.state.batchYear
        };

        this.props.onStudentRecordPush(studentRecord);
    }

    onClear() {
        this.setState({
            name: '',
            course: '',
            eamil: '',
            batchYear: new Date().getFullYear()
        });
    }

    onChangeValue(ev, key='') {
        if(key == 'n') {
            this.setState({name: ev.target.value});
        } else if(key == 'e') {
            this.setState({eamil: ev.target.value});
        } else if(key == 'c') {
            this.setState({course: ev.target.value});
        } else {
            this.setState({batchYear: ev.target.value});
        }
    }

    render() {
        return(
            <RegistartionContainer style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '20px'
            }}>
                <RegistrationTitle>Registration page</RegistrationTitle>

                <RegistrationForms>
                    <FormGroup>
                        <InputLabel>Name</InputLabel>
                        <InputTextbox onChange={(ev)=> this.onChangeValue(ev, 'n')} type="text" placeholder="your name please"  marginGap={70} value={this.state.name}/>
                    </FormGroup>
                    <FormGroup>
                        <InputLabel>Email</InputLabel>
                        <InputTextbox onChange={(ev)=> this.onChangeValue(ev, 'e')} type="email" placeholder="your email please" marginGap={70} value={this.state.eamil}/>
                    </FormGroup>
                    <FormGroup>
                        <InputLabel>Course</InputLabel>
                        <InputTextbox onChange={(ev)=> this.onChangeValue(ev, 'c')} type="text" placeholder="your course please" marginGap={60} value={this.state.course}/>
                    </FormGroup>
                    <FormGroup>
                        <InputLabel>Batch-Year</InputLabel>
                        <InputTextbox onChange={this.onChangeValue} type="number" placeholder="batch year please" marginGap={35} value={this.state.batchYear}/>
                    </FormGroup>
                    
                    <FormGroup marginLeft={'20px'}>
                        <RegistrationButtons onClick={this.onSave}>Save</RegistrationButtons>
                       {this.props.totalRecords? <RegistrationButtons backgroundColor={'darkred'} onClick={this.props.hideRegistrationForm}>Close</RegistrationButtons> : null}
                        <RegistrationButtons backgroundColor={'#999'} onClick={this.onClear}>Clear</RegistrationButtons>
                    </FormGroup>

                </RegistrationForms>
     
        </RegistartionContainer> 
        )
    }
}


export default RegistrationForm;