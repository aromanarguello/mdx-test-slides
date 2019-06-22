import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: red;

    pre {
        width: 300px;
        border: 1px solid red;
    }
`;

export default ({ children }) => {
    <Container
        className="container"
        style={{ width: '100vw', height: '100vw', display: 'flex', justifyContent: 'center' }}>
        {children}
    </Container>;
};
