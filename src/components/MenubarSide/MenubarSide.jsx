import { useState, useEffect } from "react"
import { ChatFilll, Closee, ChatCount, Chatt, Container, EditAltt, IconsContainer, IconsTitle, Menuu, MessageRoundedd, Userr, User33, EditPersonal, Folder, FolderContainer, MyFolder, MyFolderIcons, ChatsCount, ChatCountt, TrashAltt, CreateFolder, NewFolder, InputFolder, InputContainer, FolderName, Folderrr, FolderPosition, FolderLine, IncludedChats, AddChats, ChooseTypes, Buttons, Button, Line } from "./menubarSide"


const MenubarSide = () =>{

    const [chatActive, setChatActive] = useState('bir')
    const [createFolder, setCreateFolder] = useState('')


    return( 
        <Container color={createFolder === 'createFolder' ? createFolder : null}  >
            <Menuu />
            <IconsContainer color={chatActive === 'bir' && chatActive} onClick={()=>setChatActive('bir')}>
                <ChatCount>14</ChatCount>
                {
                    chatActive === 'bir' ? <ChatFilll /> : <Chatt />
                }
                
                <IconsTitle>All chats</IconsTitle>
            </IconsContainer>
            <IconsContainer color={chatActive === 'ikki' && chatActive} onClick={()=>setChatActive('ikki')}>
                <ChatCount>2</ChatCount>
                {
                    chatActive === 'ikki' ? <User33 /> : <Userr size={'37px'} />
                }
                
                <IconsTitle>Personal</IconsTitle>
            </IconsContainer>
            <IconsContainer color={chatActive === 'uch' && chatActive} onClick={()=>setChatActive('uch')}>
                <ChatCount>10</ChatCount>
                {
                    chatActive === 'uch' ? <ChatFilll /> : <Chatt />
                }
                
                <IconsTitle>Unread</IconsTitle>
            </IconsContainer>
            <IconsContainer color={chatActive === 'tort' && chatActive} onClick={()=>setChatActive('tort')}>
                <EditAltt color={chatActive} />
                <IconsTitle>Edit</IconsTitle>
            </IconsContainer>
            <EditPersonal color={createFolder === 'createFolder' ? createFolder : null} toggle={chatActive === 'tort' && chatActive}>
                <FolderContainer>
                    <Folder color={createFolder === 'createFolder' ? createFolder : null}>Folders</Folder>
                    <Closee onClick={()=>setChatActive('false')} toggle={chatActive === 'false' && chatActive} />
                </FolderContainer>
                <MyFolder>My folders</MyFolder>
                <MyFolderIcons>
                    <Userr size={'25px'} />
                    <ChatsCount>
                        <IconsTitle size={'14px'}>Personal</IconsTitle>
                        <ChatCountt>86 chats</ChatCountt>
                    </ChatsCount>
                    <TrashAltt />
                </MyFolderIcons>
                <MyFolderIcons>
                    <MessageRoundedd size={'25px'} />
                    <ChatsCount>
                        <IconsTitle size={'14px'}>Unread</IconsTitle>
                        <ChatCountt>15 chats</ChatCountt>
                    </ChatsCount>
                    <TrashAltt />
                </MyFolderIcons>
                <MyFolder myFolder onClick={()=>setCreateFolder(true)}>CREATE NEW FOLDER</MyFolder>
                <ChatCountt padding={'20px'}>Create folder for different groups of chats and quickly switch between them.</ChatCountt>
            </EditPersonal>
            <CreateFolder  toggle={createFolder === true && createFolder} >
                <NewFolder>New Folder</NewFolder>
                <InputContainer>
                    <FolderName>Folder name</FolderName>
                    <FolderPosition>
                       <InputFolder  />
                       <Folderrr />
                    </FolderPosition>
                </InputContainer>
                <Line />
                <IncludedChats>Included Chats</IncludedChats>
                <AddChats>ADD CHATS</AddChats>
                <ChooseTypes>Choose chats and types of chats that will appear in this folder</ChooseTypes>
                <Line />
                <IncludedChats>Excluded Chats</IncludedChats>
                <AddChats>REMOVE CHATS</AddChats>
                <ChooseTypes>Choose chats and types of chats that will never appear in this folder</ChooseTypes>
                <Buttons>
                    <Button onClick={()=>setCreateFolder(false)}>CANCEL</Button>
                    <Button>CREATE</Button>
                </Buttons>
                
            </CreateFolder>
        </Container>
    )
}

export {MenubarSide}