import React from "react";

const QuestionAnswer = () => {
  return (
    <div>
      <h1>Q:1-What is difference between props and state ?</h1>
      <p>
        Answer: State is the local state of the component which cannot be
        accessed and modified outside of the component. It's equivalent to local
        variables in a function. Props, on the other hand, make components
        reusable by giving components the ability to receive data from their
        parent component in the form of props.
      </p>
      <h1>Q:2-How to work useState ?</h1>
      <p>
        Answer: useState initialValue is the value want to start with, and state
        is the current state value that can be used in component. The setState
        function can be used to update the state , triggering a re-render of
        component
      </p>
      <h1>Q:3- What works useEffect other than data load ?</h1>
      <p>
        Whenever we need to make use of side effects in our application,
        useEffect is the way to go. effects run after every completed render,
        but can choose to fire them only when certain values have changed. This
        hook uses an array of "dependencies": variables or states that useEffect
        listen to for changes. When their values change, the main body of the
        useEffect hook is executed. The return statement of this hook is used to
        clean methods that are already running, such as timers. The first time
        this hook is called, its main body is the one that is going to be
        evaluated first. All other subsequent times the hook is called, the
        return statement will be evaluated first, and, after that, the hook's
        main body. This behaviour is especially useful for cleaning code that is
        already running before run it again, which enable us to prevent memory
        leaks.
      </p>
      <h1>Q:4- How does react work?</h1>
      <p>
        ReactJS divides the UI into isolated reusable pieces of code known as
        components. React components work similarly to JavaScript functions as
        they accept arbitrary inputs called properties or props. It's possible
        to have as many components as necessary without cluttering code.
      </p>
    </div>
  );
};

export default QuestionAnswer;
