import { Fragment, useState } from "react";

const Users = () => {
  const [users, setUsers] = useState([
    {
      email: "John Doe",
      gender: "male",
      dateofBirth: "12/12/2021",
      category: "Contributor",
    },
    {
      email: "John Doe",
      gender: "male",
      dateofBirth: "12/12/2021",
      category: "Contributor",
    },
    {
      email: "John Doe",
      gender: "male",
      dateofBirth: "12/12/2021",
      category: "Contributor",
    },
  ]);

  return (
    <Fragment>
      <table className="w-full text-left text-gray">
        <thead className="text-black font-extrabold">
          <tr>
            <th scope="col" className="px-6 py-3">
              Email
            </th>
            <th scope="col" className="px-6 py-3">
              Gender
            </th>
            <th scope="col" className="px-6 py-3">
              Date of Birth
            </th>
            <th scope="col" className="px-6 py-3">
              Category
            </th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user, index) => (
            <tr className="border-b border-b-grayish text-black">
              <td className="px-6 py-4">{user.email}</td>
              <td className="px-6 py-4">{user.gender}</td>
              <td className="px-6 py-4">{user.dateofBirth}</td>
              <td className="px-6 py-4">{user.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default Users;
