
// import { useState } from "react";
// import "./App.css";
// import { CustomLiTag } from "./components/CustomLiTag";

// const App = () => {
//   let [inputText, setInputText] = useState("");
//   let [todos, setTodos] = useState([]);

//   const log = (value) => {
//     setInputText(value);
//   };
//   // console.log(inputText)

//   const handlerClick = () => {
//     setTodos([...todos, inputText]);
//     setInputText("");
//   };

//    return (
//     <div>
//       <input value={inputText} onChange={(event) => {
//         log(event.target.value)
//       }} placeholder="blabla" />
//       <button onClick={handlerClick}>add</button>
//       <ul>
//         {todos.map((todo, index) => (
//           <CustomLiTag index={index} todos={todos} todo={todo} setTodos={setTodos} />
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;
 

//................//




// import { useState } from "react";
// import "./App.css";


// const App = () => {
//   let [text, setText] = useState("");


//   const onChangeHandler = (event) => setText(event.target.value)
//   const oguulber =" wanna live the stories I write, see the whole world with my own eyes, take the unknown trail and hear the songs the night sings. I wanna feel the flame when it burns, wanna feel the pain when it hurts, take the unknown trail and hear the songs the night sings."
  
  


//   let count = 0;
//   let wcount =0;

//  for (let i = 0; i <text.length; i++) {
//   if(text[i]!== " "){
//     if(text[i-1] ===" " || i ===0 ){ 
//       wcount ++;

//     }
//     count++;
//   } 

 
  
//  }

 

//    return (
//     <div>
//       <p>{oguulber}</p>
//      <input type="text" onChange={onChangeHandler}/>

//       <p>Тэмдэгтийн тоо:{count}</p>
//       <p>Үгийн тоо:{wcount}</p>
     
   
//     </div>
//   );
// }

// export default App;
 



//..............//


import { useState } from "react";
import "./App.css";


const App = () => {
  let [data, setData] = useState( ['Python', 'Ruby', 'JavaScript', 'C++', 'Java', 'C#', 'Swift', 'Kotlin', 'Go', 'PHP']);




  const select = ()=>{
    
    for (let index = 0; index < data.length; index++) {  
    }

  }

   return (
    <div>
     <input type="text"  onChange={select} placeholder="Select"/>
    </div>
  );
}

export default App;