import React, { useState } from 'react'
//Content.js에서 css를 쓰고싶으면 직접 써준다. import "./../App.css"

function Content(props) {
  //p.65~72 useState값을 가져와서 수정해주는 내용
    //state 값으로 넘겨줬기 때문에 주석 처리 해둔거임 ㅇㅇ let Title = ["쌍둥이 아기판다" , "쌍둥이 아기판다", "주토피아 동물 아카데미", "귀엽게 찰칵!"] 
    //   let Desc =["스페셜 이벤트", "이름을 지어주세요", "판다는 곰이 맞을까?", "에버랜드 AR필터"]
      //setGood 사용법 setGood을 써주고(변경값)을써준다
      //let [state, ] setGood으로 값이 바뀌어지면 useState(0)의 값은 사라진다 -> 재랜더링 된다.
      let [title, setTitle] = useState(["쌍둥이 아기판다" , "쌍둥이 아기판다", "주토피아 동물 아카데미", "귀엽게 찰칵!"])

  let [desc, setDesc] =  useState(["스페셜 이벤트", "이름을 지어주세요", "판다는 곰이 맞을까?", "에버랜드 AR필터"

])
      let [good, setGood] = useState(0)

    function goodFun() {
        /*react에서는 ++js처럼 증감이 안됨 그래서 원래 값(good)을 가져온 뒤에 변경을 해준다. ※state값은 직접적으로 바꿔줄수 없다. 딱 한번만 바뀌기 때문에.
        setGood(100)하면 100으로 바뀌고 고정임*/
       setGood(good+1)
    }

    function Change() {
      // let copy = title 이렇게 하면 let [title, setTitle] = useState(["쌍둥이 아기판다" , "쌍둥이 아기판다", "주토피아 동물 아카데미", "귀엽게 찰칵!"])이 값을 그대로 가져온거지 새로운 배열? 값? 이 아님 그래서
      //... []의 배열을 없애고([]호를 벗겨내고) 안에 "" 만 나오게해서 let copy에서 다시 []를 만들어서 배열 만들어줌...? huh
      let copy = [...title]
      copy[0] = "쌍둥이 아기판다77"
      setTitle(copy)

      let copy2 = [...desc]
      copy2[1] = "푸바오 "
      setDesc(copy2)
    }
    //클릭했을때 모달창이 띄워줘야함.
    let [modalChk, setModalChk] = useState(false);

    function Modal(){

    //modalChk값이 false라면 true를 출력 아니라면 false
    // modalChk === false ? setModalChk(true) : setModalChk(false) 
    //! ->참이면 거짓 거짓이면 참 ~가 아니라면이니까 modalChk 의 true false의 반대로 setModalChk가 움직여주면 되는것...ㅜㅡㅜ
    setModalChk(!modalChk)
    }
    
  return (
    <>
    <div className='content-item'>
    <img   onClick={Modal} src="https://via.placeholder.com/320" alt="테스트" />
      {/* <h3>{Title[props.arrayNum]}</h3>
      <p>{Desc[props.arrayNum]}</p> */}
        {/* <h3>{title[props.title]}</h3>
      <p>{desc[props.desc]}</p> */}
         <h3 className='font-bold text-2xl my-1 text-green-500 bg-slate-500'>{title[props.arrayNum]}</h3>
      <p>{desc[props.arrayNum]}</p>
      {/* onClick은 함수를 써줘야한다. 함수뒤에() 붙이게 되면 다 바로 실행되기 때문에 ()빼주고실행해줘야함.*/}
      <p onClick={goodFun}>👍 {good}</p>
      <button onClick={Change}>수정</button>
    </div>
    
    {/*  css상에서 display none 필요없이 체크된 변수값이 바뀌어지는것
    // (modalChk === true ?  <div className="window"></div> : null) 
    //modal이 false일때 true로 바꿔주는거고 window가 true일때  modal을 false로 바꿔주는것 */ 

    //&&모두 참일때 modalChk가 참이고 (window 참생략인 넉김)
    // 둘다 참이라면 true &&  값 자체가 true일때 넘어가서 window를 나타내 준다. 
    (modalChk === true && <div className="window" onClick ={Modal}></div>)
    }
    </>
  )
}

export default Content

//단축키 rfce

/*
function Content2(props) {
    let Title2 = ["내 제휴" , "편하고 여유있게", "간편하고 편리하게", "스마트 줄서기"] 
      let Desc2 =["할인카드 조회 서비스", "모바일 오더", "모바일 기프트카드", "이용가이드"]
  return (
    <>
    <div className='content-item'>
    <img src="https://via.placeholder.com/320" alt="테스트" />
      <h3>{Title[props.arrayNum]}</h3>
      <p>{Desc[props.arrayNum]}</p>
    </div>
    </>
  )
}
*/

