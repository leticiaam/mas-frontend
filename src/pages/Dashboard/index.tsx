import React from "react";
import { ActivyTable } from "../../components/ActivyTable";
import { Container } from "./styles";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";

export function Dashboard(){
    return(
        <>
            <Header/>
            <Container>
                <Summary />
                <ActivyTable/>
            </Container>

        </>
    )
}