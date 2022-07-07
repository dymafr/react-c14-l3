import React from 'react';
import { useForm } from 'react-hook-form';

function App() {
  const { register, handleSubmit, getValues, watch } = useForm();

  watch();

  function submit(values) {
    console.log(values);
  }

  console.log(getValues());

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ backgroundColor: '#fefefe', height: '100vh', width: '100%' }}
    >
      <form onSubmit={handleSubmit(submit)}>
        <div className="d-flex flex-column mb-20">
          <label htmlFor="name" className="mb-5">
            Nom
          </label>
          <input id="name" type="text" {...register('name')} />
        </div>
        <button className="btn btn-primary">Sauvegarder</button>
      </form>
    </div>
  );
}

export default App;
