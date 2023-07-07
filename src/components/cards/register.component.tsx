import {Center, Stack, Heading, Button, Text} from '@chakra-ui/react'

import { Form, Formik } from 'formik';

import InputField from '../inputs/InputField' 
import api from '../../services/api';
import { SetStateAction, useState } from 'react';


const RegisterPage = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
   
    // const location = useLocation();


    async function handleRegister(e:any) {
      e.preventDefault();

      const data = {
      name,
      email,
      password,
      "conf_password":confirmPassword,
      };
      
      try {
        api.post('api/user/store', data)
        .then(async (res) =>{
          if(res.status === 200){

            const responseLogin = await api.post('api/auth/login', { email, password });
            localStorage.setItem('access_token', responseLogin.data.access_token);
          }
        })
      } catch (err) {
        alert('Erro no cadastro, tente novamente.');
      }

      
    }

  return (
    <Center h={'100vh'} bg={'gray.300'}>
      <Stack boxShadow={'md'} bg={'whiteAlpha.700'}  w={'60%'} p='20' rounded={'md'}>

        <Heading as='h1' alignSelf="start">Cadastrar-se</Heading>
        

        <Text fontSize={'lg'} color={'gray.600'}>
         Faça seu cadastro.
        </Text>

        <Formik
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              console.log(values);
              setSubmitting(false);
            }, 1000);
          } }
          initialValues={{email: "", password: ""}}     
             >
          {({isSubmitting}) => (
            <Form onSubmit={handleRegister}>
              <Stack my={'4'} spacing={'6'}>

                <InputField name="name" type="text" label="Nome" onChange={(e: { target: { value: SetStateAction<string>; }; }) => setName(e.target.value)}></InputField>
                <InputField name="email" type="email" label="Email" onChange={(e: { target: { value: SetStateAction<string>; }; }) => setEmail(e.target.value)}></InputField>
                <InputField name="password" type="password" label="Senha" onChange={(e: { target: { value: SetStateAction<string>; }; }) => setPassword(e.target.value)}></InputField>
                <InputField name="conf_password" type="password" label="Confirme sua Senha" onChange={(e: { target: { value: SetStateAction<string>; }; }) => setConfirmPassword(e.target.value)}></InputField>
              </Stack>

              <Button
                isLoading={isSubmitting}
                loadingText="Registrando"
                size='lg'
                colorScheme='blue'
                type='submit'
                w={'100%'}
              >
                Cadastrar-se
              </Button>

            </Form>

          )}
        </Formik>

        
      </Stack>
    </Center>
  )
}

export default RegisterPage