import React from 'react'

import {Flex, IconButton, Menu, MenuButton, MenuList, MenuItem, Text,
Spacer, Link, LinkOverlay, Icon} from '@chakra-ui/react'
import { HamburgerIcon, ChevronDownIcon} from '@chakra-ui/icons'

const Navbar = () => {

    return (

        <Flex
        flexDirection={'row'}
        width={'100%'}
        align={'center'}
        backgroundColor={'#292929'}
        p={5}
        >
            <Flex
            width={'1100px'}
            mx={'auto'}
            align={'center'}
            >


                <a href = 'homepage' >
                <Text
                fontFamily={'Roboto mono'}
                fontWeight={'bolder'}
                fontSize={20}
                color={'white'}
                >Igor Picoli</Text>
                </a>

                <Spacer/>

                <Link
                fontFamily={'Roboto mono'}
                fontWeight={'Regular'}
                fontSize={16}
                color={'white'}
                href={'/aboutMe'}
                display={{base: 'none', sm: 'none', md: 'flex'}}
                style={{textDecoration: 'none', boxShadow: 'none'}}
                >Sobre mim</Link>

                <Link
                fontFamily={'Roboto mono'}
                fontWeight={'Regular'}
                fontSize={16}
                mx={'18px'}
                color={'white'}
                href={'/parceiros'}
                display={{base: 'none', sm: 'none', md: 'flex'}}
                style={{textDecoration: 'none', boxShadow: 'none'}}
                >Cursos</Link>


                {/* Esse é o menu da sessão Tópicos */}

                <Menu isLazy>
                <MenuButton
                display={{base: 'none', sm: 'none', md: 'flex'}}
                fontFamily={'Roboto mono'}
                fontWeight={'Regular'}
                fontSize={16}
                color={'white'}
                >Tópicos <Icon as={ChevronDownIcon} /></MenuButton>
                <MenuList>

                    {/* Replica o <MenuItem> para adicionar mais tópicos sendo que o href é o link para onde vai */}
                    <MenuItem>
                        <Link href='Carrer'>
                        Carreira
                        </Link>
                    </MenuItem>
                </MenuList>
                </Menu>



                {/* Esse aqui é para o menu no celular */}

                <Flex
                >

                    <Menu>
                        <MenuButton
                            display={{base: 'flex', sm: 'flex', md: 'none' }}
                            as={IconButton}
                            aria-label='Options'
                            icon={<HamburgerIcon />}
                            style={{textDecoration: 'none', boxShadow: 'none'}}
                        />
                        <MenuList>
                            <MenuItem>
                            <a href='Carrer'>
                            Carreira
                            </a>
                            </MenuItem>
                            <MenuItem>
                            <a href='aboutMe'>
                            Sobre mim
                            </a>
                            </MenuItem>
                            <MenuItem>
                            <a href='parceiros'>
                            Cursos
                            </a>
                            </MenuItem>
                        </MenuList>
                    </Menu>

                </Flex>

            </Flex>
            

        </Flex>

    )

}


export default Navbar