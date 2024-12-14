import React from 'react'
import styled from 'styled-components'
import { Icon } from '../../components/icon/Icon'
import { FlexWrapper } from '../../components/FlexWrapper'


export const Footer = ()=>{
return(
<StyletFooter>
      <FlexWrapper >
      <CopyRight>2022 Relume. All right reserved.</CopyRight>


<SocialList>
    <SocialItem>
          <SocialLink>
                      <Icon  iconId='Facebook'/>
         </SocialLink>
    </SocialItem>
    <SocialItem>
          <SocialLink>
                      <Icon iconId='LinkedIn'/>
         </SocialLink>
    </SocialItem>
    <SocialItem>
          <SocialLink>
                      <Icon iconId='Twitter'/>
         </SocialLink>
    </SocialItem>
    <SocialItem>
          <SocialLink>
                      <Icon iconId='Instagram'/>
         </SocialLink>
    </SocialItem>
  
</SocialList>
      </FlexWrapper>

</StyletFooter>
)

}


const StyletFooter =styled.footer`
    display: flex;
    background-color:#ffff;
   
`
const SocialList =styled.ul`
    display: flex;
    justify-content:flex-end
`
const SocialItem =styled.li`
    
`
const SocialLink = styled.a`
    
`

const CopyRight =styled.small`
    display: flex;
    justify-content:flex-start
`
