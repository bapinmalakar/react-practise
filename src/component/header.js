import React from 'react';
import './../styles/header.css'

export const Header = (props)=> {

    const students = props.students || [];

    console.log('New student records: ', props.students);

    return(
        <div style={{
            display: 'flex',
            background: '#e5e5e5',
            height: '60px',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingLeft: '25px',
            paddingRight: '25px'
        }}>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                gap: '20px'
            }}>
            <button onClick={props.onAddRecord}>Add</button>

            </div>
          
           { students && students.length ? <select onChange={(ev)=> props.onSeletedRecord(ev.target.value)}>
             {
                students.map((std, index)=> <option value={index} key={std.id} selected={props.slectedIndex == index}>{std.name}</option>) 
             }   
            </select> : null}
        </div>
    )
}