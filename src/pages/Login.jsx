import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5));
    display: flex;
    align-items: center;
    justify-content: center;
`
const Wrapper = styled.div`
    width: 25%;
    padding: 20px;
    background-color: white;
    ${mobile({ width: "75%" })}
`
const Title = styled.h1`
    font-size: 24px;
    font-weight: 600;
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
`
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0px;
    padding: 10px;
`
const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    font-size: 16px;
    font-weight: 600;
    margin-buttom: 10px;
`
const LinkContainer = styled.div`
    display: flex;
    justify-content: space-between;
`
const Link = styled.a`
    margin: 10px 0px;
    font-size:12px;
    text-decoration: underline;
    cursor: pointer;
`
const Login = () => {
    return (
        <Container>
            <Wrapper>
                <Title>USER LOGIN</Title>
                <Form>
                    <Input placeholder='Username' />
                    <Input placeholder='Password' />
                    <Button>LOGIN</Button>
                    <LinkContainer>
                        <Link>Forgot Password?</Link>
                        <Link>CREATE A NEW ACCOUNT</Link>
                    </LinkContainer>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Login
