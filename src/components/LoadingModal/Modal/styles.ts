import styled from 'styled-components';

export const BG = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  z-index: 100000;
  overflow: hidden;

  background: rgba(73, 129, 194, 0.36);
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  position: relative;
  width: 100%;
  height: 100%;
  max-width: 25rem;
  max-height: 15rem;
  padding: 4rem 1rem 2rem;

  background: white;
  border-radius: 2px;

  box-shadow: 0 0 0 50vmax rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 0 0 0 50vmax rgba(0, 0, 0, 0.5);
  -webkit-box-shadow: 0 0 0 50vmax rgba(0, 0, 0, 0.5);
`;

export const Message = styled.p`
  margin-top: 2rem;

  color: black;
  font-size: 1rem;
  text-align: center;
`;
