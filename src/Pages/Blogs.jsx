import React from "react";
import ReactToPdf from "react-to-pdf";

export default function () {
  return (
    <div>
      <ReactToPdf>
        {({ toPdf, targetRef }) => (
          <div>
            <div className="flex justify-center mt-4">
              <button onClick={toPdf} className="btn btn-primary  mx-auto">
                DownLoad blog
              </button>
            </div>

            <div ref={targetRef} className="container mx-auto">
              <h1 className="text-4xl font-bold mb-10 mt-24  text-center">
                QUESTION & ANSWER
              </h1>

              <p className="text-2xl font-bold mb-5">
                1. Tell us the differences between uncontrolled and controlled
                components.
              </p>
              <p className="text-xl font-semibold mb-5">
                ANSWER: <br /> In React, controlled components refer to
                components that have their state and <br /> behavior controlled
                by the parent component. These components rely on props passed
                down <br /> from the parent component to update their state and
                behavior. Uncontrolled components <br /> refer to components
                that manage their own state internally.
              </p>
              <p className="text-2xl font-bold mb-5">
                {" "}
                2.How to validate React props using PropTypes?
              </p>
              <p className="text-xl font-semibold mb-5">
                ANSWER: <br />
                any : The prop can be of any data type. <br /> bool : The prop
                should be a Boolean. <br /> number : The prop should be a
                number. <br /> string : The prop should be a string. <br /> func
                : The prop should be a function. <br /> array : The prop should
                be an array. <br /> object : The prop should be an object.
              </p>
              <p className="text-2xl font-bold mb-5">
                3. Tell us the difference between nodejs and express js.
              </p>
              <p className="text-xl font-semibold mb-5">
                ANSWER: <br />
                NodeJS is an event-driven, non-blocking I/O model using
                JavaScript as its main language. <br /> It helps to build
                scalable network applications. Express is a minimal and flexible{" "}
                <br /> Node. js web application framework that provides a robust
                set of features for web <br /> and mobile applications.
              </p>
              <p className="text-2xl font-bold mb-5">
                {" "}
                4.What is a custom hook, and why will you create a custom hook?
              </p>
              <p className="text-xl font-semibold mb-10">
                ANSWER: <br />
                A custom hook is a special JavaScript function whose name starts
                with <br /> applications is ReactJS. React, developed by
                Facebook, 'use' and can be used to call other hooks. Let's take
                a look at <br /> some major differences between a custom React
                JS hook and React JS components: A custom hook does not <br />{" "}
                require a specific signature.A custom hook is a special
                JavaScript function whose name starts with 'use' <br /> and can
                be used to call other hooks. Let's take a look at some major
                differences between a custom React JS hook and React JS
                components: A custom hook does not require a specific signature.{" "}
                <br />
              </p>
            </div>
          </div>
        )}
      </ReactToPdf>
    </div>
  );
}
