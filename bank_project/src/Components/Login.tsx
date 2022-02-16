import { findByDisplayValue } from '@testing-library/react';
import { Component } from 'react';
import { Link , NavLink} from 'react-router-dom';
import { getConstantValue } from 'typescript';
import {signin, signout} from '../actions';
import {useSelector,useDispatch} from 'react-redux';
import './Login.css';

function Login() {
  const isLogged = useSelector((state: any) => state.isLogged);
  const dispatch = useDispatch();
    return (
        <div className="Login dropdown">
        <h2>Login</h2>
        <input id="UserName" type={'text'} placeholder="UserName" />
        <br></br>
        <input id="Password" type={'password'} placeholder="Password" />
        <br></br>
        <input className="dropbtn" placeholder="Dropdown"></input>
        <div className="dropdown-content">
          <p>Customer</p>
          <p>Maneger</p>
        </div>
        <br></br>
        <span>errors</span>
        <br></br><br></br><br></br>
        <button>Submit</button>
       
         </div>
         );
}



function LoginSubmit(this: any): void {

  try{

      <NavLink to={`/CustomerD/${this.props.customer}`}>
                        <button>Recent movements</button>
      </NavLink>

  }
  catch{


  }

  

  throw new Error('Function not implemented.');
}


export default Login;

/*
class Login {
  props: any;

  public render() :JSX.Element{

        return(
          <div className="Login dropdown">
       <h2>Login</h2>
       <input  id="UserName" type={'text'} placeholder="UserName"/>
       <br></br>
       <input id="Password" type={'password'} placeholder="Password"/>
       <br></br>
       <input className="dropbtn" placeholder="Dropdown"></input>
         <div className="dropdown-content">
          <p>Customer</p>
          <p>Maneger</p>
         </div>
         <br></br>
       <span >errors</span>
       <br></br><br></br>
       <p>
        <NavLink to={`/CustomerD/${this.props.UserName}`}>
                        <button>Submit</button>
        </NavLink>
       </p>
         </div>
        );
  }
}

*/