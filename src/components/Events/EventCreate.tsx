import React, { useState } from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";

type Inputs = {
  id: number;
  description: string;
  updated_at: string;
};

const EvenCreate = (props: any): JSX.Element => {
  const { tipoEventSeleccionada, onSubmit, handleOnChange, onClose } = props;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  return (
    <form
      name="create-tipoevent-Form"
      className="w-full max-w-lg  bg-slate-100 dark:bg-slate-800 shadow-md rounded"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="md:w-11/12 px-3 mb-6 md:mb-0">
        <label
          className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-1"
          htmlFor="description"
        >
          Tipo Event
        </label>
        <input
          className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
          placeholder="TipoEvento"
          defaultValue={
            tipoEventSeleccionada && tipoEventSeleccionada.description
          }
          {...register("description", {
            required: true,
            minLength: 3,
            maxLength: 41,
          })}
          onChange={(e) => handleOnChange("description", e.target.value)}
        />
        {errors.description && <p>This is required</p>}
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <button
          className="bg-gray-500 hover:bg-gray-400 text-white font-bold py-2 px-4 border-b-4 border-gray-700 hover:border-gray-500 rounded"
          onClick={() => onClose()}
        >
          Cancel
        </button>
        <button className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded">
          Guardar
        </button>
      </div>
    </form>
  );
};

export default EvenCreate;
