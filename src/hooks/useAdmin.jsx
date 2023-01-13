import { isAdmin } from "@firebase/util";
import React from "react";

const useAdmin = (user) => {
  const [admin, setAdmin] = React.useState(false);
  React.useEffect(() => {
    const email = user?.email;
    if (email) {
      fetch(`http://localhost:8000/admin/${email}`, {
        method: "GET",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setAdmin(data.admin);
        });
    }
  }, [user]);
  return [admin];
};

export default useAdmin;
