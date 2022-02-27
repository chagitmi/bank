import { Component } from "react";
import { Link ,NavLink} from "react-router-dom";
import Customer from "../../../Data/Customer";
import Movement from "../../../Data/Movement";
import MovementList from "../../../Data/MovementList";
import './CustomerD.css';

interface CustomerProps {
    customer: Customer;
    customerMovement:any;
    //selectMovement:Movement;

}

class CustomerD extends Component<CustomerProps> 
{
    public render(): JSX.Element {
        return (
            <div className="CustomerD" >
                <p>{this.props.customer.customerId}</p>
                <p>{this.props.customer.customerName}</p>
                <p>{this.props.customer.customerAccount}</p>
                <p>{this.props.customer.customerBalance}</p>
                <p>{this.props.customer.customerSumA}</p>
                <p>
                    <NavLink to={`/MovementD/${this.props.customer.customerAccount}`}>
                        <button className="CustomerDMovement">Show my movements</button>
                    </NavLink>
                </p>
            </div>
        );
    }
}


export default CustomerD;