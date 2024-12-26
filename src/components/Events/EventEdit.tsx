import React, { useState } from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";

type Inputs = {
  id: number;
  tipo_event_id: number;
  description: string;
  updated_at: string;
};

const EventEdit = (props: any): JSX.Element => {
  const { eventSeleccionada, onSubmitE, handleOnChangeE, onClose } = props;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  return (
    <form
      name="editForm"
      className="w-full max-w-lg  bg-slate-100 dark:bg-slate-800 shadow-md rounded"
      onSubmit={handleSubmit(onSubmitE)}
    >
      <div className="md:w-11/12 px-3 mb-6 md:mb-0">
        <label
          className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-1"
          htmlFor="description"
        >
          Event
        </label>
        <input
          className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
          placeholder="TipoEvento"
          defaultValue={eventSeleccionada && eventSeleccionada.description}
          {...register("description", {
            required: true,
            minLength: 3,
            maxLength: 41,
          })}
          onChange={(e) => handleOnChangeE("description", e.target.value)}
        />
        {errors.description && <p>This is required</p>}
      </div>

      <div className="md:w-11/12 px-3 mb-6 md:mb-0">
        <label
          className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-1"
          htmlFor="updated_at"
        >
          Fecha Tipo Event
        </label>
        <input
          className="appearance-none block w-full border border-grey-lighter rounded py-3 px-4"
          type="text"
          placeholder="fechaUpdated"
          defaultValue={eventSeleccionada && eventSeleccionada.updated_at}
          {...register("updated_at", {
            required: true,
          })}
          onChange={(e) => handleOnChangeE("updated_at", e.target.value)}
        />
        {errors.updated_at && errors.updated_at.updated_at}
      </div>

      <div className="invisible md:invisible md:w-1/2 px-3 mb-6 md:mb-0">
        <input
          className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
          type="number"
          defaultValue={eventSeleccionada && eventSeleccionada.id}
          {...register("id", {
            required: "Required",
            minLength: 1,
            maxLength: 9,
          })}
          onChange={(e) => handleOnChangeE("id", e.target.value)}
        />
        <input
          className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
          type="number"
          defaultValue={eventSeleccionada && eventSeleccionada.tipo_event_id}
          {...register("tipo_event_id", {
            required: "Required",
            minLength: 1,
            maxLength: 9,
          })}
          onChange={(e) => handleOnChangeE("tipo_event_id", e.target.value)}
        />
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

export default EventEdit;
