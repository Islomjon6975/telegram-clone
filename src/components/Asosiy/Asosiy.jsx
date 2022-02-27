import { ChatBar } from "../ChatBar/ChatBar.jsx"
import { Chats } from "../Chats/Chats.jsx"
import { MenubarSide } from "../MenubarSide/MenubarSide.jsx"
import { Container } from "./asosiy"


const Asosiy = () => {

    return(
        <Container>
            <MenubarSide />
            <Chats />
            <ChatBar />
        </Container>
    )
}

export {Asosiy}