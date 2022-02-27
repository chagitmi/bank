import { findByDisplayValue } from '@testing-library/react';
import React, { Component, SyntheticEvent } from 'react';
import { Link , NavLink} from 'react-router-dom';
import { getConstantValue, idText } from 'typescript';
import {signin, signout} from '../actions';
// import {useSelector,useDispatch} from 'react-redux';
import './Login.css';

interface LoginState {
 
  userName:string;
  password: string;
  hasErrors: boolean;
  errors:any;
}

class Login extends Component<any, LoginState>
{

  constructor(props: any) {
    super(props);
    this.state = { userName: null, password: null, hasErrors: false, errors:{} }
}
  public render() :JSX.Element{

        return(
          <div className="Login dropdown">
       <h2>Login</h2>
       <input  id="UserName" type={'text'} placeholder="UserName" value={this.state.userName}  onChange={this.userNameChanged}/>
       <br></br>
       <input id="Password" type={'password'} placeholder="Password" value={this.state.password}  onChange={this.passwordChanged}/>
       <br></br>
       <input className="dropbtn" placeholder="Dropdown"></input>
         <div className="dropdown-content">
          <p>Customer</p>
          <p>Maneger</p>
         </div>
         <br></br>
         <p>
         {
            this.state.hasErrors &&
            <span className="error">{this.state.errors.userName}</span>
              
          }
          {
            <span className="error">{this.state.errors.password}</span>
          }
          </p>
       <br></br><br></br>
       <button>Submit</button>
         </div>
        );
  }



userNameChanged = (e: SyntheticEvent) => {
  this.setState({ userName: String((e.target as HTMLInputElement).value) });
};
passwordChanged = (e: SyntheticEvent) => {
  this.setState({ password: String((e.target as HTMLInputElement).value) });
};







}
/*
function Login() {
  //const isLogged = useSelector((state: any) => state.isLogged);
  //const dispatch = useDispatch();
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


 <NavLink to={`/CustomerD/${this.props.UserName}`}>
                        <button>Submit</button>
        </NavLink>
*/



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


function isErorr(): React.ReactNode {
  throw new Error('Function not implemented.');
}
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