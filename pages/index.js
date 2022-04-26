import { Box, color, Flex, SimpleGrid, Text, Image, LinkOverlay, LinkBox, Link} from '@chakra-ui/react'
import React, { Component } from 'react'

import Navbar from '../components/navbar'
import Presentation from '../components/presentation'
import Apoiadores from '../components/apoiadores'
import Footer from '../components/footer'

import NextLink from "next/link"

export default function Home() {
  
  return (
    <Box> 
      <Navbar/>
      <Presentation/>

      <Flex
        display={'flex'}
        marginTop={'70px'}
        width={'100%'}
      >
        <Flex
        marginLeft={{base: '0', md:'40%'}}
        maxW={'1132px'}
        flexDirection={'column'}
        paddingX={'1rem'}
        mx={'auto'}
        >
          <Text
          transform={'rotate(-5deg)'}
          fontSize={'20px'}
          fontWeight={'700'}
          >CONFIRA OUTROS TRABALHOS</Text>
          <Image
          padding={'20px'}
          mx={'auto'}
          height={'auto'}
          maxW={'100px'}
          minW={'20px'}
          src={'https://www.jeffsu.org/assets/arrow.png?v=b0585c8047'}
          >
          </Image>         
        </Flex>
      </Flex>

      <Flex
        paddingBottom={'40px'}
      >

        <Flex
          w={'100%'} 
          mx={'auto'}
          marginTop={'2rem'}
          position={'relative'}
        >

          <SimpleGrid 
          maxW={'1132px'}
          columns={{base: '1', sm: '1', md: '3'}} 
          spacing={'5rem'} 
          mx={'auto'}
          paddingX={'1rem'}
          height={'100%'} 
          alignContent={'center'}
          paddingBottom={'4.0rem'}
          >


          {/* Destacando que esses são os Cards. Na className 'cardEmoji' 
          tu pode alterar o emojizinho, o título e a descrição */}


          <a href='Carrer'>
          <Box>
            <div className='cardBackground'>
              <p className="cardEmoji">🐱‍👤👌</p>
              <h1 className='cardTitle'>Youtube</h1>
              <p className='cardText'>Conheça o meu canal</p>
            </div>
          </Box>
          </a>

          <a href='aboutMe'>
          <Box>
            <div className='cardBackground'>
              <p className="cardEmoji">🐱‍👤👌</p>
              <h1 className='cardTitle'>Youtube</h1>
              <p className='cardText'>Conheça o meu canal</p>
            </div>
          </Box>
          </a>

          <a href='parceiros'>
          <Box>
            <div className='cardBackground'>
              <p className="cardEmoji">🐱‍👤👌</p>
              <h1 className='cardTitle'>Youtube</h1>
              <p className='cardText'>Conheça o meu canal</p>
            </div>
          </Box>
          </a> 

          </SimpleGrid>

        </Flex>

      </Flex>

      <Apoiadores/>

      <Footer/>

    </Box>
  )
}
