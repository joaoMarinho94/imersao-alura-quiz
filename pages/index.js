import React, { useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

import db from '../db.json';

import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';
import QuizLogo from '../src/components/QuizLogo';

const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  const router = useRouter();
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    router.push(`quiz?name=${name}`);
  };

  const handleChange = ({ target }) => {
    setName(target.value);
  };

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>

        <QuizLogo />

        <Widget>
          <Widget.Header>
            <h1>teste</h1>
          </Widget.Header>
          <Widget.Content>
            <form onSubmit={handleSubmit}>
              <input placeholder="Diz ae seu nome" onChange={handleChange} />
              <button type="submit" disabled={!name}>Jogar</button>
            </form>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1>Quizes da Galera</h1>

            <p>asdas asdasd asdasd </p>
          </Widget.Content>
        </Widget>

        <Footer />

      </QuizContainer>

      <GitHubCorner projectUrl="https://github.com/joaoMarinho94" />
    </QuizBackground>
  );
}
