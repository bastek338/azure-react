import React from 'react'
import styled from 'styled-components'

const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 200px;
`;


const Form = ({name, onChangeName, id, onChangeId, onSubmit}) => {
    
    return (
        <FormContainer onSubmit={onSubmit}>
            <label htmlFor="id">Id: </label>
            <input id="id" type="text" value={id} onChange={onChangeId} placeholder="e.g 123"/> 
            <label htmlFor="name">Hero Name: </label>
            <input id="name" type="text" value={name} onChange={onChangeName} placeholder="eg. Iron Cosmos"/>   
            <button type="submit">Create Hero</button>
        </FormContainer>
    )
}

export default Form;
