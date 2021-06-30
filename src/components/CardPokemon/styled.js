import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--white);
  max-width: 30rem;
  margin: 0 auto;
  margin-top: 1rem;

  strong,
  h2 {
    color: var(--orange);
  }
`;

export const Error = styled.div`
  color: var(--black);
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    margin-bottom: 1rem;
    width: 60%;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--black);
  box-shadow: 0 4px 8px var(--grayprimary);
  border-radius: 1rem;
  padding: 1rem;
`;

export const ContentImg = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: 1.5rem;
  }
  img {
    width: 160px;
  }
`;
