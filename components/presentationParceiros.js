import React from 'react'

import {Flex, Text, Image, Button, SimpleGrid, Box} from '@chakra-ui/react'
import { HamburgerIcon, SunIcon, MoonIcon} from '@chakra-ui/icons'

const PresentationParceiros = () => {

    return (

        <Flex
        backgroundColor={'#333333'}
        paddingBottom={'40px'}
        >

            <Flex
            maxW={'1132px'}
            mx={'auto'}
            marginTop={'2rem'}
            paddingX={'1rem'}
            position={'relative'}
            flexDirection={'column'}
            textAlign={'center'}
            >

            <Image
            src='https://cdn-icons.flaticon.com/png/512/3664/premium/3664002.png?token=exp=1650941441~hmac=71d175fce9a5384ef8401bb9b858c62c'
            width={'200px'}
            height={'200px'}
            mx={'auto'}
            >

            </Image>

            <Text
            fontSize={'2.5rem'}
            fontWeight={'700'}
            color={'white'}
            mx={'auto'}
            >
            Cursos que eu recomendo!
            </Text>

            <p
            className='textos'
            style={{
            color: 'white',
            fontSize: '1.5rem',
            marginLeft: 'auto',
            marginRight: 'auto'
            }}   
            >
            Aqui você pode encontrar alguns dos cursos que eu recomendo assim como o link para acessa-los!
            </p>

            </Flex>

        </Flex>

    )

}


export default PresentationParceiros