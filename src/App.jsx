import React, { useEffect, useState } from "react";
import { Container } from "@mui/material";
import Searcher from "./Components/Searcher";
import getGithubUser from "./constants/users";
import UserCard from "./containers/userCard";

const App = () => {
  const [inputUser, setInputUser] = useState("octocat");
  const [userState, setUserState] = useState("inputUser");
  const [notFound, setNotFound] = useState(false);

  const gettingUser = async (user) => {
    const userResponse = await getGithubUser(user);

    if (userState === "octocat") {
      localStorage.setItem("defaultUser", JSON.stringify(userResponse));
    }

    if (userResponse.message === "NotFound") {
      const { defaultUser } = localStorage;
      setInputUser(defaultUser);
      setNotFound(true);
    } else {
      setUserState(userResponse);
    }
  };

  useEffect(() => {
    gettingUser(inputUser);
  }, [inputUser]);

  return (
    <Container
      sx={{
        background: "whitesmoke",
        width: "80vw",
        borderRadius: "16px",
        marginTop: "40px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Searcher inputUser={inputUser} setInputUser={setInputUser} />
      <UserCard userState={userState} />
    </Container>
  );
};

export default App;
