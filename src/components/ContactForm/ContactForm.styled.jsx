import styled from 'styled-components';
import { Field as FormikField } from 'formik';

export const Field = styled(FormikField)`
  display: flex;
  flex-direction: column;

  padding: 10px;
  border-radius: 5px;
  border: 1px solid lightgrey;
  margin-bottom: 15px;
`;

export const Button = styled.button`
  padding: 10px;
  border-radius: 5px;
  border: 2px solid lightgreen;
  background-color: lightpink;
`;
