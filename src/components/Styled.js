import React from 'react'
import { styled } from 'styled-components'
//고유값으로 사용 내가 사용할 실제 이름  = styled 내가 사용할 요소는 div ``백틱 해준다. styled.span span태그에 스타일적용 stlyed.img img에 적용~
const Style = styled.div `
background-color: powderblue;
font-size:3rem;

//scss문법
ul{
  max-width: 1200px;  
  margin: 0 auto;
  display: flex;
  justify-content: space-between; 
}

`
// const StyledUl = styled.div


function Styled() {
    let Menu = ["메뉴1", "메뉴2", "메뉴3", "메뉴4", "메뉴5"];
  return (
    // <Style></Style>를 적용해주고 그 사이에 쓴다.
    <Style>
        <ul>
          
            {
              /*20230829반복문 
              foreach이유없숴 그냥 안돌아감 map으로 꼭 써주기 i가 필요없는 경우에 쓰게되면 경고가 뜨기 때문에 i없애주거나
               f12에 오류가 뜰건데 react-jsx-dev-runtime.development.js:150 Warning: Each child in a list should have a unique "key" prop. key값이 필요하다는 오류임. li가 반복되는중인데 고유값이 없으면 중복인지 어떻게 아니~ key값 넣어줘서 고유값인지 확인해주솸...  key={i} */
                Menu.map((el, i)=>{
                    console.log(el)
                    // return...wow
                    return(
                    <li className='text-center' key={i}>{el}</li>
                    )
                })
            }
        </ul> 
    </Style>
  )
}

export default Styled