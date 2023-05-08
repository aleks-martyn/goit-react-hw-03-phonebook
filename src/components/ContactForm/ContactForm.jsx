import PropTypes from 'prop-types';
import shortid from 'shortid';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { FormStyle, FormLabel, Input } from './ContactForm.styled';

const schema = yup.object().shape({
  name: yup.string().required(),
  number: yup.string().required(),
});

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
      <FormStyle>
        <FormLabel htmlFor={nameInputId}>
          <span>Name</span>
        </FormLabel>
        <Input type="text" name="name" id={nameInputId} />
        <ErrorMessage name="name" component="div" />

        <FormLabel htmlFor={numberInputId}>
          <span>Number</span>
        </FormLabel>
        <Input type="tel" name="number" id={numberInputId} />
        <ErrorMessage name="number" component="div" />

        <button type="submit">Add contact</button>
      </FormStyle>
    </Formik>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
