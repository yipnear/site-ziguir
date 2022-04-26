import React from 'react'

import {Box, Flex, IconButton, Menu, MenuButton, MenuList, MenuItem, Text,
toggleColorMode, useColorMode, useColorModeValue, Spacer, NextLink, Link, LinkOverlay,
Image} from '@chakra-ui/react'
import { HamburgerIcon, SunIcon, MoonIcon} from '@chakra-ui/icons'

const Footer = () => {

    return (

        <Flex
        flexDirection={'row'}
        width={'100%'}
        align={'center'}
        backgroundColor={'#292929'}
        p={5}
        >
            <Flex
            width={'1300px'}
            mx={'auto'}
            backgroundColor={'#292929'}
            align={'center'}
            h={'30px'}
            >
            
            <Text
            color={'white'}
            fontSize={'16px'}
            >
                <strong>Igor Picoli</strong> 2022
            </Text>

            <Spacer/>

            <Flex>

            <a href='#'>
                <Image
                src={'https://cdn-icons-png.flaticon.com/512/152/152810.png'}
                height={'20px'}
                mr={'20px'}
                >

                </Image>
            </a>

            <a href='#'>
                <Image
                src={'https://cdn-icons.flaticon.com/png/512/3536/premium/3536569.png?token=exp=1650839985~hmac=408a4e2048259032679a249ffff08591'}
                height={'20px'}
                mr={'20px'}
                >

                </Image>
            </a>

            <a href='#'>
                <Image
                src={'https://cdn-icons.flaticon.com/png/512/717/premium/717392.png?token=exp=1650839923~hmac=18fa3b0a111e46ea7b74ca40351ec4bb'}
                height={'20px'}
                mr={'20px'}
                >

                </Image>
            </a>

            </Flex>

            </Flex>
            

        </Flex>

    )

}


export default Footer