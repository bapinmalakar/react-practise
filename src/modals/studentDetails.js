import React from 'react';

import styled from 'styled-components';

const Contatiner = styled.div`
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    position: fixed;
    z-index: 999;
    background: rgba(0,0,0,0.5);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ContainerBody = styled.div`
    min-width: 350px;
    padding: 20px 15px 19px 16px;
    background: #FFF;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    position: relative;
`;

const Conten = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    font-size: 16px;
    font-weight: bold;
    color: #666;
    align-items: center;
`;

const H3Tag = styled.h3`
    color: #101010;
    text-transform: uppercase;
    text-decoration: underline;
`;

const CloseDiv = styled.div`
    position: absolute;
    right: 15px;
    top: 10px;
    cursor: pointer;
`;


export const StudentDetailsModals = ({
    name, 
    id,
    course,
    batchYear,
    email,
    onHideModal
})=> {

    return(
        <Contatiner onClick={onHideModal}>
                <ContainerBody onClick={ev=> ev.stopPropagation()}>

                    <CloseDiv onClick={onHideModal}>
                        <img src="./../../assets/img/close.svg" style={{
                            width: '20px',
                            height: '20px'
                        }}/>
                    </CloseDiv>

                    <Conten>
                        <H3Tag>Student Details</H3Tag>
                        <div>{id || '123456'}</div>
                        <div>{name || 'demo name'}</div>
                        <div>{email || 'demo_emial@mail.com'}</div>
                        <div>{course || 'demo course'}</div>
                        <div>{batchYear || '2021'}</div>
                    </Conten>
                    
                   
                </ContainerBody>
        </Contatiner>
    )
}

