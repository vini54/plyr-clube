import Image from "next/image";
import { useStyles } from "@/styles/cadastro";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { useForm } from "react-hook-form";
import { Checkbox, TextInput, PasswordInput } from "react-hook-form-mantine";

import FormBg from "../../../public/formBg.png";
import Logo from "../../../public/Plyrme.png";
import { Anchor, Button, Grid, Text } from "@mantine/core";

export default function FormPage() {
  const { classes } = useStyles();
  const userSchema = Yup.object({
    name: Yup.string().min(3).required(),
    email: Yup.string().email().required(),
    phone: Yup.string().min(8).required(),
    pass: Yup.string().min(8).max(12).required(),
    repeatPass: Yup.string()
      .min(8)
      .max(12)
      .oneOf([Yup.ref("pass"), null], "Os campos de senha devem ser iguais")
      .required("Os campos de senha devem ser iguais"),
    clube: Yup.string().required(),
    terms: Yup.boolean().required(),
  });

  const { formState, control, handleSubmit } = useForm({
    mode: "onChange",
    resolver: yupResolver(userSchema),
  });
  const { errors, isSubmitting } = formState;

  const handleSend = async (values) => {
    await new Promise((resolve) => {
      setTimeout(resolve, 2000);
    });
    console.log(["Dados enviados: ", values]);
  };

  return (
    <main className={classes.container}>
      <div className={classes.formDiv}>
        <Image src={Logo} alt="logo" draggable={false} style={{ height: 34 }} />

        <Text size={24} weight="bold" color="#666666">
          Crie seu clube na plyr.me
        </Text>

        <form className={classes.formwrap} onSubmit={handleSubmit(handleSend)}>
          <TextInput
            control={control}
            id="name"
            label="Nome"
            placeholder="Digite seu nome"
            name="name"
            error={!!errors.name}
          />

          <Grid gutter={8}>
            <Grid.Col xs={8} span={12}>
              <TextInput
                control={control}
                id="email"
                placeholder="Digite seu email"
                label="Email"
                name="email"
                type="email"
                error={!!errors.email}
              />
            </Grid.Col>

            <Grid.Col xs="auto" span={12}>
              <TextInput
                control={control}
                id="tel"
                placeholder="(00)00000-0000"
                type="tel"
                name="phone"
                label="Celular/Whatsapp"
                error={!!errors.phone}
              />
            </Grid.Col>
          </Grid>

          <Grid gutter={8}>
            <Grid.Col xs={6} span={12}>
              <PasswordInput
                control={control}
                id="password"
                placeholder="Digite sua senha"
                name="pass"
                label="Senha"
                error={!!errors.pass}
              />
            </Grid.Col>

            <Grid.Col xs={6} span={12}>
              <PasswordInput
                control={control}
                id="repeatPass"
                placeholder="Digite sua senha novamente"
                name="repeatPass"
                label="Confirme sua senha"
              />
            </Grid.Col>
          </Grid>

          <Grid align="flex-end" gutter="xs">
            <Grid.Col span={10}>
              <TextInput
                control={control}
                id="clube"
                placeholder="Digite o nome do seu clube"
                name="clube"
                label="Nome do seu clube"
                error={!!errors.clube}
              />
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
            name="terms"
            control={control}
            error={!!errors.terms}
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
            type="submit"
            loading={isSubmitting}
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
        </form>
      </div>

      <Image
        src={FormBg}
        alt="content creator"
        className={classes.imageBg}
        draggable={false}
      />
    </main>
  );
}
