import React from "react";
import { Container } from "./styles";
import { Content } from "./styles";

export function Header(){
    return(
        <Container>
            <Content>
            <h1> My Activies Space</h1>
            <div>
                <button type="button">
                    Nova Unidade CUrricular
                </button>
                <button type="button">
                Nova Atividade
                </button>
            </div>
            </Content>
        </Container>
    )
}