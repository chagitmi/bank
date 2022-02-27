import { NavLink, useHref } from 'react-router-dom';
import Login from '../../Login';
import './Header.css';
import {signin, signout} from '../../../actions';
import React from 'react';
import {useSelector,useDispatch, Provider} from 'react-redux';
import { createStore } from 'redux';
import ReactDOM from 'react-dom';

function Header() {
  // const isLogged = useSelector((state: any) => state.isLogged);
  //const dispatch = useDispatch();
  //const store = createStore(isLogged);
    return (
        <div className="Header">
          <p>
                <NavLink to={`/login`}>
                    <button className={'HeaderButton'} >Login</button>
                </NavLink>
           
          </p>
       <h1> Wellcome to the Bank!</h1>
       
         </div>
         )

/*
LoginClick()= () => {

  to={}


  {isLogged?  
                <button className={'HeaderButton'} onClick={() => dispatch(signout())}>Logout</button>
                :

                <NavLink to={`/login`}>
                    <button className={'HeaderButton'} onClick={() => dispatch(signin())}>Login</button>
                </NavLink>
            }
}*/

}
export default Header;


