import React from 'react';
import { Formik } from 'formik';
import { Tab, Tabs } from 'react-bootstrap';

const RightSide = () => {
  return (
    <div className="w-[300px] flex-shrink-0 bg-white ">
      <div className="w-full h-[52px] bg-primarycolor2 mb-[5px]"></div>
      <div className="p-4 w-full">
        <div className="builder-setting-tabs ">
          <Tabs defaultActiveKey="Metadata" id="uncontrolled-tab-example">
            <Tab eventKey="Metadata" title="Metadata">
              <div className="w-full ">
                <Formik
                  initialValues={{
                    project_name: '',
                    project_detail: '',
                    author_name: '',
                    author_email: '',
                    author_url: '',
                    publisher_name: '',
                    publisher_email: '',
                    publisher_url: '',
                    password: '',
                  }}
                  validate={(values) => {
                    const errors = {};
                    if (!values.author_email) {
                      errors.author_email = 'Required';
                    } else if (
                      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                        values.author_email
                      )
                    ) {
                      errors.author_email = 'Invalid email address';
                    }
                    return errors;
                  }}
                  onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                      alert(JSON.stringify(values, null, 2));
                      setSubmitting(false);
                    }, 400);
                  }}
                >
                  {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    /* and other goodies */
                  }) => (
                    <form onSubmit={handleSubmit} className="flex flex-col ">
                      <div className="flex flex-col gap-2">
                        <input
                          className="custom_input"
                          type="text"
                          name="project_name"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.project_name}
                        />

                        <textarea
                          className="custom_input"
                          name="project_detail"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.project_detail}
                          cols="10"
                          rows="5"
                        />

                        <p className="font-normal text-sm text-black mb-1">
                          Keywords
                          <span className="text-primarycolor2 underline">
                            +Add
                          </span>
                        </p>
                        <p className="font-normal text-sm text-black mb-1">
                          c2e, e-learning, learning experience
                        </p>
                      </div>
                      <div className="my-[16px]">
                        <h1 className="font-medium text-base text-black border-b-[1px] border-solid border-b-[#dddddd] pb-1 mb-[16px]">
                          Author
                        </h1>
                        <label className="custom_label">Name</label>
                        <input
                          className="custom_input border_input"
                          type="text"
                          name="author_name"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.author_name}
                        />
                        <label className="custom_label">Email</label>
                        <input
                          className="custom_input border_input"
                          type="email"
                          name="author_email"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.author_email}
                        />

                        <label className="custom_label">Url</label>
                        <input
                          className="custom_input border_input"
                          type="text"
                          name="author_url"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.author_url}
                        />
                      </div>
                      <div className="mb-[30px]">
                        <h1 className="font-medium text-base text-black border-b-[1px] border-solid border-b-[#dddddd] pb-1 mb-[16px]">
                          Publisher
                        </h1>
                        <label className="custom_label">Name</label>
                        <input
                          className="custom_input border_input"
                          type="text"
                          name="publisher_name"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.publisher_name}
                        />
                        <label className="custom_label">Email</label>
                        <input
                          className="custom_input border_input"
                          type="email"
                          name="publisher_email"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.publisher_email}
                        />

                        <label className="custom_label">Url</label>
                        <input
                          className="custom_input border_input"
                          type="text"
                          name="publisher_url"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.publisher_url}
                        />
                      </div>

                      <h3 className="font-normal text-sm m-0 text-black">
                        Version: 1.0
                      </h3>

                      {/* <button type="submit" disabled={isSubmitting}>
                        Submit
                      </button> */}
                    </form>
                  )}
                </Formik>
              </div>
            </Tab>
            <Tab eventKey="Manifest" title="Manifest">
              <p className="">Manifest</p>
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default RightSide;
