import React,{ useState } from 'react'
import Form from 'react-bootstrap/Form'
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
function Signup() {

  const history = useNavigate();


    const [inpval, setInpval] = useState({
        email: "",
        FirstName:"",
        LastName:"",
        Password: "",
        RepeatPassword:"",
    })
   
    const [data,setData] = useState([]);

    


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

        const{email,FirstName,LastName,Password,RepeatPassword}= inpval;
        
        if(email === ""){
            alert("email field is empty")
        }else if(!email.includes("@")){
            alert("please enter valid e-mail")
        }else if(FirstName === ""){
            alert("FirstName field is empty")
        }else if(LastName === ""){
            alert("LastName field is empty")
        }else if(Password === ""){
            alert("password field is empty")
        }else if(Password.length < 5){
            alert("password length should be less than 8 characters")
        }else if(RepeatPassword!==Password){
            alert("password is not matching")
        }else{
             console.log("data submitted");
             history("/Home")
             localStorage.setItem("usertube",JSON.stringify([...data,inpval]));
        }
    }

  return (
    <>
    <div className="container" style={{background: "linear-gradient(110deg, #fdcd3b 60%, #ffed4b 60%)"}}>
        <section className='rock'>
          <div className="only_data">
            <h1>Create Account</h1>
            <p>Alraedy have account?<span><NavLink to={"/"}>Sign in</NavLink></span></p>
            <Form>
      <Form.Group className="mb-3 col-lg-5" controlId="formBasicEmail">
 
        <Form.Control type="email" name='email' onChange={getdata} placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3 col-lg-5" controlId="formBasicFirstName">
       
        <Form.Control type="text" name='FirstName' onChange={getdata} placeholder="First Name" /> 
        </Form.Group>

        <Form.Group className="mb-3 col-lg-5" controlId="formBasicLastName">
        <Form.Control type="text" name='LastName' onChange={getdata} placeholder="Last Name" autoComplete='username'/>
      </Form.Group>

      <Form.Group className="mb-3 col-lg-5" controlId="formBasicPassword">
       
        <Form.Control type="password" name='Password' onChange={getdata} placeholder="Password" autoComplete='new-password' />
        </Form.Group>
        
        <Form.Group className="mb-3 col-lg-5" controlId="formBasicRepeatPassword">
        <Form.Control type="password" name='RepeatPassword' onChange={getdata} placeholder="Repeat Password" autoComplete='new-password' />
      </Form.Group>
      <button variant="primary" className="mb-3 col-lg-5" onClick={addData} style={{ background: "rgb(52, 235, 189)" }} type="submit">
        Sign-up
      </button>
      <Form.Group className="mb-3 col-lg-5" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
        I have read and agree to the terms and service.      </Form.Group>
    </Form>            
            </div>  
        </section>
    </div>
    </>
  )
}

export default Signup