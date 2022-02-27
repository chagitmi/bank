import { Component } from 'react';
import { BrowserRouter, Link, Route  } from 'react-router-dom';
import Home from '../../Home/Home';
import './Menu.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>Routing Demo 1</h1>
                <BrowserRouter>
                    <Menu />
                    <Route path='/home' element={<Home/>} />
                    <Route path='/customers' />
                    <Route path='/movements' />
                </BrowserRouter>
            </div>
        );
    }
}

function Menu() {
    return (
        <div className="Menu">
        <nav>
           <ul>
            <Link to='/home'>
                    <li>Home</li>
            </Link>
            <Link to='/customers'>
                    <li>Customers</li>
            </Link>
            <Link to='/AddMovement'>
                    <li>Add Movement</li>
            </Link>
            </ul>
        </nav>
         </div>
         )
}

export default Menu;