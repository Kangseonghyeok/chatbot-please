import React from "react";
import { Typography, Icon } from 'antd';
import Chatbot from './Chatbot/Chatbot';
const { Title } = Typography;

function App() {
  return (
    <div>
       <nav>
        <div class="inner">
          <div class="nav-container">
           <h1  h1 class="nav-title">
          <a href="http://127.0.0.1:5500/famous-dist-main/front/main.html"><i class="fa fa-arrow-left"></i> 돌아가기</a>
            </h1>
            </div>
        </div>
      </nav>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
        <Title level={2} >하르방 챗봇&nbsp;<Icon type="robot" /></Title>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
       
        <Chatbot />


      </div>
    </div>
  )
}

export default App
