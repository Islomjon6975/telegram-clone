
import styled from "styled-components";

export const Container = styled.div`
    width: 450px;
    height: 100%;
    background-color: #282E33;
`

export const Chat = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 60px;
    padding: 12px 12px;
    box-sizing: border-box;

`

export const Search = styled.input`
    width: 100%;
    height: 100%;
    background: #3D444B;
    border-radius: 5px;
    outline: none;
    border: none;
    padding: 0 15px;
    color: whitesmoke;
    font-size: 17px;
`

export const ChatsContainer = styled.div`
    width: 100%;
    height: calc(100vh - 90px);
    overflow-y: auto;
`

export const Chatss = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 65px;
    box-sizing: border-box;
    padding: 10px 12px;

`

export const Image = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
`

export const SmsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: calc(100% - 45px - 80px);
    height: 100%;
    margin: 0 15px;
`

export const NameOfUser = styled.div`
    font-size: 16px;
    font-weight: 600;
    color: whitesmoke;
`

export const MessageOfUser = styled.div`
    font-size: 15px;
    color: #888;
`

export const Timer = styled.div`
    height: 100%;
`

export const Time = styled.div`
    font-size: 14px;
    color: #888;
`