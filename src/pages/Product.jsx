import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Newsletter from '../components/Newsletter'
import { Add, Remove } from '@material-ui/icons'
import { mobile } from '../responsive'

const Container = styled.div``
const Wrapper = styled.div`
  display:flex;
  padding: 50px;
  ${mobile({ padding: "10px", flexDirection: "column" })}
`
const ImgContainer = styled.div`
  flex: 1;
`

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({ height: "50vh" })}
`
const InfoContainer = styled.div`
  flex: 1;
  padding: 0 50px;
  ${mobile({ padding: "10px" })}
`
const Title = styled.h1`
  font-weight: 200;
`
const Desc = styled.p`
  margin: 20px 0;
`
const Price = styled.span`
  font-weight: 100;
  font-size: 38px;
`
const FilterContainer = styled.div`
   display: flex;
   justify-content: space-between;
   width: 50%;
   margin: 20px 0;
   ${mobile({ width: "100%" })}
`
const Filter = styled.div`
   display: flex;
   align-items: center;
`
const FilterTitle = styled.span`
   font-size: 18px;
   font-weight: 200;
`
const FilterColor = styled.div`
   height: 20px;
   width: 20px;
   border-radius: 50%;
   background-color: ${props => props.color};
   margin: 0px 5px;
   cursor: pointer;
`
const FilterSize = styled.select`
   margin-left: 10px;
   padding: 3px;
`
const FilterOption = styled.option``
const AddContainer = styled.div`
   display: flex;
   align-items: center;
   width: 50%;
   justify-content: space-between;
   ${mobile({ width: "100%" })}
`
const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`
const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal; 
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 5px;
`
const Button = styled.button`
    padding: 15px;
    border-radius: 15px;
    border: 1px solid teal;
    cursor: pointer;
    background-color: white;
    font-weight: 500;
    &:hover{
    background-color: #f8f4f4;
    }
`
const Product = () => {
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Wrapper>
                <ImgContainer>
                    <Image src="https://i.ibb.co/S6qMxwr/jean.jpg" />
                </ImgContainer>
                <InfoContainer>
                    <Title>Denim Jumpsuit</Title>
                    <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
                        deserunt. Inventore illum itaque ex. Rem officia reiciendis distinctio a iste eaque? Iusto,
                        libero eius magnam dolorum architecto quis reiciendis atque?
                    </Desc>
                    <Price>$20</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            <FilterColor color="black" />
                            <FilterColor color="darkblue" />
                            <FilterColor color="grey" />
                        </Filter>
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize>
                                <FilterOption>XS</FilterOption>
                                <FilterOption>S</FilterOption>
                                <FilterOption>M</FilterOption>
                                <FilterOption>L</FilterOption>
                                <FilterOption>XL</FilterOption>
                            </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <Remove />
                            <Amount>1</Amount>
                            <Add />
                        </AmountContainer>
                        <Button>ADD TO CART</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Newsletter />
            <Footer />
        </Container>
    )
}

export default Product
