/*eslint-disable*/ //아래 경고창 없애주는 것
import { useState } from 'react';
import './App.css';
import React from 'react';
import Modal from './Component/Modal';

function App() {
  let [a, setA] = useState(['블로그 글 제목3','블로그 글 제목2','블로그 글 제목1']);
  let [like, setLike] = useState([0,0,0]);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0); //상태 저장
  

  return (
    <div className="App">
      <div className='black-nav'>
        <h4>blog</h4>
      </div>

      {/* <button onClick={()=>{
        let copy1 = [...a];
        copy1[0] = '하하하하하하';
        setA(copy1);
      }}>글수정</button> 
      <Modal /> */}
      
      {/* <button onClick={()=>{
        let copy2 = [...a];
        copy2.sort();
        setA(copy2);
      }}>가나다순</button> */}
{/* 
      <div className='list'>
        <h4>{a[0]}</h4><span onClick={()=>{setLike(like + 1)}}>👍</span> {like}
        <p>4월6일 발생</p>
      </div>
      <div className='list'>
        <h4>{a[1]}</h4>
        <p>4월6일 발생</p>
      </div>
      <div className='list'>
        <h4>{a[2]}</h4>
        <p>4월6일 발생</p>
      </div> */}

      {/* 이 아래 내용은 위에 있는 반복되는 내용을 map(반복문)을 사용해서 코드짠 것 */}
      {
          a.map(function(parm, i){ //useState의 배열
            return (
              <div className='list' key={i}>
              <h4 onClick={()=>{
                setTitle(i);
                setModal(modal == true ? modal = false : modal = true) //조건문(삼항연산자)
              }}>{a[i]}</h4><span onClick={()=>{
                let copyLike = [...like];
                copyLike[i] = copyLike[i] +1;
                setLike(copyLike)}}>💖</span>{like[i]}
                <p>4월12일 작성</p>
              </div>
              
            )
          })
        }
        {/*이 말은 App.js파일이 Modal.js파일의 부모라는 뜻*/}
        {/* 프롭스 */}
        {modal == true ? <Modal color="skyblue" name={a} title={title} /> : null}
        {/* 컴포넌트가 나타났다 사라졌다 */}
        {/* 모달이 참값이면 모달이 나타나고, 거짓이면 null을 해라*/}
    </div>
  );
}

export default App;
