import React from 'react';
import { Container, TextInput, Title } from './styles';

const DescriptionInput = (props) => {
    return (
        <Container>
            <Title>{props.title}</Title>
            <TextInput
                placeholder={props.placeholder}
                rows={7}
            />
        </Container>
    )
}

export default DescriptionInput; 