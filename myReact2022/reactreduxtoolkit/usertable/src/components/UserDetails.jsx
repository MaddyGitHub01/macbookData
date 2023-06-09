import React from 'react'
import DeleteAlluser from './DeleteAlluser'
import styled from 'styled-components'
import fakeUserData from '../api/index'
import {useDispatch} from 'react-redux'
import { addUser } from '../store/slices/UserSlice'
import DisplayUsers from '../components/DisplayUsers'

const UserDetails = () => {

    const dispatch = useDispatch();

    const addNewUser = (userdata) => {
        console.log(userdata);
        dispatch(addUser(userdata));
    }

  return (
    <Wrapper>
    <div className='content'>
        <div className='admin-table'>
            <div className="admin-subtitle">List of user Details</div>
            <button className='btn add-btn' onClick={() => addNewUser(fakeUserData())}>Add New Users</button>
        </div>
        <ul>
            <DisplayUsers/>
        </ul>
        <hr/>
        <DeleteAlluser/>
    </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  margin: 1rem 3.2rem;
  .content ul {
    list-style-type: none !important;
    display: flex;
    flex-direction: column;
  }
  h3 {
    margin: 0;
  }
  .admin-table {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 4rem 0;
  }
  .admin-subtitle {
    font-size: 3.2rem;
  }
  .delete-btn {
    background-color: transparent;
    border: none;
  }
  .delete-icon {
    font-size: 2.6rem;
    color: #f12711;
    filter: drop-shadow(0.2rem 0.2rem 0.5rem rgb(255 0 0 / 0.2));
    cursor: pointer;
  }
  @media screen and (max-width: 998px) {
    .admin-subtitle {
      margin-bottom: 1.6rem;
    }
  }
`;

export default UserDetails