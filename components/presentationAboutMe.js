import React from 'react'

import {Flex, Text, Image, Icon} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'

const Presentation = () => {

    return (

        <Flex
        backgroundColor={'#333333'}
        paddingBottom={'40px'}
        textAlign={'center'}
        >

            <Flex
            maxW={'1132px'}
            mx={'auto'}
            marginTop={'2rem'}
            paddingX={'1rem'}
            position={'relative'}
            flexDirection={'column'}
            >
            
                <Image
                src={'https://s2.glbimg.com/MVIpOVDJgHL5JQkPIkh6NbAtkzw=/0x0:620x794/984x0/smart/filters:strip_icc()/s.glbimg.com/jo/g1/f/original/2012/03/06/caters_monkey_snapper_03.jpg'}
                w={'200px'}
                h={'200px'}
                borderRadius={'500'}
                mx={'auto'}
                >
                </Image>

                <Flex
                mx={'auto'}
                padding={'10px'}
                flexDirection={'column'}
                >

                   <Text
                   fontSize={'2.5rem'}
                   fontWeight={'700'}
                   color={'white'}
                   mx={'auto'}
                   >
                       👀 Sobre mim 
                   </Text>
    
                    <p
                    className='textos'
                    style={{
                    color: 'white',
                    fontSize: '1.5rem'
                    }}
                
                    >
                    Helping professionals excel in the workplace
                    </p>

                    <Icon color={'white'} mx={'auto'} marginTop={'30px'} fontSize={'30px'} as={ChevronDownIcon} />

                </Flex>

            </Flex>

        </Flex>

    )

}


export default Presentation