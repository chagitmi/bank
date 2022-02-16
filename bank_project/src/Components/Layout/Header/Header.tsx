import { NavLink, useHref } from 'react-router-dom';
import Login from '../../Login';
import './Header.css';
import {signin, signout} from '../../../actions';

import {useSelector,useDispatch} from 'react-redux';

function Header() {
  const isLogged = useSelector((state: any) => state.isLogged);
  const dispatch = useDispatch();
    return (
        <div className="Header">
          <p>
          
            {isLogged?  
                <button className={'HeaderButton'} onClick={() => dispatch(signout())}>Logout</button>
                :
                <NavLink to={`/login`}>
                    <button className={'HeaderButton'} onClick={() => dispatch(signin())}>Login</button>
                </NavLink>
            }
           
          </p>
       <h1> Wellcome to the Bank!</h1>
       
         </div>
         )

/*
LoginClick()= () => {

  to={}
}*/

}
export default Header;


