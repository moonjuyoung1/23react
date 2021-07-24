import React from "react";
import "./Login.scss";
import { Link, withRouter } from 'react-router-dom' ;


class Login extends React.Component{
    
    goToMain = () => {
       this.props.history.push('/Main-Juyoung');
    }




    render(){
        return (
            <main className="Login">
                <div className="loginDisplay">
                    <h1 className="title">westagram</h1>
                    <form className="inputWrap">
                        <input type="text" id="inputWrapId" placeholder="전화번호, 사용자 이름 또는 이메일"/>
                        <input type="password" id="inputWrapPassword" placeholder="비밀번호"/>
                        <button onClick = {this.goToMain} id="inputWrapButton">로그인</button>
                    </form>
                    <a href="#" className="bottom">비밀번호를 잊으셨나요?</a>
                </div>
                <style>
                    @import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');
                </style>

            </main>            
        );
    }
}


export default withRouter(Login);