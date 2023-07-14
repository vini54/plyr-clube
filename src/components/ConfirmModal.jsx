const { Modal, Flex, Title, Button } = require("@mantine/core");
const { default: Image } = require("next/image");
import { useRouter } from "next/router";
import Illustration from "../../public/Problem-Solving.png";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const ConfirmModal = ({ open, onClose, closeBtn }) => {
  const router = useRouter();

  const handleInit = () => {
    router.push("/");
  };

  return (
    <Modal
      opened={open}
      onClose={onClose}
      centered
      withCloseButton={closeBtn}
      size="md"
    >
      <Flex
        gap="md"
        justify="center"
        align="center"
        direction="column"
        wrap="nowrap"
      >
        <Image
          style={{
            width: "80%",
            height: "auto",
            aspectRatio: "1.4 / 1",
            objectFit: "cover",
          }}
          src={Illustration}
          alt="Problem Solving"
        />

        <Title
          order={1}
          weight="bolder"
          align="center"
          color="#26262C"
          className={inter.className}
        >
          Obrigado por se cadastrar
        </Title>

        <Button
          color="orange"
          style={{ width: "min-content", fontWeight: 600 }}
          size="md"
          onClick={handleInit}
        >
          Inicio
        </Button>
      </Flex>
    </Modal>
  );
};
