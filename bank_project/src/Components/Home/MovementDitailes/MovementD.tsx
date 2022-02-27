import { Component } from "react";
import Movement from "../../../Data/Movement";
import axios from "axios";
import MovementList from "../../../Data/MovementList";
import { NavLink } from "react-router-dom";
import './MovementD.css';

interface MovementState{
    movements:Movement[];
    selectedMovement:Movement;
}


class MovementD extends Component<any,MovementState>{

   // MovementAllList : MovementList[];
    //Movements :Movement[]=[];
    constructor(props: any) {
        super(props);
        this.state = { movements: [], selectedMovement: null };
    }

    componentDidMount = async () => {
        const response = await this.props.MovementRepository.getAll();
        this.setState({ movements: response.data });
    }
    /*
    componentDidMount = async () => {
        const MovementPromise = axios.get<MovementAllList[]>(MovementList.MovementList);
        const response = await MovementPromise;
        this.Movements = response.data;
        this.setState({});
    }
    */
    public render(): JSX.Element {
        return (
            <div className="MovementD">
                <h2>Account Num {this.props.movementAccount}'s Movements </h2>
                <div>
                    <table>
                    <caption><h2>Last of Movements ({this.state.movements.length})</h2></caption>
                        <thead>
                            <th>Movement Number</th>
                            <th>Movement Sum</th>
                            <th>Movement Name</th>
                            <th>Movement Ditailes</th>
                        </thead>
                        <tbody>
                            {this.state.movements.map(movement =>
                                <tr>
                                    <td>{movement.movementId}</td>
                                    <td>{movement.movementSum}</td>
                                    <td>{movement.movementName}</td>
                                    <td>
                                    <NavLink to={`/MovementMoreD/${this.props.movement.movementId}`}>
                                            <button>More Ditailes...</button>
                                        </NavLink>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
                <div>
                    <button onClick={() => { this.props.backMethod() }}>Back</button>
                </div>
            </div>
        );
    }
}



export default MovementD;