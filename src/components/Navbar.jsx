import React from 'react';
import styled from 'styled-components';
import { Search } from '@material-ui/icons';

const Container = styled.div`
  height: 60px;

`
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  left-margin: 25px;
  padding: 5px
`
const Input = styled.input`
  border: none;
`

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`
const Center = styled.div`
  flex: 1;
  text-align: center;
`
const Icon = styled.h1`
  font-weight: bold
`
const Right = styled.div`
  flex: 1;
`

const Navbar = ()=> {
    return(
        <Container>
            <Wrapper>
                <Left>
                    <Language>En</Language>
                    <SearchContainer>
                        <Input />
                    <Search />
                    </SearchContainer>
                </Left>
                <Center><Icon>CureWeb</Icon></Center>
                <Right>Right</Right>
            </Wrapper> 
        </Container>
    )
};

export default Navbar;