import { Container } from "@mantine/core";
import { LoginForm } from "src/components/molecules/loginForm";

const Login = () => {

  return (
    <Container size='xs' mt='lg'>
      <LoginForm />
    </Container>
  );
}

export default Login;