import React from 'react'
import "./../Test.scss"
import { NavLink } from 'react-router-dom'
function Nav() {
  return (
<div className='nav'>
  <ul>
    
      <li><NavLink to="/">이용정보</NavLink></li>
      <li><NavLink to="/about">요금&amp;프로모션</NavLink></li>
      <li><NavLink to="/portfolio">즐길거리</NavLink></li>
      <li><a href="/">멤버십</a></li>
      <li><a href="/">에버랜드 더 알아보기</a></li>
  </ul>
</div>
  )
}
//Nav를 밖으로 꺼내겠다는 코드 이걸 
export default Nav


//단축키 rfce
