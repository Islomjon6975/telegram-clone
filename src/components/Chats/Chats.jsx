import { Chat, Container, Image, Chatss, MessageOfUser, NameOfUser, Search, SmsContainer, Timer, Time, ChatsContainer } from "./chats"
import {chats} from '../Mock/mock'
import { useState } from "react"

const Chats = () => {
    const [data, setData] = useState(chats)
    console.log(data)

    return(
        <Container>
            <Chat>
                <Search placeholder="Search" />
            </Chat>
            <ChatsContainer>
            {
                data.map(({id, name, img, message, hours, minutes})=>(
                    <Chatss>
                        <Image src={img} />
                        <SmsContainer>
                            <NameOfUser>{name}</NameOfUser>
                            <MessageOfUser>{message}</MessageOfUser>
                        </SmsContainer>
                        <Timer>
                            <Time>{hours < 10 ? '0'+hours:hours}:{minutes < 10 ? '0'+minutes : minutes}</Time>
                        </Timer>
                    </Chatss>
                ))
            }
            </ChatsContainer>
            
        </Container>
    )
}

export {Chats}