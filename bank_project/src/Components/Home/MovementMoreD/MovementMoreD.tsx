import { Component } from "react";
import { Link ,NavLink} from "react-router-dom";
import Customer from "../../../Data/Customer";
import Movement from "../../../Data/Movement";
import MovementList from "../../../Data/MovementList";
import './MovementMoreD.css';


interface MovementMoreDProps {
    movement: Movement;
    //selectMovement:Movement;

}

class MovementMoreD extends Component<MovementMoreDProps> 
{
    public render(): JSX.Element {
        return (
            <div className="MovementMoreD" >
                <p>{this.props.movement.movementAccount}</p>
                <p>{this.props.movement.movementId}</p>
                <p>{this.props.movement.movementName}</p>
                <p>{this.props.movement.movementSum}</p>               
            </div>
        );
    }
}


export default MovementMoreD;