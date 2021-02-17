import React from 'react';

import styled from 'styled-components';

const List = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2em;
`

const ListItem = styled.li`
    padding: 8px 0;
    width: 250px;
    display: flex;
    justify-content: space-between;
`

const HeroesList = ({heroesList, deleteHero}) => {    
    return (
        <List>
        <ul>
            {heroesList.map((val) => {
                return <ListItem key={val._id}>{val.name}<button onClick={() => deleteHero(val._id)} style={{color: 'red', paddingLeft: '16px'}}>Delete</button></ListItem>
            })}
        </ul>
        </List>
    )
}

export default HeroesList
