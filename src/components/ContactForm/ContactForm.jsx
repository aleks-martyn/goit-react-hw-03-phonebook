import PropTypes from 'prop-types';
import shortid from 'shortid';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import {
  StyledForm,
  FormLabel,
  Input,
  ErrorTextNumber,
  ErrorTextName,
} from './ContactForm.styled';

const schema = yup.object().shape({
  name: yup.string().required(),
  number: yup.string().required(),
});

const FormErrorName = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={message => (
        <ErrorTextName>{'Name a required field'}</ErrorTextName>
      )}
    />
  );
};

const FormErrorNumber = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={message => (
        <ErrorTextNumber>{'Number a required field'}</ErrorTextNumber>
      )}
    />
  );
};

const initialValues = {
  name: '',
  number: '',
};

export const ContactForm = props => {
  const handleSubmit = (values, { resetForm }) => {
    props.onSubmit(values);
    resetForm();
  };

  const nameInputId = shortid.generate();
  const numberInputId = shortid.generate();

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <StyledForm>
        <FormLabel htmlFor={nameInputId}>
          <span>Name</span>
        </FormLabel>
        <Input type="text" name="name" id={nameInputId} />
        <FormErrorName name="name" />

        <FormLabel htmlFor={numberInputId}>
          <span>Number</span>
        </FormLabel>
        <Input type="tel" name="number" id={numberInputId} />
        <FormErrorNumber name="number" />

        <button type="submit">Add contact</button>
      </StyledForm>
    </Formik>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
