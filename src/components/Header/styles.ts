import styled from 'styled-components/native';
import Colors from '../../styles/Colors';
import Fonts from '../../styles/Fonts';

export const HeaderContainer = styled.View`
  min-height: 140px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ImgStyled = styled.Image`
  width: 50px;
  height: 50px;
  margin-right: 8px;
`;

export const HeaderTitle = styled.Text<{hasImage: boolean}>`
  width: ${({hasImage}) => (hasImage ? '250px' : 'auto')};
  font-family: ${Fonts.Roboto_serif_regular};
  font-size: 32px;
  color: ${Colors.black};
  text-align: center;
`;
