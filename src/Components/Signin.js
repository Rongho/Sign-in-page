import React,{ useState } from 'react'
import Form from 'react-bootstrap/Form'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

export const Signin = () => {
  const history= useNavigate();
  const [inpval, setInpval] = useState({
    email: "",
    Password: "",
    
})

const [data,setData] = useState([]);
console.log(inpval);

const getdata=(e)=>{
    const { value, name } = e.target;
    // console.log(value,name);


    setInpval(() => {
        return {
            ...inpval,
            [name]: value
        }
    })
}

const addData =(e)=>{
    e.preventDefault();

    const getuserArr = localStorage.getItem("usertube");
    console.log(getuserArr);

    const{email,Password}= inpval;
    
    if(email === ""){
        alert("email field is empty")
    }else if(!email.includes("@")){
        alert("please enter valid e-mail")
    }else if(Password === ""){
        alert("password field is empty")
    }else if(Password.length < 5){
        alert("password length should be less than 8 characters")
    }else{
       
      if(getuserArr && getuserArr.length){
        const userdata = JSON.parse(getuserArr);
                const userlogin = userdata.filter((el, k) => {
                    return el.email === email && el.Password === Password
                });
                if (userlogin.length === 0) {
                  alert("invalid details")
              } else {
                  console.log("user login succesfulyy");

                  localStorage.setItem("user_login", JSON.stringify(userlogin))

                  history("/Home")
              }
      }
    }
  }
  return (
    <>
    <div className="container" style={{background:"linear-gradient(90deg, rgba(210,82,110,0.4542191876750701) 45%, rgba(215,201,85,0.5886729691876751) 59%)"}} >
        <section className='rock'>
          <div className="only_data">
            <h1>Create Account</h1>
            <p>Dont have account,register here?<span><NavLink to={"/Signup"}>Sign up</NavLink></span></p>
            <Form>
      <Form.Group className="mb-4 col-lg-5" controlId="formBasicEmail">
 
        <Form.Control type="email" name='email' autoComplete='username' onChange={getdata} placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-4 col-lg-5" controlId="formBasicPassword">
       
        <Form.Control type="password" name='Password' onChange={getdata} placeholder="Password" autoComplete='new-password' />
        </Form.Group>
        
        
      <button variant="primary" className="mb-3 col-lg-5" onClick={addData} style={{ background: "rgb(52, 235, 189)" }} type="submit">
        Sign-in
      </button>
      </Form>
            </div>  
        </section>
    </div>
    </>
  )
}
