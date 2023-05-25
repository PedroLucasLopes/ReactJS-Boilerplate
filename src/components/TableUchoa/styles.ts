import styled from 'styled-components';
import { Table as ChakraTable } from '@chakra-ui/react';

export const TableStyled = styled(ChakraTable)`
  border-collapse: separate !important;
  border-spacing: 0 1rem !important;

  thead tr {
    background-color: transparent;
  }

  tr {
    margin-bottom: 1rem;
    border-radius: 4px !important;
  }

  th,
  td {
    width: auto;
    max-width: 500px;

    border-bottom: 0;
    text-align: center;
    white-space: nowrap;

    :first-child {
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
    }

    :last-child {
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
    }
  }

  td {
    padding: 1rem;

    color: #0b5da7;
  }

  th {
    padding: 0.25rem 1rem;

    color: #838285;
    font-weight: normal;
    text-transform: none;
    letter-spacing: normal;
  }

  th,
  td,
  input,
  select {
    font-size: 1rem !important;
  }
`;
