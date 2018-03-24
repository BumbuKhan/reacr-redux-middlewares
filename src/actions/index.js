import axios from 'axios';
import {FETCH_USERS} from './types';

export function fetchUser() {
    const requiest = axios.get('https://jsonplaceholder.typicode.com/users');

    return {
        type: FETCH_USERS,
        payload: requiest
    };
}
