"use client";

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../features/userSlice";
import Button from "./Button";

const AddUser = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleAddUser = (e) => {

    e.preventDefault();
    dispatch(addUser({ name, email }));
    setName("");
    setEmail("");
  };

  return (
    <div className="w-full flex items-center justify-center mb-12 space-x-8">
      
 

        <div className="flex  space-x-8 ">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            className="border-gray-300 border-x-2 border-y-2 py-2 px-2"
          />
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="border-gray-300 border-x-2 border-y-2 py-2 px-2"
          />
        </div>

        <Button title='Add' handleClick={handleAddUser} styleContainer={"bg-black text-white px-4 py-2 "}/>
      </div>
    
  );
};

export default AddUser;
