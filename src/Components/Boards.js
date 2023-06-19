import React, { useState } from 'react'
import { BoardCards } from './BoardCards'
import '../style/boardCard.css'
import * as postReducer from "../redux/posts/post.reducer"
import { useSelector } from 'react-redux'


export default function Boards() {
  let boardsData = useSelector(state => state[postReducer.postsFeatureKey])
  let {boards} = boardsData
  

  return (
    <>
      <div className="container">
        <div className='d-flex '>
        <h3 className="text center my-3 m-3 title ">My Boards</h3>
        
        </div>
        <div className='row'>

          {
            boards && 
            boards.map((element) => {
                 return(
                  <div className='col-md-4 m-1'>
                  <BoardCards boardCard = {element}/>
                </div>
                 )
            })
          }
          
        </div>
      </div>
    </>
  )
}
