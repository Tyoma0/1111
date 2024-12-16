import React from 'react'
import styled from 'styled-components'
import { Icon } from '../../components/icon/Icon'
import { FlexWrapper } from '../../components/FlexWrapper'
import { Container } from '../../components/Container'

export const Footer = ()=>{
return(
<StyletFooter>

    <Container>
    
      <CopyRight>2022 Relume. All right reserved.</CopyRight>


<SocialList>
    <SocialItem>
          <SocialLink>
            <a href=""><Icon  iconId='Facebook'/></a>
                      
         </SocialLink>
    </SocialItem>
    <SocialItem>
          <SocialLink>
            <a href="">  <Icon iconId='LinkedIn'/></a>
                      
         </SocialLink>
    </SocialItem>
    <SocialItem>
          <SocialLink>
            <a href=""><Icon iconId='Twitter'/></a>
                      
         </SocialLink>
    </SocialItem>
    <SocialItem>
          <SocialLink>
            <a href=""><Icon iconId='Instagram'/></a>
                      
         </SocialLink>
    </SocialItem>
  
</SocialList>
      

    </Container>
     
</StyletFooter>
)

}


const StyletFooter =styled.footer`
    display: flex;
    background-color:#ffff;
    `
const SocialList =styled.ul`
    display: flex;
    
`
const SocialItem =styled.li`
    
`
const SocialLink = styled.a`
    
`

const CopyRight =styled.small`
    
`
