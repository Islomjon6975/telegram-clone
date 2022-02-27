import styled from "styled-components";

import {Close} from '@styled-icons/evaicons-solid/Close'
import {Minus} from '@styled-icons/boxicons-regular/Minus'
import {MinusBack} from '@styled-icons/boxicons-regular/MinusBack'


export const Container = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    height: 30px;
    background: #1F2936;
`

export const Closee = styled(Close)`
    width: 30px;
    height: 30px;
    color:#566572;
    :hover{
        background: crimson;
        color: #fff;
    }
`

export const Minuss = styled(Minus)`
    width: 30px;
    height: 30px;
    color:#566572;
    :hover{
        background: #25303E;
        color: #fff;
    }
`

export const MinusBackk = styled(MinusBack)`
    width: 30px;
    height: 30px;
    color:#566572;
    transform: rotate(270deg) ;
    padding: 5px;
    :hover{
        background: #25303E;
        color: #fff;
    }

`