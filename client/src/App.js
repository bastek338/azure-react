import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import axios from './axios';
import {useEffect, useState} from 'react';
import HeroesList from './components/HeroesList';

function App() {
  const [heroes, setHeroes] = useState([]);
  const [name, setName] = useState('');
  const [id, setId] = useState('');

  useEffect(() => {
     axios.get('/heroes').then(res => setHeroes(res.data));
    
  }, [])
  
  const onChangeId = (e) => {
    setId(e.target.value)
  }
  
  const onChangeName = (e) => {
    setName(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault();
    axios.post('/heroes', {id, name}).then((res) => {
      const updatedHeroes = [...heroes, res.data];
      setHeroes(updatedHeroes);
    });
  }
 
  const deleteHero = (id) => {
    axios.delete(`/heroes/${id}`).then(() => {
      const updatedHeroesList = heroes.filter(val => val._id !== id);
      setHeroes(updatedHeroesList);
    })
    .catch((err) => console.log(err));
  }

  return (
    <div className="App">
     <h1>Fancy Azure Heroes!</h1>
     <p>Add our own hero!</p>
     <Form name={name} id={id} onChangeId={onChangeId} onChangeName={onChangeName} onSubmit={onSubmit}/>
     {heroes.length ? <HeroesList heroesList={heroes}  deleteHero={deleteHero}/> : <div style={{paddingTop: '2em'}}>Loading data...</div>}
    </div>
  );
}

export default App;
