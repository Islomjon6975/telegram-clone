import { useState, useEffect } from "react"
import { ChatFilll, Closee, ChatCount, Chatt, Container, EditAltt, IconsContainer, IconsTitle, Menuu, MessageRoundedd, Userr, User33, EditPersonal, Folder, FolderContainer, MyFolder, MyFolderIcons, ChatsCount, ChatCountt, TrashAltt, CreateFolder, NewFolder, InputFolder, InputContainer, FolderName, Folderrr, FolderPosition, FolderLine, IncludedChats, AddChats, ChooseTypes, Buttons, Button, Line, InnerMenu, InnerMenu_logo, Logo_img, Logo_desc, Personal_img, Bookmart_container, Bookmarkk, Logo_text, Logo_name, ArrowIosDownwardd, Arrow, Inner_Arrow_container, Inner_Arrow_img, Inner_Arrow_img_container, Inner_Arrow_Checked, Arrow_Check, UserCirclee, Settings, Setting, Userss, Setting_title, Settings44, Contact, Calls, MoonOutlines, LightModee, ToggleOfff, ToggleOnn, About_telegram, About_telegram_title, About_telegram_version, Setting_con, Arrow_close } from "./menubarSide"
import admin from '../Assets/17.jpg'

const MenubarSide = () =>{

    const [chatActive, setChatActive] = useState('bir')
    const [createFolder, setCreateFolder] = useState('')
    const [menu, setMenu] = useState(false)
    const [arrow, setArrow] = useState(false)
    const [mode, setMode] =useState(false)

    return( 
        <Container color={createFolder === 'createFolder' ? createFolder : null}  >
            <InnerMenu menu={menu && menu}>
                <InnerMenu_logo>
                    <Logo_img>
                        <Personal_img src={admin} onClick={()=>setArrow(!arrow)} />
                        <Bookmart_container>
                            <Bookmarkk />
                        </Bookmart_container>
                    </Logo_img>
                    <Logo_desc>
                        <Logo_text>
                            <Logo_name name>Islom Abdulahatov</Logo_name>
                            <Logo_name>+998 99 528 98 96</Logo_name>
                        </Logo_text>
                        <ArrowIosDownwardd rotate={arrow && arrow} onClick={()=>setArrow(!arrow)} />
                    </Logo_desc>
                </InnerMenu_logo>
                <Arrow visibile={arrow && arrow}>
                    <Inner_Arrow_container onClick={()=>setMenu(!menu)} >
                        <Inner_Arrow_img_container>
                            <Inner_Arrow_img src={admin} />
                            <Inner_Arrow_Checked>
                                <Arrow_Check />
                            </Inner_Arrow_Checked>
                        </Inner_Arrow_img_container>
                        <Logo_name name>Islom Abdulahatov</Logo_name>
                    </Inner_Arrow_container>
                    <Inner_Arrow_container>
                        <UserCirclee className='usercircle' />
                        <Logo_name name>Add Account</Logo_name>
                    </Inner_Arrow_container>
                </Arrow>
                <Settings>
                    <Setting_con>
                        <Setting>
                            <Userss className="color"  />
                            <Setting_title>New Group</Setting_title>
                        </Setting>
                        <Setting>
                            <Userss className="color"  />
                            <Setting_title>New Channel</Setting_title>
                        </Setting>
                        <Setting>
                            <Contact className="color"  />
                            <Setting_title>Contacts</Setting_title>
                        </Setting>
                        <Setting>
                            <Calls className="color"  />
                            <Setting_title>Calls</Setting_title>
                        </Setting>
                        <Setting>
                            <Settings44 className="color"  />
                            <Setting_title>Settings</Setting_title>
                        </Setting>
                        <Setting>
                            <MoonOutlines className="color" />
                            <Setting_title>Night Mode</Setting_title>
                            
                            {
                                !mode ? <ToggleOnn onClick={()=>setMode(!mode)} /> : <ToggleOfff onClick={()=>setMode(!mode)}   />
                            }
                            
                        </Setting>
                    </Setting_con>
                    
                </Settings>
                    <About_telegram>
                        <About_telegram_title>Telegram Desktop</About_telegram_title>
                        <About_telegram_version>Version 3.5.1 x64 - About</About_telegram_version>
                    </About_telegram>
                    <Arrow_close onClick={()=>setMenu(!menu)} />
            </InnerMenu>
            

            <Menuu onClick={()=>setMenu(!menu)} />
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