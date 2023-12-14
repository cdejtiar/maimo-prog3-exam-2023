import React from 'react';
import styles from './Search.module.css';
import { Formik } from 'formik';
import { useAppContext } from '../../contexts/AppContext';

const Search = () => {
  const { handleGetShows } = useAppContext();
  return (
    <section className={styles[`search`]}>
      <h2>Search shows</h2>
      <div className={styles.form_container}>
        <Formik
          initialValues={{ show: '' }}
          validate={(values) => {
            const errors = {};
            if (!values.show) {
              errors.show = '* Required';
            }
            return errors;
          }}
          onSubmit={(values) => {
            handleGetShows(values.show);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => (
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="show"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.show}
                className={styles[`input`]}
              />
              <div className={styles.error}>
                {errors.show && touched.show && errors.show}
              </div>
              <button className={styles[`btn`]} type="submit">
                SEARCH
              </button>
            </form>
          )}
        </Formik>
      </div>
    </section>
  );
};

export default Search;
