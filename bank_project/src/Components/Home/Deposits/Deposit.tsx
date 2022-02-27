import { Component, SyntheticEvent } from "react";
import { Link ,NavLink} from "react-router-dom";
import Customer from "../../../Data/Customer";
import Movement from "../../../Data/Movement";
import MovementList from "../../../Data/MovementList";
import './Deposit.css';

interface DepositMovemevtState{

    movementId:number;
    movementAccount:number;
    movementSum:number;
    movementName:string;
    hasErrors: boolean;
    errors:any;

}


class Deposit extends Component<any,DepositMovemevtState>{

    constructor(props: any) {
        super(props);
        this.state = { movementId: null, movementAccount: null, movementSum: null,movementName:null, hasErrors: false, errors:{} }
    }

    public render(): JSX.Element {
        return (
            <div className="Deposit">
                <h2>New Deposit</h2>
                <p>
                    <input type="number" placeholder="movement Id" value={this.state.movementId} onChange={this.movementIdChanged} />
                    {this.state.hasErrors &&
                        <span className="error">{this.state.errors.movementId}</span>
                    }
                </p>
                <p>
                    <input type="number" placeholder="movement Account" value={this.state.movementAccount} onChange={this.movementAccountChanged} />
                    {this.state.hasErrors &&
                        <span className="error">{this.state.errors.movementAccount}</span>
                    }
                </p>
                <p>
                    <input type="number" placeholder="movement Sum" value={this.state.movementSum} onChange={this.movementSumChanged} />
                    {this.state.hasErrors &&
                        <span className="error">{this.state.errors.movementSum}</span>
                    }
                </p>
                <p>
                    <input type="number" placeholder="movement Name" value={this.state.movementName} onChange={this.movementNameChanged} />
                    {this.state.hasErrors &&
                        <span className="error">{this.state.errors.movementName}</span>
                    }
                </p>
                <p>
                    <input type="button" value="Add" onClick={this.addDeposit} className={'DepositAdd'} />
                </p>
            </div>
        );
    }

    movementIdChanged = (e: SyntheticEvent) => {
        this.setState({ movementId: Number((e.target as HTMLInputElement).value) });
    };

    movementAccountChanged = (e: SyntheticEvent) => {
        this.setState({ movementAccount: Number((e.target as HTMLInputElement).value) });
    };

    movementSumChanged = (e: SyntheticEvent) => {
        this.setState({ movementSum: Number((e.target as HTMLInputElement).value) });
    }

    movementNameChanged=(e:SyntheticEvent) => {
        this.setState({ movementName: String((e.target as HTMLInputElement).value) });
    }

    addDeposit = async () => {
        let newMovement: Movement = {
            movementId: this.state.movementId,
            movementAccount: this.state.movementAccount,
            movementSum: this.state.movementSum,
            movementName: this.state.movementName,
        };
        try {
            await this.props.MovementRepository.addDeposit(newMovement);
            this.props.doneMethod();
        }
        catch (err: any) {
            let errors={
                movementId:err.response.data.movementId || "",
                movementAccount: err.response.data.movementAccount || "",
                movementSum: err.response.data.movementSum || "",
                movementName: err.response.data.movementName || "",
            };
            this.setState({hasErrors:true, errors})
        }
    }

}

export default Deposit;