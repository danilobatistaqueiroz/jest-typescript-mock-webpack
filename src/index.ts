import axios from 'axios';
import UserTable from './table';
import {sum} from './sum';

const userTable = new UserTable()
axios.get('https://reqres.in/api/users')
    .then(response => {
        userTable.populate(response.data.data);
    });

console.log(sum(1,2));