import React from 'react';
import './../styles/header.css'

export const Header = (props)=> {

    const students = props.students || [];

    return(
        <div style={{
            display: 'flex',
            background: '#e5e5e5',

            height: '100px',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
        
            paddingRight: '25px'
        }}>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                gap: '20px'
            }}>
            <button onClick={props.onAddRecord}>Add</button>


           {students && students.length? <button>Delete</button>:
           null}
            </div>
          
           { students && students.length ? <select>
                <option>std1</option>
                <option>std2</option>
                <option>std3</option>
            </select> : null}
        </div>
    )
}