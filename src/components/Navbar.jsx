import { Search } from '@material-ui/icons'
import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive';

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({ padding: "10px 0" })}
`
const Left = styled.div`
  flex:1;
  display: flex;
  align-items: center;
`
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`
const SearchContainer = styled.div`
  display: flex;
  border: 1px solid lightgray;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`
const Input = styled.input`
  border: none;
  outline: none;
  ${mobile({ width: "50px" })}
`
const Center = styled.div`
  flex:1;
  text-align: center;
`
const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "20px" })}
`
const Right = styled.div`
  flex:1;
  font-size: 14px;
  display: flex;
  align-items:center;
  justify-content: flex-end;
  ${mobile({ justifyContent: "center", flex: "2" })}
`
const MenuItem = styled.div`
  margin-left: 30px;
  cursor: pointer;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`
const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "black", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>511Store.</Logo>
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>LOGIN</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="secondary">
              <ShoppingCartIcon />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar
