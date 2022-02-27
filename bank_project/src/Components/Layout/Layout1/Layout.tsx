import Home from '../../Home/Home';
import Footer from '../Footer/Footer';
import './Layout.css';
import Menu from '../Menu/Menu';
import Header from '../Header/Header';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider, useDispatch } from 'react-redux';
import { createStore } from 'redux';
import allReducers from '../../../reducers';

function Layout() {
    
    return (
        <div className="Layout">
            <BrowserRouter>
            <header>
                <Header />
            </header>
            <aside>
                <Menu />
            </aside>

            <main>
            
                <Home />
            
             </main>
            <footer>
                <Footer />
            </footer>
            </BrowserRouter>
         </div>
         )
}

export default Layout;