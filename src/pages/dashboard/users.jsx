import { useQuery } from "@tanstack/react-query";
import React from "react";
import CustomTable from "../../shared/customTable";
import Loading from "../../shared/loading";

const AllUsers = () => {
  const {
    data: userData = [],
    isLoading,
    refetch,
  } = useQuery(["users"], () =>
    fetch(`http://localhost:8000/user`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  //TODO Video start by 75-7
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <h2 className="text-2xl py-3">All Users : {userData?.length}</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>Make</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {userData?.map((user) => (
              <CustomTable key={user?._id} user={user} refetch={refetch} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
