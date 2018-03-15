import {FETCH_USERS} from './types';

export function fetchUser() {
  const users = [
    {
      id: 1,
      name: 'Gurban',
      company: 'Professional IT',
      email: 'qurban@profit.az'
    },
    {
      id: 2,
      name: 'Nuraddin',
      company: 'Carlsberg Baku',
      email: 'nuraddin@Carlsberg.az'
    }
  ];

  return {
    type: FETCH_USERS,
    payload: users
  };
}
