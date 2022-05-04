import React from 'react'

import Navbar from '../components/navbar'

import {Flex, Text, Image, Button, SimpleGrid, Box} from '@chakra-ui/react'

export default function textPage() {
  return (
    <>
        <Navbar/>

        <Flex
        backgroundColor={'#333333'}
        mb={'2rem'}
        >

            <Flex
            w={'1132px'}
            marginTop={'2rem'}
            paddingX={'1rem'}
            position={'relative'}
            alignItems={'left'}
            mx={'auto'}
            paddingBottom={'20px'}
            >
                <Flex
                flexDirection={'column'}
                >
                    <Image
                    src={'https://cdn-icons-png.flaticon.com/512/2702/2702069.png'}
                    height={'200px'}
                    width={'200px'}
                    marginRight={'auto'}
                    marginLeft={'0'}
                    />

                    <Text 
                    fontSize={'2.5rem'}
                    color={'white'}
                    fontWeight={'600'}
                    marginTop={'20px'}
                    >😜 Dicas de Carreira</Text>
                </Flex>

            </Flex>

        </Flex>
        
          <Flex
          maxW={'1132px'}
          textAlign={'justify'}
          paddingLeft={'2rem'}
          paddingRight={'2rem'}
          mx={'auto'}
          position={'relative'}
          flexDirection={'column'}
          >

          {/* OS TEXTOS TÍTULOS E COMPONENTES DA PÁGINA QUE ESTÃO EXPLICADOS NA PÁGINA pages/exemploPager são a partir daqui */}
  



          {/* Apartir daqui nao mude*/}
          </Flex>

    </>
  )
}
