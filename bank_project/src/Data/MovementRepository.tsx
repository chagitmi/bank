import productList from './MovementList';
import axios, { AxiosResponse } from 'axios';
import Movement from './Movement';

class MovementRepository {
    getAll(): Promise<AxiosResponse<Movement[]>>  {
        try {
            return axios.get<Movement[]>("MovementList");
        }
        catch (error) {
            console.log(error);
        }
    }
}
export default MovementRepository;