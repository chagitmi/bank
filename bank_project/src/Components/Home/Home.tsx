import Login from '../Login';
import './Home.css';
import { Route, Routes } from "react-router-dom";
import { Component } from 'react';
import Customer from '../../Data/Customer';
import Manager from '../../Data/Manager';
import MovementD from './MovementDitailes/MovementD';
import CustomerD from './CustomerDitailes/CustomerD';
import AddMovement from './AddMovement/AddMovement';
import Deposit from './Deposits/Deposit';
import Attraction from './Attraction/Attraction';

interface HomeState {
  loginHome:any;
}

class Home extends Component<any, HomeState> {
  
  
  public render(): JSX.Element {
    console.log(this.state);
      return (
      <div className="Home">
          <Routes>
              <Route path='/'  />
              <Route path='/home' element={<Home/>}  />
              <Route path='/login' element={<Login/>} />
              <Route path='/CustomerD' element={'<CustomerD/>'} />
              <Route path='/MovementD' element={<MovementD/>} />
              <Route path='/AddMovement' element={<AddMovement/>} />
              <Route path='/deposit' element={<Deposit/>} />
              <Route path='/attraction' element={<Attraction/>} />
          </Routes>
      </div>
  );
      }

      loginHome = () => {
        this.props.loginHome(this.props.loginHome);
    }
    }
export default Home;