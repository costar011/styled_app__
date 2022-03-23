import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || ""};

  display: flex;
  flex-direction: ${(props) => (props.direction === "row" ? "row" : "column")};

  background-color: ${(props) => props.bgColor || "#fff"};
`;

class App extends React.Component {
  render() {
    return (
      <Wrapper>
        <Wrapper width="100%" height="60px" bgColor="#7088ff"></Wrapper>

        <Wrapper width="100%" height="600px" direction="row">
          <Wrapper width="10%" height1="100%" bgColor="#827db8"></Wrapper>
          <Wrapper width="90%" height1="100%" bgColor="#5548db"></Wrapper>
        </Wrapper>

        <Wrapper width="100%" height="400px" direction="row">
          <Wrapper width="50%" height="100%" bgColor="#8fecf2"></Wrapper>
          <Wrapper width="50%" height="100%" bgColor="#32cfd9"></Wrapper>
        </Wrapper>

        <Wrapper width="100%" height="500px">
          <Wrapper width="100%" height="50%" bgColor="#7be8c0">
            <Wrapper width="50%" height="100%" bgColor="#49f2b4"></Wrapper>
          </Wrapper>
          <Wrapper width="100%" height="50%" bgColor="#83e874">
            <Wrapper width="50%" height="100%" bgColor="#50db3b"></Wrapper>
          </Wrapper>
        </Wrapper>

        <Wrapper width="100%" height="700px" direction="row">
          <Wrapper width="30%" height="100%" bgColor="#8aafeb"></Wrapper>
          <Wrapper width="40%" height="100%" bgColor="#5891ed"></Wrapper>
          <Wrapper width="30%" height="100%" bgColor="#1663e0"></Wrapper>
        </Wrapper>
      </Wrapper>
    );
  }
}

export default App;
