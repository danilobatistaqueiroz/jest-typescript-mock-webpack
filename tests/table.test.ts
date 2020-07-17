import UserTable from "../src/table";
import { User } from "../src/models";

test('table header', () => {
  const userTable = new UserTable()
  let users : User[] = [{id:"1",title:"george.bluth@reqres.in",body:"George",userId:1}];
  userTable.populate(users);
  expect(userTable.table.tHead.innerHTML).toBe('<tr><td>ID</td><td>email</td><td>First Name</td><td>Last Name</td><td>Avatar</td></tr>');
});

test('table body', () => {
  const userTable = new UserTable()
  let users : User[] = [{id:"1",title:"george.bluth@reqres.in",body:"George",userId:1}];
  userTable.populate(users);
  expect(userTable.tbody.innerHTML).toBe('<tr><td>1</td><td>george.bluth@reqres.in</td><td>George</td><td>1</td></tr>');
});

