import React from "react";
import { toast } from "react-toastify";

const CustomTable = ({ user, refetch }) => {
  const { email, role } = user;

  const makeAdmin = () => {
    fetch(`http://localhost:8000/user/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 403) {
          toast.error("Failed to make an admin");
        }
        return res.json();
      })
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          toast.success("Successfully made an admin");
        }
      });
  };
  return (
    <tr>
      <th>1</th>
      <td>{email}</td>
      <td>
        <button
          disabled={role === "admin" && true}
          onClick={makeAdmin}
          className="btn btn-secondary text-neutral uppercase bg-gradient-to-r from-secondary to-primary"
        >
          {`${role === "admin" ? "Already Admin" : "Make Admin"}`}
        </button>
      </td>
      <td>
        <button className="btn btn-error text-neutral uppercase bg-error">
          remove user
        </button>
      </td>
    </tr>
  );
};

export default CustomTable;
