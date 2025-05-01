import React from 'react';
import { useRouteError } from 'react-router';

const ErrorPage = () => {
  const err = useRouteError();

  return (
    <div>
      <h1>OOPS!!</h1>
      <p>Page not found</p>
      {err && <p>{err.message}</p>}
    </div>
  );
};

export default ErrorPage;