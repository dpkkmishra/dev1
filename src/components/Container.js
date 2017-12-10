import React from 'react'
import { Container } from 'semantic-ui-react'
import { Header1 } from './Header'

import Main  from  './Main'
import { Footer1 } from  './Footer'

 export const Container1 = () => (
  <Container text>
    <Header1/>    
    <Main/>
    <Footer1/>
  </Container>
)
