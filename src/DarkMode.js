import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { MdDarkMode, MdOutlineDarkMode } from 'react-icons/md';


const DarkMode = ({onToggle, toggle}) => {
    //버튼 하나로 두가지 기능을 하게 해주는 onToggle
    const [time, setTime] = useState(new Date());
        //-----------------------------내장객체를 사용해서 시간 불러오기
        //useState : 상태 변화와 관련
        //useEffect : 사이드 이펙트와 관련된 것 -> 콜백함수형식

    useEffect(() => {
        const id = setInterval(() => {
            setTime(new Date());
            //상태가 계속 변하는것(내장객체로 불러온 시간)은 set함수에 넣어주기
        },1000);

        //계속 생성되는 것을 정리해줌
        return () => clearInterval(id);

    //계속 실행되지 않도록 빈 배열 []을 넣어줌        
    },[]);

    return (
        <Container>
            <HeaderWrapper>
                <h1>KIM HYEONJI</h1>

                {/* 두개의 버튼을 하나의 토글 버튼으로 만들기 -삼항연산자 사용 */}
                {!toggle ? (<DarkButton onClick={onToggle} />) : (<LightButton onClick={onToggle} />)}
            </HeaderWrapper>

            <DateTimer>{time.toLocaleDateString()}</DateTimer>
            <HourTimer>{time.toLocaleTimeString()}</HourTimer>
        </Container>
    );
};

const Container = styled.div`
    width: 100%;
    height: 100vh;
    font-size: 40px;
    background: ${(props) => props.theme.bgColor};
    color: ${(props) => props.theme.textColor};
`;

const HeaderWrapper = styled.header`
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    background-color: ${(props) => props.theme.headerColor};
    h1{
        color: ${(props) => props.theme.headerTextColor};
        font-size: 40px;
    }
`;

const DateTimer = styled.p`
    font-size: 150%;
    text-align: center;
    margin-top: 100px;
`;

const HourTimer = styled.p`
    font-size: 200%;
    text-align: center;
`;

//html 태그 이외의 스타일을 꾸며줄 때 소괄호()로 묶어서 사용
const DarkButton = styled(MdDarkMode)`
    cursor: pointer;
    color: ${(props) => props.theme.headerTextColor};
    font-size: 30px;
`;
const LightButton = styled(MdOutlineDarkMode)`
    cursor: pointer;
    color: ${(props) => props.theme.headerTextColor};
    font-size: 30px;
`;


export default DarkMode;
