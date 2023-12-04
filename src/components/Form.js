import React, { useEffect, useState } from 'react';
import axios from 'axios'

export default function Form() {
    const [user, setUser] = useState({
        name:'',
        email:'',
        password:'',
        file:'',
    })

    const[getData, setGetData] = useState([])
     
    const onchangeHandler = (e) =>{
        // console.log(e);
        // const {name, email, password, file} = e.target;
        const name = e.target.name;
        const val = e.target.value;
        console.log(name,val);
        setUser({...user, [name]:val})
    }
    const formHandle = (e) =>{
        e.preventDefault()
        // console.log(e);
        axios.post('http://localhost:3001/form',user)
        .then((response)=>{
            console.log(response.data);
        })
       
        const data = {...user, id: new Date().getTime().toString()}
        console.log(data);

        setUser({ name: '', email:'', password:'', file:''})
    }
    useEffect(()=>{
        axios.get('http://localhost:3001/getAllData')
        .then((res)=>{
            // console.log(res.data);
            setGetData(res.data)
        })
       },[])

       const removeData = (id)=>{
        console.log('delete',id);
       }

  return (
    <>
      <div className="header">
        <h1 className="heading">CRUD FORM</h1>
      </div>
      <div className='container' style={{ marginTop: '30px', background: '#dadada', width: '30%' }}>
        <form onSubmit={formHandle}>
          <div className="input-wrapper" >
            <input className="custom-input" style={{marginTop:'20px'}} type='text' name='name' value={user.name} onChange={onchangeHandler} placeholder='Enter Name' />
          </div>
          <div className="input-wrapper">
            <input className="custom-input" type='email' name='email' value={user.email} onChange={onchangeHandler}  placeholder='Enter E-mail' />
          </div>
          <div className="input-wrapper">
            <input className="custom-input" type='password' name='password' value={user.password} onChange={onchangeHandler}  placeholder='Enter Password' />
          </div>
          <div className="input-wrapper">
            <input className="custom-input" type='file' name='file' value={user.file} onChange={onchangeHandler}  />
          </div>
          <div style={{ textAlign: 'center' }}>
            <button style={{ padding: '15px', width: "60%", color: 'gold', backgroundColor: 'indigo', border: 'none', borderRadius: '8px', marginBottom: '10px', cursor: 'pointer' }}>Submit</button>
          </div>
        </form>
      </div>


      <table border = '1'>
        <tr>
        <th>Name</th>
        <th>Email</th>
        <th>password</th>
        <th>Remove</th>
        <th>Update</th>
        </tr>
        <tbody>
            {
                getData.map((data)=>{
                    {/* console.log(data) */}
                    return (<>
                        <tr>
                        <td>{data.name}</td>
                        <td>{data.email}</td>
                        <td>{data.password}</td>
                        <td><button onClick={removeData}>Delete</button></td>
                        <td><button>Eidt</button></td>
                    </tr>
                    </>

                    )
                   
                })
            }
        </tbody>
      </table>
    </>
  )
}
