// import React from 'react'
import {Center, Stack, Heading, Button, Text, Input, InputGroup, InputLeftElement} from '@chakra-ui/react'
import { QuestionIcon, EmailIcon, LockIcon } from '@chakra-ui/icons'
import { Form, Formik } from 'formik';



const HomePage = () => {
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
            <Form>
              <Stack my={'4'} spacing={'6'}>

              <InputGroup >
                <InputLeftElement pointerEvents='none'>
                  <QuestionIcon color='gray.900' />
                </InputLeftElement >
                <Input name="nome" type="text" border='1px' borderColor='gray.600'/>
              </InputGroup>

              <InputGroup >
                <InputLeftElement pointerEvents='none'>
                  <EmailIcon color='gray.900' />
                </InputLeftElement >
                <Input name="email" type="email" border='1px' borderColor='gray.600'/>
              </InputGroup>

              <InputGroup >
                <InputLeftElement pointerEvents='none'>
                  <EmailIcon color='gray.900' />
                </InputLeftElement >
                <Input name="conf_email" type="email" border='1px' borderColor='gray.600'/>
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

export default HomePage
