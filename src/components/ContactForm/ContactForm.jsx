import { Formik, Form, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid';
// import { object, string, number } from 'yup';
import PropTypes from 'prop-types';
import { Field, Button } from './ContactForm.styled';

export const ContactForm = ({ onSubmit }) => {
  const initialValues = {
    name: '',
    number: '',
  };

  // const schema = object({
  //   name: string().min(1).required(),
  //   number: number().min(7).max(8).required(),
  // });

  return (
    <Formik
      initialValues={initialValues}
      // validationSchema={schema}
      onSubmit={(values, actions) => {
        onSubmit({
          ...values,
          id: nanoid(),
        });
        console.log(values);
        actions.resetForm();
      }}
    >
      <Form>
        <label>
          Name
          <Field type="text" name="name" />
          <ErrorMessage name="name" />
        </label>
        <label>
          Number
          <Field type="tel" name="number" />
          <ErrorMessage name="number" />
        </label>
        <Button type="submit">Add contact</Button>
      </Form>
    </Formik>
  );
};

ContactForm.PropType = {
  onSubmit: PropTypes.func.isRequired,
};
