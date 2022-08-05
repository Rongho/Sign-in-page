import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const setpage= useNavigate();
  const[post, setpost]=useState([]);

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    await fetch("https://restcountries.com/v2/all")
      .then((res) => res.json())
      .then((res) => {
        setpost(res);
        console.log(res);
      });
  };
  const logout=()=>{
    localStorage.removeItem('getUserData');
    setpage("/")

  }

  return (
    <>
                                      
    <table className='audit'>
      <tr>
        <th>Name</th>
        <th>Capital</th>
        <th>Currencies Code</th>
      </tr>
      {post.map((res,index) => (
        <>
        <tr key={index}>
          <td>{res.name}</td>
          <td>{res.capital}</td>
          <td>
          {
          res.currencies?.map((resp) => (
            <table>
            <tr>{resp.code}</tr>
            </table>
          ))
        }
        
          </td>
        </tr>

        
        
        </>
      ))
      }
      <button onClick={logout} style={{justifyContent:'center'}}>Log out</button>
    </table>

    
    
    </>
    
    
  )
}
