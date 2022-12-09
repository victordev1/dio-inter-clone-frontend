import React from 'react'
import { Card } from '../../components/Card';
import { UserInfo } from '../../components/UserInfo';
import { Header } from '../../components/Header';

import { Container, Column, Title, TitleHighlight } from './styles';

const Feed = () => {
  return (
    <>
        <Header autenticado={true}/>
        <Container>
            <Column flex={3}>
                <Title>Feed</Title>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </Column>
            <Column flex={1}>
              <TitleHighlight> # RANKING 4 TOP DA SEMANA </TitleHighlight>
                <UserInfo nome="Victor Souza" image="https://avatars.githubusercontent.com/u/66537151?s=400&u=002866de53e571cd8e54cbd8425d5ddbd2b1a26f&v=4" percentual={25}/>
                <UserInfo nome="Victor Souza" image="https://avatars.githubusercontent.com/u/66537151?s=400&u=002866de53e571cd8e54cbd8425d5ddbd2b1a26f&v=4" percentual={65}/>
                <UserInfo nome="Victor Souza" image="https://avatars.githubusercontent.com/u/66537151?s=400&u=002866de53e571cd8e54cbd8425d5ddbd2b1a26f&v=4" percentual={45}/>
                <UserInfo nome="Victor Souza" image="https://avatars.githubusercontent.com/u/66537151?s=400&u=002866de53e571cd8e54cbd8425d5ddbd2b1a26f&v=4" percentual={72}/>
            </Column>
        </Container>
    </>
  )
}

export { Feed }; 
