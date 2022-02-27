
import styled from "styled-components";

export const Container = styled.div`
    width: 450px;
    height: 100%;
    background-color: #17212B;
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
    background: #242F3D;
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
    overflow-y: ${({scroll})=> scroll ? 'auto' : 'hidden'};
    ::-webkit-scrollbar{
        width: 3px;
    }

    ::-webkit-scrollbar-track{
        background-color: #666;
        border-radius: 5px;
        box-shadow: inset 0 0 10px rgba(0,0,0,0.25);
    }

    ::-webkit-scrollbar-thumb{
        border-radius: 5px;
        background-color: #888;
        
    }

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