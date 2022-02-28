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
import {Bookmark} from '@styled-icons/bootstrap/Bookmark'
import {ArrowIosDownward} from '@styled-icons/evaicons-solid/ArrowIosDownward'
import {UserCircle} from '@styled-icons/fa-regular/UserCircle'
import {Users} from '@styled-icons/heroicons-solid/Users'
import {Settings3} from '@styled-icons/remix-line/Settings3'
import {Call} from '@styled-icons/ionicons-outline/Call'
import {MoonOutline} from "@styled-icons/evaicons-outline/MoonOutline";
import {ToggleOff} from '@styled-icons/material-twotone/ToggleOff'
import {ToggleOn} from '@styled-icons/material-twotone/ToggleOn'
import {ArrowheadLeftOutline} from '@styled-icons/evaicons-outline/ArrowheadLeftOutline'

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


export const InnerMenu = styled.div`
    display: ${({menu})=>menu ? 'flex' : 'none'};
    flex-direction: column;
    position:absolute;
    top: 0;
    left: 0;
    z-index: 10;
    width: 300px;
    height: 100%;
    background: #17212B;
    border-right: 1px solid black;
    overflow: hidden;
`

export const InnerMenu_logo = styled.div`
    width: 100%;
    height: 150px;
    background: #276899;
`

export const Logo_img = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 65%;
    padding: 0 20px 0 25px;
    padding-top: 20px;
`

export const Personal_img = styled.img`
    width: 55px;
    height: 55px;
    border-radius: 50%;
    box-shadow: 1px 1px 16px 7px rgba(34, 60, 80, 0.3);
`

export const Bookmart_container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 35px;
    height: 35px;
    background-color: #185680;
    border-radius: 50%;
`

export const Bookmarkk = styled(Bookmark)`
    width: 16px;
    height: 16px;
    color: whitesmoke;
    font-weight: 600;
`


export const Logo_desc = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 35%;
    padding: 0 20px 10px 25px;
`

export const Logo_text = styled.div`

`

export const Logo_name = styled.div`
    font-size: ${({name})=> name ? '15px' : '12px'};
    color: whitesmoke;
    margin: 5px 0;
    font-weight: 500;
    letter-spacing: 1px;
`


export const ArrowIosDownwardd = styled(ArrowIosDownward)`
    width: 35px;
    height: 35px;
    color: whitesmoke;
    transform: rotate(${({rotate})=>rotate? '180deg' : '0deg'});
    
`


export const Arrow = styled.div`
    display: ${({visibile})=>visibile ? 'flex' : 'none'};
    flex-direction: column;
    width: 100%;
    height: 130px;
    background: #17212B;
    border-bottom: 2px solid #242A2E;
    padding: 7px 0;
    padding-top: 10px;
`

export const Inner_Arrow_container = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 49%;
    padding: 0 20px 0 25px;
    :hover{
        background-color: #313B43;
        .usercircle{
            color: whitesmoke;
        }
    }

`

export const Inner_Arrow_img_container = styled.div`
    position: relative;
    display: flex;
    width: 45px;
    margin-right: 20px;
`

export const Inner_Arrow_img = styled.img`
    width: 37px;
    height: 37px;
    border-radius: 50%;
    box-shadow: 1px 1px 16px 7px rgba(34, 60, 80, 0.3);

`

export const Inner_Arrow_Checked = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: -7px;
    right: -1px;
    width: 22px;
    height: 22px;
    background-color: #276899;
    border-radius: 50%;
    border: 3px solid #282E33;
`
export const Arrow_Check = styled.div`
    width: 10px;
    height: 7px;
    border-left: 3px solid whitesmoke;
    border-bottom: 3px solid whitesmoke;
    border-bottom-left-radius: 3px;
    transform: rotate(310deg);
`

export const UserCirclee = styled(UserCircle)`
    width: 28px;
    height: 28px;
    color: #808080;
    margin-right: 35px;
    margin-left: 5px;
`



export const Settings = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    /* height: calc(100% - 130px - 150px); */
    padding: 10px 0;
`

export const Setting = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 55px;
    padding: 0 30px;
    :hover{
        background: #313B43;
        .color{
            color: white;
        }
    }

`

export const Userss = styled(Users)`
    width: 30px;
    height: 30px;
    color: #808080;
`

export const Setting_title = styled.div`
    font-size: 17px;
    color: whitesmoke;
    margin-left: 30px;
`

export const Settings44 = styled(Settings3)`
    width: 30px;
    height: 30px;
    color: #808080;
`

export const Contact = styled(User)`
    width: 30px;
    height: 30px;
    color: #808080;
`

export const Calls= styled(Call)`
    width: 30px;
    height: 30px;
    color: #808080;
`

export const MoonOutlines = styled(MoonOutline)`
    width: 30px;
    height: 30px;
    color: #808080;
`

export const ToggleOfff= styled(ToggleOff)`
    width: 45px;
    height: 45px;
    color: #276899;
    margin-left: 45px;  
`

export const ToggleOnn= styled(ToggleOn)`
    width: 45px;
    height: 45px;
    color: white;
    margin-left: 45px;  
`

export const Setting_con = styled.div`
    width: 100%;
`


export const About_telegram = styled.div`
    position: fixed;
    bottom: 15px;
    left: 20px;

`

export const About_telegram_title = styled.div`
    font-size: 14px;
    color: #82868A;
    margin-bottom: 7px;
    letter-spacing: 1px;

`

export const About_telegram_version = styled.div`
    font-size: 12px;
    color: #82868A;
    letter-spacing: 0.9px;
`


export const Arrow_close = styled(ArrowheadLeftOutline)`
    width: 30px;
    height: 30px;
    position: absolute;
    right: 10px;
    bottom: 10px;
    color: #185680;
    cursor: pointer;
    transition: all .5s ease;
    :hover{
        transform: scale(0.77);
        transform: translateX(-3px)
    }
    
`