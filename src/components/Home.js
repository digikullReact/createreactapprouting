import { Form } from 'antd';
import React from 'react'

import sum  from './Modules'  //default import of default export 
import {subtract,multiply,data} from "./Modules";  //importing non default exports

import MyInput from './MyInput';

const Home = () => {

  console.log(subtract());

  console.log(sum(2,3));

  const onFinishFailed=()=>{

  }
  return (
    <div>

   <MyInput  type={"email"} placeholder={"Enter Email"}/>

   <MyInput type={"password"} />

   <MyInput type={"number"} />

 

    </div>
  )
}

export default Home