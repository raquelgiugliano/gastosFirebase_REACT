import "./App.css";
import { createContext, useState } from "react";
import styled from "styled-components";
import { MyRoutes } from "./routers/routes";
import { ThemeProvider } from "styled-components";
import { Light, Dark } from "./styles/Themes";
import { SideBar } from "./components/SideBar";
import { BrowserRouter } from "react-router-dom";
export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");
  const themeStyle = theme === "light" ? Light : Dark;
  return (
    <div>
      <ThemeContext.Provider value={{ setTheme, theme }}>
        <ThemeProvider theme={themeStyle}>
          <BrowserRouter>
            <Container>
              <SideBar />
              <MyRoutes />
            </Container>
          </BrowserRouter>
        </ThemeProvider>
      </ThemeContext.Provider>
    </div>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 65px 1fr;
  background: ${({ theme }) => theme.bgtotal};
`;

export default App;
