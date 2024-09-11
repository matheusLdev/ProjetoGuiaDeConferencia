import React from 'react';
import {Container, ContainerBtn, ContainerInfo, ContainerMain} from './styles';
import EditIcon from '../../assets/images/edit.png';
import Header from '../../components/Header';
import Button from '../../components/Button';
import Colors from '../../styles/Colors';
import {InputText} from '../../components/InputText';
import {useAlert} from '../../hooks/useAlert';

export const EditRegister = () => {
  const {showAlert, AlertComponent} = useAlert();

  const updateInfoUser = () => {
    showAlert('Cadastro atualizado com sucesso', 'success');
  };

  return (
    <ContainerMain>
      <AlertComponent />
      <Header ButtonReturn={true} TitleHeader="Editar Cadastro" />
      <Container>
        <ContainerInfo>
          <InputText
            id="firstName"
            label="Nome"
            placeholder="Digite seu nome"
            icon={EditIcon}
          />
          <InputText
            id="lastName"
            label="Sobrenome"
            placeholder="Digite seu sobrenome"
            icon={EditIcon}
          />
          <InputText
            id="ticketPrice"
            label="Valor da Passagem"
            placeholder="Digite o valor da passagem"
            icon={EditIcon}
          />
        </ContainerInfo>
        <ContainerBtn>
          <Button text="VOLTAR" onPress={() => {}} color={Colors.off_white} />
          <Button text="SALVAR" onPress={updateInfoUser} />
        </ContainerBtn>
      </Container>
    </ContainerMain>
  );
};
