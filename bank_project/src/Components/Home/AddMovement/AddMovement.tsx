import { Component, SyntheticEvent } from "react";
import { Link ,NavLink} from "react-router-dom";
import Customer from "../../../Data/Customer";
import Movement from "../../../Data/Movement";
import MovementList from "../../../Data/MovementList";
import './AddMovement.css';

function AddMovement(){

    return (
        <div className="AddMovement">
        <nav>
           <h2>Wellcome to add movements service!</h2>
            <Link to='/deposit'>
                    <button className={'AddMovementDeposit'} >Add Deposit</button>
            </Link>
            <Link to='/attraction'>
                    <button className={'AddMovementAttraction'}>Add Attraction</button>
            </Link>
            
        </nav>
         </div>
         )

}

export default AddMovement