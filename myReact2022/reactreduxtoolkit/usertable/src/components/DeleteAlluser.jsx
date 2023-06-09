import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteUsers } from '../store/slices/UserSlice'
import styled from 'styled-components'

const DeleteAlluser = () => {

  const dispatch = useDispatch();

  const deleteAll = () => {
    dispatch(deleteUsers());
  }

  return (
    <Wrapper>
    <button className='btn clear-btn' onClick={deleteAll}>Clear users</button>
    </Wrapper>
  )
}

const Wrapper = styled.section`
.clear-btn{
  text-transform : capitalize;
  background-color : #db338a;
  margin-top : 2rem;
}
`

export default DeleteAlluser