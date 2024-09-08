import React from 'react';
import Arrow from '../../assets/images/arrow.png';
import {HeaderProps} from '../../types';
import {HeaderContainer, HeaderTitle, ImgStyled} from './styles';

const Header = ({ButtonReturn, TitleHeader}: HeaderProps) => {
  return (
    <HeaderContainer>
      {ButtonReturn && <ImgStyled source={Arrow} />}
      <HeaderTitle hasImage={ButtonReturn}>{TitleHeader}</HeaderTitle>
    </HeaderContainer>
  );
};

export default Header;
