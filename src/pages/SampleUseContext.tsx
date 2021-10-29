import React, { createContext, useContext, useEffect, useState } from 'react'
import { UserInfo, UserHandler } from '../interfaces/UserInfo'

const userCtx = createContext<Partial<UserHandler>>({})

function SampleUseContext() {
  const sampleUser: UserInfo = { firstname: 'Paras', lastname: 'Dalal' }
  const [currUser, setCurrUser] = useState<UserInfo>(sampleUser)
  return (
    <userCtx.Provider value={{ user: currUser, setUser: setCurrUser }}>
      <Intermediate />
      <br />
      <UserForm />
    </userCtx.Provider>
  )
}

function Intermediate() {
  return (
    <div>
      <DisplayUser />
    </div>
  )
}

function DisplayUser() {
  const currUserHandler = useContext(userCtx)
  return (
    <div>
      <div>First Name: {currUserHandler?.user?.firstname}</div>
      <br />
      <div>Last Name: {currUserHandler?.user?.lastname}</div>
      <button
        onClick={() => {
          if (currUserHandler?.setUser) {
            currUserHandler?.setUser({ firstname: 'Test', lastname: 'New' })
          }
        }}
      >
        Change
      </button>
    </div>
  )
}

function UserForm() {
  const currUserHandler = useContext(userCtx)
  const [f, setF] = useState<string>(
    currUserHandler?.user?.firstname === undefined ? '' : currUserHandler?.user?.firstname
  )
  const [l, setL] = useState(
    currUserHandler?.user?.lastname === undefined ? '' : currUserHandler?.user?.lastname
  )
  useEffect(() => {
    setF(currUserHandler?.user?.firstname === undefined ? '' : currUserHandler?.user?.firstname)
    setL(currUserHandler?.user?.lastname === undefined ? '' : currUserHandler?.user?.lastname)
  }, [currUserHandler?.user?.firstname, currUserHandler?.user?.lastname])
  function onClk(e: React.SyntheticEvent) {
    e.preventDefault()
    if (currUserHandler?.setUser) {
      currUserHandler?.setUser({ firstname: f, lastname: l })
    }
  }
  return (
    <form>
      <label>First Name:</label>
      <input
        type="text"
        id="first"
        value={f}
        onChange={(e: React.FormEvent<HTMLInputElement>) => {
          setF(e.currentTarget.value)
        }}
      ></input>
      <br />
      <label>Last Name:</label>
      <input
        type="text"
        id="last"
        value={l}
        onChange={(e: React.FormEvent<HTMLInputElement>) => {
          setL(e.currentTarget.value)
        }}
      ></input>
      <button
        onClick={(e) => {
          onClk(e)
        }}
      >
        Submit
      </button>
    </form>
  )
}
export default SampleUseContext
