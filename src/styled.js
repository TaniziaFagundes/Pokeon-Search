import styled from "styled-components";

export const Container = styled.div`
  height: 80vh;
  width: 60vw;
  margin: 3rem auto;
  border-radius: 15rem 5rem 15rem 5rem;
  box-shadow: 0 4px 6px var(--orange);

  h1 {
    display: flex;
    justify-content: center;
    color: var(--grayprimary);
    align-items: center;
    font-size: 2.4rem;
    padding: 1rem;
    text-shadow: 0 1px 4px var(--orange);
  }

  form {
    display: flex;
    justify-content: center;
    padding: 1rem;
  }

  button {
    display: flex;
    align-items: center;
    font-size: 1.2rem;
    background-color: var(--red);
    border: none;
    color: var(--white);
    font-weight: bold;
    padding: 0.5rem 1rem;
    margin-left: 0.1rem;

    img {
      width: 2rem;
      margin-left: 0.5rem;
    }
  }

  input {
    padding: 0.5rem 1rem;
  }
`;
