import React, {useState} from 'react'

export default function App(){
  const url = 'https://passwordinator.onrender.com/generate?num=true&caps=true&char=true&len=8'
  const [password, setpassword] = useState([{}]);
  const fetchAPI = () => {
    fetch(url)
    .then((response) => response.json())
    .then ((data) => {setpassword(data)})
  }
  return(
    <div className='display'>
      <button className='button-gen' onClick={() => fetchAPI()}>Generate Password</button>
      {typeof password == 'undefined' ? (
        <p> Loading... </p>
      ) : (
        <p>Here it goes: {password.data}</p>
      )}
    </div>
  );
}