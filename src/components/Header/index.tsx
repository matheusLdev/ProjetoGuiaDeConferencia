import React from 'react';
import Arrow from '../../assets/images/arrow.png';
import {HeaderProps} from '../../types';
import {HeaderContainer, HeaderTitle, ImgStyled} from './styles';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native';

const Header = ({ButtonReturn, TitleHeader}: HeaderProps) => {
  const navigation = useNavigation();

  return (
    <HeaderContainer>
      {ButtonReturn && (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ImgStyled source={Arrow} />
        </TouchableOpacity>
      )}
      <HeaderTitle hasImage={ButtonReturn}>{TitleHeader}</HeaderTitle>
    </HeaderContainer>
  );
};

export default Header;
