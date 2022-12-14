import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface IUser {
  id: string;
  name: string;
}

function ListPage() {
  const navi = useNavigate();
  const [stateListUser, setStateListUser] = useState<Array<IUser>>([]);

  useEffect(() => {
    getListUserApi();
  }, []);

  const gotoDetail = (id: string) => {
    console.log(id);
    navi("detail/" + id);
  };

  const handleDelete = (id: string) => {
    console.log('delete',id);
    const url = "https://63284e93a2e90dab7bdd0fd7.mockapi.io/api/v1/users/" + id;
    fetch(url, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((json) => {
        // Xử lý kết quả JSON ở đây
        console.log('delete success',json);
        // let arr = stateListUser.filter((user)=>user.id !== json.id)
        // setStateListUser(arr)
        // console.log(arr)
        getListUserApi();
      })
      .catch((error) => {
        // Nếu có lỗi
        console.error(error);
      });
  };

  const getListUserApi = () => {
    const url = "https://63284e93a2e90dab7bdd0fd7.mockapi.io/api/v1/users";
    fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((json) => {
        // Xử lý kết quả JSON ở đây
        // console.log(json);
        setStateListUser(json);
      })
      .catch((error) => {
        // Nếu có lỗi
        console.error(error);
      });
  };

  return (
    <table className="table table-dark table-striped-columns">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Name</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        {stateListUser?.map((user: IUser) => (
          <tr key={`item-user-${user.id}`}>
            <th scope="row">{user.id}</th>
            <td>{user.name}</td>
            <td>
              <button
                type="button"
                className="btn btn-success"
                onClick={() => gotoDetail(user.id)}
              >
                Detail
              </button>
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => handleDelete(user.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ListPage;
