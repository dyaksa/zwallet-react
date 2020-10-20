import React, { createRef, useEffect, useState } from "react";
import { iconSearch } from "../asset";
import Figure from "./Figure";
import { getUserByName } from "../../../services/user";
import { useSelector } from "react-redux";

const SearchBox = () => {
    const [users, setUsers] = useState([]);
    const {data} = useSelector((s) => s.Auth);
    const nameRef = createRef();

    useEffect(() => {
        getUserByName("", data.accessToken)
        .then(results => {
            setUsers(results.data.data);
        }).catch(err => {
            console.log(err);
        })
    },[]);

    const handleChange = (event) => {
        const name = nameRef.current.value;
        getUserByName(name, data.accessToken)
        .then(results => {
            setUsers(results.data.data);
        }).catch(err => {
            console.log(err);
        })
    }

    return (
        <>
            <h3 className="history__header mb-5">Search Receiver</h3>
                <div className="this__week">
                    <div className="input-group mb-5">
                        <div className="input-group-prepend">
                            <button type="submit" className="btn btn-link">
                                <img className="medium__icon" src={iconSearch} alt="search-icon"/>
                            </button>
                        </div>
                        <input ref={nameRef} onChange={handleChange}  type="text" placeholder="What're you searching for?" className="form-control border-0 bg-light"/>
                    </div>
                    <div>
                        {users.map((user,index) => {
                            return (<Figure key={user.id} name={`${user.firstName} ${user.lastName}`} phone={user.phone} photo={user.photo}/>);
                        })}
                    </div>
            </div>
        </>
    )
}

export default SearchBox;