import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {MdDeleteForever} from 'react-icons/all.js'
import { removeUser } from '../store/slices/UserSlice'

const DisplayUsers = () => {

    const dispatch = useDispatch();

    const data = useSelector((state) => {
        return state.users;
    })

    const deleteUser = (id) => {
        dispatch(removeUser(id))
    }

  return (
    <>
    {
        data.map((curElem, id) => {
            return <li key={id}>
                {curElem}
                <button className='btn-delete' onClick={() => deleteUser(id)}>
                    <MdDeleteForever className="delete-icon" />
                </button>
            </li>
        })
    }
    </>
  )
}

export default DisplayUsers