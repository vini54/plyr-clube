import { Button, Overlay } from "@mantine/core";
import { useStyles } from "@/styles/home";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { classes } = useStyles();
  const router = useRouter();

  return (
    <main className={classes.wrapBg + " " + inter.className}>
      <Overlay
        gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"
        opacity={1}
        zIndex={0}
      />

      <div className={classes.container}>
        <h1 className={classes.title}>
          Seu caminho para a descoberta começa aqui.
        </h1>
        <p className={classes.description}>
          o lugar perfeito onde criadores talentosos e apaixonados se conectam
          diretamente com assinantes ávidos por conteúdo único com um público
          dedicado.
        </p>

        <Button
          color="orange"
          radius="lg"
          size="lg"
          className={inter.className}
          style={{ fontWeight: 500 }}
          onClick={() => router.push("/cadastro")}
        >
          Cadastre-se
        </Button>
      </div>
    </main>
  );
}
