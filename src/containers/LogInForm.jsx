import React from 'react';

import FormItem from '@components/FormItem';

const LogInForm = () => {
  return (
    <div>
      <h2>Log In</h2>
      <form action="get">
      <FormItem
        label="Email:"
        type="input"
        name="email"
        id="email"
        placeholder="email"
      />
      </form>
    </div>
  )
}

export default LogInForm;
