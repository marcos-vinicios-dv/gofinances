import React from 'react';

import {
  Container,
  Header,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  UserWrapper,
  IconPower,
  HighLightCards,
  Transactions,
  Title,
  TransactionsList,
} from './styles';
import { HighlightCard } from '../../components/HighlightCard';
import {
  TransactionCard,
  TransactionCardProps,
} from '../../components/TransactionCard';

export interface DataListProps extends TransactionCardProps {
  id: string;
}

export const Dashboard = () => {
  const data: DataListProps[] = [
    {
      id: '1',
      type: 'positive',
      amount: 'R$ 12.000,00',
      category: { icon: 'dollar-sign', name: 'Vendas' },
      date: '13/10/2021',
      title: 'Desenvolvimento de Site',
    },
    {
      id: '2',
      type: 'negative',
      amount: 'R$ 59,00',
      category: { icon: 'coffee', name: 'Alimentação' },
      date: '13/10/2021',
      title: 'Hamburgueria Pizzy',
    },
    {
      id: '3',
      type: 'negative',
      amount: 'R$ 1.200,00',
      category: { icon: 'shopping-bag', name: 'Casa' },
      date: '13/10/2021',
      title: 'Aluguel do Apartamento',
    },
  ];

  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo
              source={{
                uri: 'https://avatars.githubusercontent.com/u/70670474?v=4',
              }}
            />
            <User>
              <UserGreeting>Olá,</UserGreeting>
              <UserName>Marcos</UserName>
            </User>
          </UserInfo>
          <IconPower name="power" />
        </UserWrapper>
      </Header>

      <HighLightCards>
        <HighlightCard
          title="Entradas"
          amount="R$ 17.400,00"
          lastTransaction="Ultima transação dia 13 de abril"
          type="up"
        />
        <HighlightCard
          title="Saídas"
          amount="R$ 17.400,00"
          lastTransaction="Ultima transação dia 13 de abril"
          type="down"
        />
        <HighlightCard
          title="Total"
          amount="R$ 17.400,00"
          lastTransaction="Ultima transação dia 13 de abril"
          type="total"
        />
      </HighLightCards>

      <Transactions>
        <Title>Listagem</Title>
        <TransactionsList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <TransactionCard data={item} />}
        />
      </Transactions>
    </Container>
  );
};
