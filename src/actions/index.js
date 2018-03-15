import {FETCH_USER} from './types';

export function fetchUser() {
  const users = [
    {
      id: 1
      name: 'Gurban',
      company: 'Professional IT',
      email: 'qurban@profit.az'
    },
    {
      id: 2
      name: 'Nuraddin',
      company: 'Carlsberg Baku',
      email: 'nuraddin@alkaw.com'
    }
  ];

  return {
    type: FETCH_USER,
    payload: users
  };
}
