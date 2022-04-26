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
          
          <p className='titulo'>Professionalism in the Workplace 💼</p>

          <p className='textos'>We all define "productivity" a little differently.</p>

          <p className='textos'>
          At work, this might mean using the "Data Validation" tool in Excel or 
          Google Sheets so mistakes are physically impossible (if you type in 
          something not in the drop-down menu, you're met with an error message) 
          </p>
        
          <p className='textos'>
          At work, this might mean using the "Data Validation" tool in Excel or 
          Google Sheets so mistakes are physically impossible (if you type in 
          something not in the drop-down menu, you're met with an error message) 
          </p>

          <div className='citacao'>
              <div className='leftborder'>
              </div>
              <div
              style={{marginLeft: '13px', paddingBottom: '10px', paddingTop: '8px'}}
              >
                <p className='textoCitacao'>At every job you should either learn or earn. 
                  Either is fine. Both is best. But if it's neither, 
                  quit - <strong>Garry Tan</strong>
                </p>
              </div>
          </div>

          <div>
            <ul>
              <p className='titulo'>Professionalism in the Workplace 💼</p>

              <li className='textos'>
                <strong style={{marginLeft: '0.5rem'}}>Teste</strong> - OLA TUDO BEM ESTOU TESTANDO 1
              </li>
              <li className='textos'>
                <strong style={{marginLeft: '0.5rem'}}>Teste</strong> - OLA TUDO BEM ESTOU TESTANDO 2
              </li>
              <li className='textos'>
                <strong style={{marginLeft: '0.5rem'}}>Teste</strong> - OLA TUDO BEM ESTOU TESTANDO 3
              </li>
            </ul>
          </div>

          <div className='citacao'>
              <div className='leftborder'>
              </div>
              <div
              style={{marginLeft: '13px', paddingBottom: '10px', paddingTop: '8px'}}
              >
                <p className='textoCitacao'>At every job you should either learn or earn. 
                  Either is fine. Both is best. But if it's neither, 
                  quit - <strong>Garry Tan</strong>
                </p>
              </div>
          </div>

          <p className='textos'>
          At work, this might mean using the "Data Validation" tool in Excel or 
          Google Sheets so mistakes are physically impossible (if you type in 
          something not in the drop-down menu, you're met with an error message) 
          </p>

          <div className='destaque'>

            <p className='textos' style={{marginTop: '0px'}}>Back when I was a 👨🏻‍🎓 student at Emory University, job search was rough. </p>

          </div>


          </Flex>

    </>
  )
}
