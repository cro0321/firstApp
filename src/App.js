

//import뜻 ./App.css를 가져와서 쓰겠다~ 

//import 작명 form 파일위치(app 안에서 외부파일 이름 쳐주면( 예<Nav 해주면 import 자동으로 생성>후 <Nav />해주면  외부에서 작성된 js가 잘 들어가진다.)
import { useState } from 'react';
import './App.css';
// import Content from './components/Content';
import Nav from './components/Nav';
import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Main from './pages/Main';
import Notpage from './pages/Notpage';
// import Styled from './components/Styled';
//실질적으로 웹이 구동되는 원리는 가상돔때문이라 개발자도구를 켜서 root가 아닌 App부분을 봐줘야한다.

//p.33 컴포넌트는 funtion App을 빠져나와서 위나 아래에 써주기.p.36 컴포넌트 작성방법 




// function Content(props) {
//   //콘솔을 찍어보면 title이 두번 나올텐데 이건 보안때문이다 그래서 index.js에서   <React.StrictMode> </React.StrictMode>를 지워주면 해결됨
//   //object 형태로 콘솔에 나타날꺼임.

  
//   console.log(props)
//   let Title = ["쌍둥이 아기판다" , "쌍둥이 아기판다", "주토피아 동물 아카데미", "귀엽게 찰칵!"] 
//   let Desc =["스페셜 이벤트", "이름을 지어주세요", "판다는 곰이 맞을까?", "에버랜드 AR필터"]
//   // let Desc2 = [""]
//   return (  
//     //프래그넌트 문법 최상단 기준 <div></div>를 해주지 않아도 되고 꺽쇠만으로도 표현이 가능.<></>
//     <>
//   <div className='content-item'>
//   <img src="https://via.placeholder.com/320" alt="테스트" />
  
//   {/* 
//     배열형태로 넘어와서 0123이렇게 해주면 원하는 순서대로 해주기위해서  arrayNum ="숫자" 를해줌
//   <h3>{Title[0]}</h3>
//     <p>{Desc[0]}</p> */}
//     {/* p42. porps는 object형태로 넘어오고 그걸 출력해주려면 .aa .bb이런식으로 넘겨와줌 */}
//       {/* <h3>{props.title}</h3>
//     <p>{props.desc}</p>
//     <h2>{props.desc2}</h2> */}
//     {/*  props.arrayNum   <- Title[0] 과 비슷한데 파리미터.속성값을 해줬듯이 [배열값을 그렇게 넘겨온것] 그래서 변수명[배열값]으로 만들어준것*/}
//     <h3>{Title[props.arrayNum]}</h3>
//     <p>{Desc[props.arrayNum]}</p>
  
//   </div>
//   </>
// )
// }

function App() {

  //useState 쓰면 import자동작성됨/ 
  //react문법 변수를 써주고 [Name, b]의 뜻은 앞쪽은 useState("이미지정된값")의 이미지정된값이 들어가고 뒤에(b)는 변경할수있는 변수가 들어감. 문자열 불리언 숫자 배열 등 다 가능함 출력하려면 똑같이 {Name} 을 써주면된다.
  // let [title, setTitle] = useState(["쌍둥이 아기판다" , "쌍둥이 아기판다", "주토피아 동물 아카데미", "귀엽게 찰칵!"])

  // let [desc, setDesc] =  useState(["스페셜 이벤트", "이름을 지어주세요", "판다는 곰이 맞을까?", "에버랜드 AR필터"

  // ])


  
  //js문법 let Name = "박은성"; let b =""; 2개를 동시에 표현하려면 [Name, b] = [박은성, ""] 이렇게 표현해주는건데 

  //변수는 return위에 써줘야한다. 

 //return기본문법 리턴으로 남는값을 밖으로 내보내주는것
  return (
    <>
      <Nav />
     
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/about" element={<About/>}/>
        {/* NotFound는 무조건 맨 밑에 있어줘야함. */}
        <Route path="/portfolio" element={<Portfolio/>}/>
        <Route path="/*" element={<Notpage/>}/>
      </Routes>

      {/*
    //컴파일이 되기때문에 className을 써줘도 class로 자동으로 바뀌어진다.
 
    // <div className="App">
    //  
    
     변수 사용 하려면 {변수명}을 해준다. 변수는 className에도 써줄수 있고 태그에도 요소에도 써줄수 있다 
    //    속성에 변수를 써줄때는 작은 따옴표를 빼고 중괄호를 쓰고 변수명을 써준다. html안에서 style 직접작성시 1.{{}}중괄호 써준다(style태그에 한해서 중괄호를 한번더 열어줘야한다.) 2.카멜케이스로 써준다.
    //    <h3 className={Name} style={{color: "orange", backgroundColor:"skyblue"}}>Hello React {Name}</h3>
    //  


    //   <div className="content">
    //   <Content arrayNum ="0"/>
    //   <Content arrayNum ="1"/>
    //   <Content arrayNum ="2"/>
    //   <Content arrayNum ="3"/>
    //   </div>

     
    //컴포넌트 제작후 태그가 인식되어 랜더링 되는원리 이게 없었으면 배열 [0][1][2][3]으로 노가다 해줬어야함 p.38 똑같은 태그를 만들어주는것
    //p.42 props = 파라미터같은 개념 
     
    //    <div className='content'>
    //   <Content title="쌍둥이 아기판다" desc="스페셜 이벤트" desc2="테스트1"  arrayNum ="0"/>
    //   <Content title="쌍둥이 아기판다" desc="이름을 지어주세요" desc2="테스트2"  arrayNum ="1"/>
    //   <Content title="주토피아 동물 아카데미" desc="판다는 곰이 맞을까?" desc2="테스트3"  arrayNum ="2"/>
    //   <Content title="귀엽게 찰칵!" desc="에버랜드 AR필터" desc2="테스트4"  arrayNum ="3"/>
    //  </div> 
   
    //  같은게 또 필요하다면? 
  
    //    <Content title={title[0]} desc={desc[0]} desc2="테스트1"  arrayNum ="0"/>
    //   <Content title={title[1]} desc={desc[1]} desc2="테스트2"  arrayNum ="1"/>
    //   <Content title={title[2]} desc={desc[2]} desc2="테스트3"  arrayNum ="2"/>
    //   <Content title={title[3]} desc={desc[3]} desc2="테스트4"  arrayNum ="3"/>
    //   <div className="content">
    //   <Content arrayNum ="0"/>
    //   <Content arrayNum ="1"/>
    //   <Content arrayNum ="2"/>
    //   <Content arrayNum ="3"/>
    //   </div>
    //   {/* import 자동으로 당겨와주는거 쉽잖~ 꺽쇠 Styled 해주면됨 
    //   <Styled />
    // </div> 
    //js에선는let Name2 = "홍길동2" document.querySelector(".text").textContent = Name2를 하면 홍길동2는 잘 력되겠지만 Name은 출력이 안되지만 react에서는 원하는 곳에만 랜더링을 해주어서 바뀌게 됨
    //export defalult 이 function App이라는걸 내보내겠다~~~  
      */}
  
    </>
  );
}



 

export default App;
//  <Route path="/portfolio" element={<Portfolio/>}/>
