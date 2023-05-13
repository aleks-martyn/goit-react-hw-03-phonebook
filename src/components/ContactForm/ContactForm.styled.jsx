import styled from '@emotion/styled';
import { Form, Field } from 'formik';

export const StyledForm = styled(Form)`
  position: relative;
  display: inline-flex;
  flex-direction: column;
  padding: 20px;
  padding-right: 200px;
  border: 1px solid #000;
`;

export const FormLabel = styled.label`
  margin-bottom: 10px;
  font-size: 17px;
  font-weight: 500;
`;

export const Input = styled(Field)`
  margin-bottom: 25px;
`;

export const ErrorTextName = styled.p`
  position: absolute;
  top: 70px;
  width: 200px;
  margin: 0;
  color: red;
`;

export const ErrorTextNumber = styled.p`
  position: absolute;
  top: 147px;
  width: 200px;
  margin: 0;
  color: red;
`;