import React, { useState } from 'react';
import { useRouter } from 'next/router';

import db from '../db.json';

import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';
import QuizContainer from '../src/components/QuizContainer';
import QuizLogo from '../src/components/QuizLogo';
import Input from '../src/components/Input';
import Button from '../src/components/Button';

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
            <form onSubmit={handleSubmit} autoComplete="off">
              <Input
                name="name"
                value={name}
                onChange={handleChange}
                placeholder="Diz ae seu nome"
              />
              <Button type="submit" disabled={!name}>Jogar</Button>
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
