import { Box, color, Flex, SimpleGrid, Text, Image } from '@chakra-ui/react'
import React, { Component } from 'react'

import Navbar from '../components/navbar'
import PresentationParceiros from '../components/presentationParceiros'


export default function Home() {
  
  return (
    <> 

    <Navbar/>

    <PresentationParceiros/>


        <Flex
          maxW={'1132px'}
          textAlign={'justify'}
          paddingLeft={'1rem'}
          paddingRight={'1rem'}
          mx={'auto'}
          position={'relative'}
          flexDirection={'column'}
        >

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
              width={'100%'}
              columns={{base: '1', sm: '1', md: '3'}} 
              spacing={'1rem'} 
              mx={'auto'}
              paddingX={'1rem'}
              height={'100%'} 
              alignContent={'center'}
              >

              {/* Dentro desse Flex tem o Card que basicamente se repete com as informações trocadas
              assim pode alterar cada 1 e para adicionar mais basta copiar e colar */}

              <a href='#'>

              <Flex
              width={'100%'}
              flexDirection={'column'}
              padding={'2rem'}
              backgroundColor={'#403A39'}
              borderRadius={'30px'}
              >

                <Image
                src='https://cdn-icons.flaticon.com/png/512/3979/premium/3979345.png?token=exp=1650941384~hmac=8506483cf650d3a825a9f2e3e4ad1f51'
                width={'150px'}
                height={'auto'}
                mx={'auto'}
                >

                </Image>

                <p className='titulo' style={{marginLeft: 'auto', marginRight: 'auto', color: 'white'}}>
                  Excel
                </p>

                <p className='textosCard' style={{color: 'white'}}> Esse é um curso de Excel, você pode conferir o 
                curso clicando no curso e tudo mais ta bem explicadinho compra na hotmart filho pode confiar
                vai sair patrão
                </p>

              </Flex>

              </a>

              {/* Copia do ultimo comentário até aqui, cada sessão dessa é um card */}

              <a href='#'>

              <Flex
              width={'100%'}
              flexDirection={'column'}
              padding={'2rem'}
              backgroundColor={'#403A39'}
              borderRadius={'30px'}
              >

                <Image
                src='https://cdn-icons.flaticon.com/png/512/3979/premium/3979345.png?token=exp=1650941384~hmac=8506483cf650d3a825a9f2e3e4ad1f51'
                width={'150px'}
                height={'auto'}
                mx={'auto'}
                >

                </Image>

                <p className='titulo' style={{marginLeft: 'auto', marginRight: 'auto', color: 'white'}}>
                  Excel
                </p>

                <p className='textosCard' style={{color: 'white'}}> Esse é um curso de Excel, você pode conferir o 
                curso clicando no curso e tudo mais ta bem explicadinho compra na hotmart filho pode confiar
                vai sair patrão
                </p>

              </Flex>

              </a>
              <a href='#'>

              <Flex
              width={'100%'}
              flexDirection={'column'}
              padding={'2rem'}
              backgroundColor={'#403A39'}
              borderRadius={'30px'}
              >

                <Image
                src='https://cdn-icons.flaticon.com/png/512/3979/premium/3979345.png?token=exp=1650941384~hmac=8506483cf650d3a825a9f2e3e4ad1f51'
                width={'150px'}
                height={'auto'}
                mx={'auto'}
                >

                </Image>

                <p className='titulo' style={{marginLeft: 'auto', marginRight: 'auto', color: 'white'}}>
                  Excel
                </p>

                <p className='textosCard' style={{color: 'white'}}> Esse é um curso de Excel, você pode conferir o 
                curso clicando no curso e tudo mais ta bem explicadinho compra na hotmart filho pode confiar
                vai sair patrão
                </p>

              </Flex>

              </a>
              <a href='#'>

              <Flex
              width={'100%'}
              flexDirection={'column'}
              padding={'2rem'}
              backgroundColor={'#403A39'}
              borderRadius={'30px'}
              >

                <Image
                src='https://cdn-icons.flaticon.com/png/512/3979/premium/3979345.png?token=exp=1650941384~hmac=8506483cf650d3a825a9f2e3e4ad1f51'
                width={'150px'}
                height={'auto'}
                mx={'auto'}
                >

                </Image>

                <p className='titulo' style={{marginLeft: 'auto', marginRight: 'auto', color: 'white'}}>
                  Excel
                </p>

                <p className='textosCard' style={{color: 'white'}}> Esse é um curso de Excel, você pode conferir o 
                curso clicando no curso e tudo mais ta bem explicadinho compra na hotmart filho pode confiar
                vai sair patrão
                </p>

              </Flex>

              </a>

              </SimpleGrid>

            </Flex>

          </Flex>   

   
        </Flex>

    </>

  )
}
