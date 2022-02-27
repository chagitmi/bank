import { Component } from "react";
import { Link ,NavLink} from "react-router-dom";
import Customer from "../../../Data/Customer";
import Movement from "../../../Data/Movement";
import MovementList from "../../../Data/MovementList";
import './ManegerD.css';


interface ManegerProps {
    maneger: Customer;
    
    //selectMovement:Movement;

}

class ManegerD extends Component<ManegerProps> 
{
    public render(): JSX.Element {
        return (
            <div className="CustomerD" >
                <p>{this.props.maneger.customerId}</p>
                <p>{this.props.maneger.customerName}</p>
                <p>{this.props.maneger.customerAccount}</p>
                <p>{this.props.maneger.customerBalance}</p>
                <p>{this.props.maneger.customerSumA}</p>
                <p>
                    <NavLink to={`/MovementD/${this.props.maneger.customerAccount}`}>
                        <button>Recent movements</button>
                    </NavLink>
                </p>
            </div>
        );
    }
}


export default ManegerD;