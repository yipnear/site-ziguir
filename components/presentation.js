import React from 'react'

import {Flex, Text, Image, Button, SimpleGrid, Box} from '@chakra-ui/react'
import { HamburgerIcon, SunIcon, MoonIcon} from '@chakra-ui/icons'

const Presentation = () => {

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
            >
                <SimpleGrid columns={{base: '1', sm: '1', md: '2'}} 
                spacing={'10px'} 
                mx={'auto'} 
                height={'100%'} 
                alignContent={'center'}>
                    
                    <Box
                    gridRow={{base: '2', md:'1'}}
                    >
                        <Text
                            fontSize={25}
                            color={'white'}
                            fontFamily={'SegoeUI'}
                            fontWeight={'bold'}
                            mt={'20px'}
                        >
                        😎 Olá, meu nome é Ziguir 
                        </Text>
                        <Text
                        fontSize={22}
                        fontFamily={'SegoeUI'}
                        color={'white'}
                        mt={'20px'}
                        >
                        Atualmente trabalho com Youtube e produção de conteúdo no geral.
                        </Text>

                        <Text
                            fontSize={22}
                            fontFamily={'SegoeUI'}
                            color={'white'}
                            mt={'20px'}
                        >
                        No meu canal você tem acesso a vagas e dicas sobre o mercado de trabalho que não são vistas em qualquer lugar.
                        </Text>   

                        <a href = 'aboutMe'>
                            <Button
                            mt={'50px'}
                            mx={'auto'}
                            mb={'3rem'}
                            style={{textDecoration: 'none', boxShadow: 'none'}}
                            padding={'25px'}
                            >
                            Me conheça melhor!
                            </Button>
                        </a>
                    
                    </Box>
                    <Box
                    display={'Flex'}
                    my={'auto'}
                    mx={'auto'}
                    maxW={'80%'}
                    >
                        <Image
                            src='https://www.jeffsu.org/content/images/size/w1000/2022/01/DSC00233.JPG'
                            width={'100%'}
                            height={'auto'}
                            borderRadius={'20px'}
                        ></Image>

                    </Box>
                </SimpleGrid>
            </Flex>

        </Flex>

    )

}


export default Presentation