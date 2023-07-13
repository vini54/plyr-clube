import Image from "next/image";
import { useStyles } from "./styles";

import FormBg from "../../../public/formBg.png";
import Logo from "../../../public/Plyrme.png";
import { Anchor, Button, Checkbox, Grid, Input, Text } from "@mantine/core";

const Form = () => {
  const { classes } = useStyles();

  return (
    <main className={classes.container}>
      <div className={classes.formDiv}>
        <Image src={Logo} draggable={false} style={{ height: 34 }} />

        <Text size={24} weight="bold" color="#666666">
          Crie seu clube na plyr.me
        </Text>

        <div className={classes.formwrap}>
          <Input.Wrapper label="Nome" id="name">
            <Input id="name" placeholder="Digite seu nome" />
          </Input.Wrapper>

          <Grid gutter={8}>
            <Grid.Col xs={8} span={12}>
              <Input.Wrapper label="Email" id="email">
                <Input id="email" placeholder="Digite seu email" />
              </Input.Wrapper>
            </Grid.Col>

            <Grid.Col xs="auto" span={12}>
              <Input.Wrapper label="Celular/Whatsapp" id="tel">
                <Input id="tel" placeholder="(00)00000-0000" />
              </Input.Wrapper>
            </Grid.Col>
          </Grid>

          <Grid gutter={8}>
            <Grid.Col xs={6} span={12}>
              <Input.Wrapper label="Senha" id="password">
                <Input id="password" placeholder="Digite sua senha" />
              </Input.Wrapper>
            </Grid.Col>

            <Grid.Col xs={6} span={12}>
              <Input.Wrapper label="Confirme sua senha" id="repeatPass">
                <Input
                  id="repeatPass"
                  placeholder="Digite sua senha novamente"
                />
              </Input.Wrapper>
            </Grid.Col>
          </Grid>

          <Grid align="flex-end" gutter="xs">
            <Grid.Col span={10}>
              <Input.Wrapper label="Nome do seu clube" id="clube">
                <Input id="clube" placeholder="Digite o nome do seu clube" />
              </Input.Wrapper>
            </Grid.Col>

            <Grid.Col span={2}>
              <Text>.plyr.me</Text>
            </Grid.Col>
          </Grid>

          <Checkbox
            color="orange"
            size="xs"
            styles={{ label: { paddingLeft: 6, marginTop: -4 } }}
            className={classes.checkbox}
            label={
              <Text size="sm" color="#5C5B5B">
                Aceito os{" "}
                <Anchor
                  href="http://www.google.com"
                  target="_blank"
                  underline={false}
                  color="orange"
                >
                  Termos e Condições
                </Anchor>{" "}
                da Plyr.me e confirmo que não publicarei conteúdo adulto no meu
                clube.
              </Text>
            }
          />

          <Button
            color="orange"
            style={{ width: "min-content", fontWeight: 600, margin: "4px 0" }}
            size="md"
          >
            CRIAR CONTA
          </Button>

          <Text size="sm">
            Já tem um clube?{" "}
            <Anchor
              href="http://www.google.com"
              target="_blank"
              underline={false}
              color="orange"
            >
              Faça o login
            </Anchor>
          </Text>
        </div>
      </div>

      <Image src={FormBg} className={classes.imageBg} draggable={false} />
    </main>
  );
};

export default Form;
