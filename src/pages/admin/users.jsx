import { collection, getDocs, query } from "firebase/firestore";
import { Fragment, useState } from "react";
import { useQuery } from "react-query";
import { db } from "../../firebase";

const Users = () => {
  const [users, setUsers] = useState([]);

  useQuery("users", () => {
    const q = query(collection(db, "Users"));
    getDocs(q).then((querySnapshot) => {
      let users = [];
      querySnapshot.forEach((doc) => {
        users.push(doc.data());
      });
      setUsers(users);
    });
  });

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
              <td className="px-6 py-4">{user.dob}</td>
              <td className="px-6 py-4">{user.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default Users;
