import React from 'react'

import Navbar from '../components/navbar'

import {Flex, Text, Image, Button, SimpleGrid, Box} from '@chakra-ui/react'

export default function textPage() {
  return (
    <>
        <Navbar/>
          
            {/* 
            <p> É um novo páragrafo por isso usei para cada componente novo 
            Colocar o className como 'título' faz com que ele seja formatado como título ou seja fonte maior e negrito
            */}

            <p className='titulo'>Professionalism in the Workplace 💼</p>

            {/* ClassName 'textos' gera um novo parágrafo com a formatação de texto tipo parágrafo de várias palavras mesmo
            então usar esse quando for escrever o texto do corpo do negócio
            */}

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

            {/* 
            Citação é para quando for citar alguma frase de algum autor, tinha no site do Jeff então também fiz
            Basta copiar o que está a seguir e o <p className='textoCitacao'> é o Conteúdo, sendo no geral o texto e o que está entre
            <strong></strong> é o nome do autor
            */}

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


            {/* 
            Aqui tem a parte de Lista, o que estiver com o className título é o cabeçalho da lista e pode copiar o que estiver entre <li> para cada item.
            */}

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

            {/* 
            Literalmente uma frase que você queira deixar em destaque, vai ficar sobreposta com um fundo diferente, é tipo pra fazer um negócio mais impactante.
            */}

            <div className='destaque'>

              <p className='textos' style={{marginTop: '0px'}}>Back when I was a 👨🏻‍🎓 student at Emory University, job search was rough. </p>

            </div>
    </>
  )
}
