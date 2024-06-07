import React from 'react'
import styled from 'styled-components'
import FavoriteOutlinedIcon from '@material-ui/icons/FavoriteOutlined';
import { mobile } from '../responsive';

const Container = styled.div`
  background-color: teal;
  height: 30px;
  font-size: 16px;
  font-weight: 500;
  color:white;
  display: flex;
  align-items: center;
  justify-content: center;
  ${mobile({ fontSize: "12px" })}
`

const Announcement = () => {
    return (
        <Container>
            Welcome to 511Store! Super Deal and Free Shipping
            <span style={{ marginLeft: 5 }}><FavoriteOutlinedIcon /></span>
        </Container>
    )
}

export default Announcement
