import { Box, color, Flex, SimpleGrid, Text, Image } from '@chakra-ui/react'
import React, { Component } from 'react'

import Navbar from '../components/navbar'
import PresentationAboutMe from '../components/presentationAboutMe'

export default function Home() {
  
  return (
    <> 

    <Navbar/>

    <PresentationAboutMe/>

    <Flex
          maxW={'800px'}
          textAlign={'justify'}
          paddingLeft={'1rem'}
          paddingRight={'1rem'}
          marginTop={'40px'}
          mx={'auto'}
          position={'relative'}
          flexDirection={'column'}
          >

          <p className='titulo'>Título</p>

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
                <p>At every job you should either learn or earn. 
                  Either is fine. Both is best. But if it's neither, 
                  quit - <strong>Garry Tan</strong>
                </p>
              </div>
          </div>

          <div className='textos'>
            <ul>

              <p className='titulo'>Professionalism in the Workplace 💼</p>

              <li>
                <strong style={{marginLeft: '0.5rem'}}>Teste</strong> - OLA TUDO BEM ESTOU TESTANDO
              </li>
              <li>
                <strong style={{marginLeft: '0.5rem'}}>Teste</strong> - OLA TUDO BEM ESTOU TESTANDO
              </li>
              <li>
                <strong style={{marginLeft: '0.5rem'}}>Teste</strong> - OLA TUDO BEM ESTOU TESTANDO
              </li>
            </ul>
          </div>

          <div className='citacao'>
              <div className='leftborder'>
              </div>
              <div
              style={{marginLeft: '13px', paddingBottom: '10px', paddingTop: '8px'}}
              >
                <p>At every job you should either learn or earn. 
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

          </Flex>


    </>

  )
}
