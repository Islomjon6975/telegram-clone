import styled, {css} from "styled-components";

import {Menu} from '@styled-icons/entypo/Menu'
import {Chat} from '@styled-icons/bootstrap/Chat'
import {User} from '@styled-icons/boxicons-regular/User'
import {MessageRounded} from '@styled-icons/boxicons-regular/MessageRounded'
import {EditAlt} from '@styled-icons/boxicons-regular/EditAlt'
import {ChatFill} from '@styled-icons/bootstrap/ChatFill'
import {User3} from '@styled-icons/remix-fill/User3'
import {Close} from '@styled-icons/evaicons-solid/Close'
import {TrashAlt} from '@styled-icons/boxicons-regular/TrashAlt'
import {FolderOutline} from '@styled-icons/zondicons/FolderOutline'

export const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 70px;
    height: 100%;
    background-color: ${({color})=>color==='createFolder'? '#0C1116' : '#0E1621'};
`

const common = css`
    width: 27px;
    height: 27px;
    color: #758B9D;
    margin: 10px 0;
    
`

export const Menuu = styled(Menu)`
    ${common}
`


export const Chatt = styled(MessageRounded)`
    ${common}
    width: 37px;
    height: 37px;
`

export const ChatFilll = styled(ChatFill)`
    ${common}
    color:#5EB4F6 ;
    width: 30px;
    height: 30px;
`


export const Userr = styled(User)`
    ${common}
    width: ${({size})=> size==="37px" ? '37px' : '27px'};
    height: ${({size})=> size==="37px" ? '37px' : '27px'};
    :hover{
        color: ${({size})=> size==="37px" ? '#758B9D' : '#fff'};
    }
`

export const User33 = styled(User3)`
    ${common}
    color:#5EB4F6 ;
    width: 37px;
    height: 37px;
`

export const MessageRoundedd = styled(MessageRounded)`
    ${common}
    width: ${({size})=> size==="37px" ? '37px' : '27px'};
    height: ${({size})=> size==="37px" ? '37px' : '27px'};
    :hover{
        color: ${({size})=> size==="25px" ? '#fff' : '#758B9D'};
    }
`
export const EditAltt = styled(EditAlt)`
    ${common}
    width: 37px;
    height: 37px;
    color: ${({color})=>color==="tort" ? '#5EB4F6' : null};
`

export const IconsContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 5px 0;
    background: ${({color})=>color? '#25303E' : '#0E1621'};
`

const chat = css`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 40%;
    background: #5EB4F6;
    color: #fff;
    font-size: 10px;
    font-weight: 700;
    width: 20px;
    height: 17px;
    border: 2px solid #25303E;
`

export const ChatCount = styled.div`
    ${chat}
    position: absolute;
    top: 14px;
    left: 35px;
`
export const IconsTitle = styled.div`
    font-size: ${({size})=> size==='14px' ? '14px' : '12px'};
    color: ${({size})=> size==='14px' ? '#fff' : '#758B9D'} ;
    font-weight:${({size})=> size==='14px' ? '600' : '550'};

`

export const EditPersonal = styled.div`
    display: ${({toggle})=>toggle? 'flex': 'none'};
    flex-direction: column;
    position: absolute;
    top: 30px;
    left: 600px;
    width: 400px;
    height: 350px;
    border-radius: 3px;
    background: ${({color})=>color==='createFolder'? '#0C1116' : '#17212B'}; 
`

export const FolderContainer = styled.div`
    display: ${({toggle})=>toggle==='false'? 'none': 'flex'};
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 60px;
    border-bottom: 1px solid #070B11;
    padding: 20px 20px;
`

export const Folder = styled.div`
    font-size: 20px;
    color: ${({color})=>color==='createFolder'? '#767676' : '#fff'} ;
    font-weight: 600;
`

export const Closee = styled(Close)`
    width: 25px;
    height: 25px;
    color: #737E87;
    :hover{
        color: #fff;
    }
`

export const MyFolder = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 17px;
    color: #03bafc;
    width: 100%;
    height: 50px;
    padding: 20px 20px;
    :hover{
        background: ${({myFolder})=> myFolder && 'rgba(115, 126, 135, 0.1)'};
    }
    
`

export const MyFolderIcons = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 50px;
    padding: 0 20px;
    margin: 5px 0;
    :hover{
        background: rgba(115, 126, 135, 0.1);
    }
`

export const ChatsCount = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 18px;
`

export const ChatCountt = styled.div`
    font-size: 14px;
    font-weight: 500;
    color: #737E87;
    margin-top:${({padding})=>padding==='20px' ? '15px' : '5px'};
    padding: 0 ${({padding})=>padding==='20px' ? '20px' : '0px'};
`

export const TrashAltt = styled(TrashAlt)`
    width: 27px;
    height: 27px;
    color:#737E87;
    :hover{
        color: #fff;
    }
    margin-left: auto;
    margin-right: 12px;
`

export const CreateFolder = styled.div`
    display:${({toggle})=>toggle ? 'flex' : 'none'};
    flex-direction: column;
    position: absolute;
    position: absolute;
    top: 85px;
    left: 638px;
    width: 325px;
    height: 450px;
    background: #17212B;
    border-radius: 3px;
`

export const NewFolder = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 50px;
    font-size: 20px;
    font-weight: 500;
    color: whitesmoke;
    padding: 20px 25px;
`

export const InputContainer = styled.div`
    width: 100%;
    height: 50px;
    padding: 5px 25px;
    margin-bottom: 20px;
`

export const FolderName = styled.div`
    font-size: 15px;
    color: #03bafc;
    font-weight: 550;
`

export const FolderPosition = styled.div`
    position: relative
`

export const InputFolder = styled.input`
    width: 100%;
    height: 30px;
    outline: none;
    border: none;
    border-bottom: 2px solid #03bafc;
    background: transparent;
    color: whitesmoke;
    font-size: 17px;
    padding-right: 35px;
`

export const Folderrr = styled(FolderOutline)`
    position: absolute;
    right: 1px;
    width: 23px;
    height: 23px;
    color: #737E87;

`

export const IncludedChats = styled.div`
    font-size: 16px;
    color: #03bafc;
    font-weight: 500;
    padding: 13px 20px;

`

export const AddChats = styled.div`
    font-size: 16px;
    color: #03bafc;
    font-weight: 500;
    width: 100%;
    padding: 8px 20px;
    :hover{
        background: rgba(115, 126, 135, 0.1);
    }
`

export const ChooseTypes = styled.div`
    font-size: 14px;
    font-weight: 500;
    color: #737E87;
    padding: 8px 20px;
`

export const Buttons = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
    
`

export const Button = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    color: #03bafc;
    font-weight: 500;
    width: 80px;
    height: 35px;
    margin: 0 8px;
    border-radius: 8px;
    :hover{
        background: rgba(115, 126, 135, 0.1);
    }
    :active{
        background: rgba(115, 126, 135, 0.2);
    }
`

export const Line = styled.div`
    width: 100%;
    height: 10px;
    padding: 5px 0;
    background: red;
    margin-top: 5px;
    background: rgba(115, 126, 135, 0.1)
`