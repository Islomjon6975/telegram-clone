import { useState } from "react"
import { Closee, Container, MinusBackk, Minuss } from "./navbar"


const Navbar = () => {

    const [close, setClose] = useState('')

    return (
        <Container>
            <Minuss />
            <MinusBackk />
            <Closee color={close==='active' && close} onClick={()=>setClose('active')} > </Closee>
        </Container>
    )
}

export {Navbar}