import React from 'react';

import { Container, User, Avatar, Role } from './styles';

interface UserProps {
  nickname: string;
  isBot?: boolean;
}

const UserRow: React.FC<UserProps> = ({ nickname, isBot }) => {
  return (
    <User className={isBot ? 'bot' : ''}>
      <Avatar />

      <strong >{nickname}</strong>

      {isBot && <span>Bot</span>}
    </User >
  );
}

const UserList: React.FC = () => {
  return (
    <Container>
      <Role>Disponível - 2</Role>
      <UserRow nickname="Sn0w" />

      <Role>Offline - 18</Role>
      <UserRow nickname="Holtz" isBot />
      <UserRow nickname="Random User" />
      <UserRow nickname="Random User" />
      <UserRow nickname="Random User" />
      <UserRow nickname="Random User" />
      <UserRow nickname="Random User" />
      <UserRow nickname="Random User" />
      <UserRow nickname="Random User" />
      <UserRow nickname="Random User" />
      <UserRow nickname="Random User" />
      <UserRow nickname="Random User" />
      <UserRow nickname="Random User" />
      <UserRow nickname="Random User" />
      <UserRow nickname="Random User" />
      <UserRow nickname="Random User" />
      <UserRow nickname="Random User" />
      <UserRow nickname="Random User" />
      <UserRow nickname="Random User" />
      <UserRow nickname="Random User" />
      <UserRow nickname="Random User" />
    </Container>
  );
}

export default UserList;