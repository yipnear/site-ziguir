import React from 'react'

import {Flex, Text, Image, Button, SimpleGrid, Box} from '@chakra-ui/react'
import { HamburgerIcon, SunIcon, MoonIcon} from '@chakra-ui/icons'

const Apoiadores = () => {

    return (

        <Flex
        backgroundColor={'#333333'}
        paddingBottom={'40px'}
        >

            <Flex
            maxW={'1132px'}
            mx={'auto'}
            backgroundColor={'#333333'}
            marginTop={'2rem'}
            paddingX={'1rem'}
            position={'relative'}
            flexDirection={'column'}
            >

                <Text
                mx={'auto'}
                align={'center'}
                color={'white'}
                fontWeight={'4npm 00'}
                fontSize={'26'}
                marginBottom={'20px'}
                >Empresas Parceiras 👏</Text>


                <SimpleGrid 
                maxW={'1132px'}
                padding={'1rem'}
                columns={{base: '2', sm: '3', md: '5'}}
                spacing={'2rem'} 
                mx={'auto'}
                height={'100%'} 
                alignContent={'center'}
                >
                    
                    {/* Cada <a> e o que tem dentro é uma logo de uma empresa, então
                    pode estar substituindo a src='' para a logo desejada 
                    e o href para o link desejado*/}

                    <a href = '#'>
                        <Box
                        borderRadius={'20px'}
                        >
                            <Image
                            mx={'auto'}
                            maxH={'60px'}
                            borderRadius={'10px'}
                            src='https://i.pcmag.com/imagery/reviews/03zMSFZXHN2CgbuvuUx5ijT-6.fit_lim.size_1050x591.v1623179723.png'
                            >

                            </Image>
                        </Box>
                    </a>

                    <a href = '#'>
                        <Box
                        borderRadius={'20px'}
                        >
                            <Image
                            mx={'auto'}
                            maxH={'60px'}
                            borderRadius={'10px'}
                            src='https://i.pcmag.com/imagery/reviews/03zMSFZXHN2CgbuvuUx5ijT-6.fit_lim.size_1050x591.v1623179723.png'
                            >

                            </Image>
                        </Box>
                    </a>

                    <a href = '#'>
                        <Box
                        borderRadius={'20px'}
                        >
                            <Image
                            mx={'auto'}
                            maxH={'60px'}
                            borderRadius={'10px'}
                            src='https://i.pcmag.com/imagery/reviews/03zMSFZXHN2CgbuvuUx5ijT-6.fit_lim.size_1050x591.v1623179723.png'
                            >

                            </Image>
                        </Box>
                    </a>

                    <a href = '#'>
                        <Box
                        borderRadius={'20px'}
                        >
                            <Image
                            mx={'auto'}
                            maxH={'60px'}
                            borderRadius={'10px'}
                            src='https://i.pcmag.com/imagery/reviews/03zMSFZXHN2CgbuvuUx5ijT-6.fit_lim.size_1050x591.v1623179723.png'
                            >

                            </Image>
                        </Box>
                    </a>

                    <a href = '#'>
                        <Box
                        borderRadius={'20px'}
                        >
                            <Image
                            mx={'auto'}
                            maxH={'60px'}
                            borderRadius={'10px'}
                            src='https://i.pcmag.com/imagery/reviews/03zMSFZXHN2CgbuvuUx5ijT-6.fit_lim.size_1050x591.v1623179723.png'
                            >

                            </Image>
                        </Box>
                    </a>

                </SimpleGrid>
            </Flex>

        </Flex>

    )

}


export default Apoiadores