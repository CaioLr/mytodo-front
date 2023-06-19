// import React from 'react'
import {Image, Center, Stack, Heading, Button, Text, Input, InputGroup, InputLeftElement, Flex} from '@chakra-ui/react'
import { EmailIcon, LockIcon } from '@chakra-ui/icons'
import { Form, Formik } from 'formik';



const LoginPage = () => {
  return (
    <Center h={'100vh'} bg={'gray.300'}>
      <Stack boxShadow={'md'} bg={'whiteAlpha.700'}  w={'60%'} p='20' rounded={'md'}>

        <Flex>
          <Image src={"/src/assets/list.png"} maxW={'50px'} marginRight={'15px'} ></Image>
          <Heading as='h1' alignSelf="start">My To Do</Heading>
        </Flex>
        

        <Text fontSize={'lg'} color={'gray.600'}>
         Faça seu login para continuar.
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
            <Form>
              <Stack my={'4'} spacing={'6'}>

              <InputGroup >
                <InputLeftElement pointerEvents='none'>
                  <EmailIcon color='gray.900' />
                </InputLeftElement >
                <Input name="email" type="email" border='1px' borderColor='gray.600'/>
              </InputGroup>

              <InputGroup>
                <InputLeftElement pointerEvents='none'>
                  <LockIcon color='gray.900' />
                </InputLeftElement>
                <Input name="password" type="password" border='1px' borderColor='gray.600'/>
              </InputGroup>

              </Stack>

              <Button
                isLoading={isSubmitting}
                loadingText="Entrando"
                size='lg'
                colorScheme='blue'
                type='submit'
                w={'100%'}
              >
                Entrar
              </Button>

            </Form>

          )}
        </Formik>

        <Stack justify={'center'} color={'gray.600'} spacing={'3'}>

          <Text as={'div'} textAlign={'center'}>
            <span>Não tem uma conta? </span>
            <Button colorScheme='blue' variant={'link'}>
              Cadastre-se
            </Button>
          </Text>
          <Button colorScheme='blue' variant={'link'}>
            Esqueceu a senha?
          </Button>
        </Stack>
      </Stack>
    </Center>
  )
}

export default LoginPage
