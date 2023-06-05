import { useEffect } from "react";
import styled from "styled-components";
import { UserAuth } from "../context/AuthContext";

export function Home() {
  const { user, logOut } = UserAuth();
  const cerrarSesion = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <h1>Bienvenido {user.displayName}</h1>
      <button onClick={cerrarSesion}>Cerrar sesión</button>
    </Container>
  );
}

const Container = styled.div``;
