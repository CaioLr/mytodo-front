
import { EmailIcon, LockIcon} from '@chakra-ui/icons'
import {Text, Input, InputGroup, InputLeftElement, Stack } from '@chakra-ui/react'
// import React from 'react'

type InputFieldProps = {
    name: string
    type: string
    label?: string
    onChange?: any
}

const InputField = (props: InputFieldProps): JSX.Element => {

    if(props.type == 'text'){
        return(
            <Stack>
                <Text>{props.label}</Text>
                <InputGroup >
                    <Input id={props.name} name={props.name} type={props.type} border='1px' borderColor='gray.600' onChange={ props.onChange? props.onChange : e=>e}/>
                </InputGroup>
            </Stack>

        )
        
    }

    if(props.type == 'email'){
        return(
            <Stack>
                <Text>{props.label}</Text>
                <InputGroup >
                    <InputLeftElement pointerEvents='none'>
                        <EmailIcon color='gray.900' />
                    </InputLeftElement >
                    <Input id={props.name} name={props.name} type={props.type} border='1px' borderColor='gray.600' onChange={ props.onChange? props.onChange : e=>e}/>
                </InputGroup>
            </Stack>
            
        )
    }

    if(props.type == 'password'){
        return(
            <Stack>
                <Text>{props.label}</Text>
                <InputGroup >
                    <InputLeftElement pointerEvents='none'>
                    <LockIcon color='gray.900' />
                    </InputLeftElement >
                    <Input id={props.name} name={props.name} type={props.type} border='1px' borderColor='gray.600' onChange={ props.onChange? props.onChange : e=>e}/>
                </InputGroup>
            </Stack>
        )
    }

    return (<> </>)
}

export default InputField
