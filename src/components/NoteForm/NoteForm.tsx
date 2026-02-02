import css from "./NoteForm.module.css";
import { Formik, Form, Field, type FormikHelpers, ErrorMessage } from "formik";

interface FormValues {
  title: string;
  tag: string;
  content: string;
}

const initialFormValues: FormValues = {
  title: "",
  tag: "",
  content: "",
};
export default function NoteForm() {
  const handleSubmit = (
    values: FormValues,
    formikHelpers: FormikHelpers<FormValues>,
  ) => {
    formikHelpers.resetForm();
  };
  return (
    <Formik initialValues={initialFormValues} onSubmit={handleSubmit}>
      <Form className={css.form}>
        <div className={css.formGroup}>
          <label htmlFor="title">Title</label>
          <Field id="title" type="text" name="title" className={css.input} />
          <ErrorMessage name="title" className={css.error} />
        </div>

        <div className={css.formGroup}>
          <label htmlFor="content">Content</label>
          <Field
            as="textarea"
            id="content"
            name="content"
            rows={8}
            className={css.textarea}
          />
          <ErrorMessage name="content" className={css.error} />
        </div>

        <div className={css.formGroup}>
          <label htmlFor="tag">Tag</label>
          <Field as="select" id="tag" name="tag" className={css.select}>
            <option value="Todo">Todo</option>
            <option value="Work">Work</option>
            <option value="Personal">Personal</option>
            <option value="Meeting">Meeting</option>
            <option value="Shopping">Shopping</option>
          </Field>
          <ErrorMessage name="tag" className={css.error} />
        </div>

        <div className={css.actions}>
          <button type="button" className={css.cancelButton}>
            Cancel
          </button>
          <button type="submit" className={css.submitButton} disabled={false}>
            Create note
          </button>
        </div>
      </Form>
    </Formik>
  );
}
