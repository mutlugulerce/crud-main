"use client"

import React, {useEffect} from "react";
import Users from "@/components/Users";
import AddUser from "@/components/AddUser";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "@/features/userSlice";

export default function Home() {
  const dispatch = useDispatch();
  const { users, loading } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);
  return (
    <div className="flex  flex-col  justify-center  w-full h-screen">

      <div className="flex flex-col items-center justify-center mb-8 space-y-6">
        <h2> Create New User </h2>

        <AddUser />

      </div>
 
      {users.map((user) => {

        const {id,name,email} = user
        return (
    <Users 
      id= {id}
      key={id}
      name={name}
      email={email}
    /> )
        })}
  
    </div>
  );
}
