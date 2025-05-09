import React, { useState } from "react";
import { useForm } from "react-hook-form";

type Inputs = {
  id: number;
  author_id: number;
  bitacora_date: string;
};

const BitacoraEdit = (props: any): JSX.Element => {
  const { bitacoraSelected2, onSubmitE, handleOnChangeE, onClose } = props;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  return (
    <form
      name="edit"
      className="w-full max-w-lg  bg-slate-100 dark:bg-slate-800 shadow-md rounded"
      onSubmit={handleSubmit(onSubmitE)}
    >
      <div className="md:w-11/12 px-3 mb-6 md:mb-0">
        <label
          className="block uppercase tracking-wide  text-gray-900 dark:text-white text-xs font-bold mb-2"
          htmlFor="author_id"
        >
          Author
        </label>
        <input
          className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
          type="number"
          placeholder="Gonzalez"
          name="author_id"
          defaultValue={bitacoraSelected2 && bitacoraSelected2.author_id}
          {...register("author_id", {
            required: "Required",
            minLength: 1,
            maxLength: 9,
          })}
          onChange={(e) => handleOnChangeE("author_id", e.target.value)}
        />
        {errors.author_id && (
          <p className="text-red-600 text-1xl font-bold">
            This field is required
          </p>
        )}{" "}
      </div>

      <div className="md:w-11/12 px-3 mb-6 md:mb-0">
        <label
          className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
          htmlFor="bitacora_date"
        >
          Fecha Bitacora
        </label>
        <input
          className="appearance-none block w-full  text-gray-900 dark:text-white border rounded py-3 px-4"
          type="text"
          placeholder="Gonzalez"
          name="bitacora_date"
          defaultValue={bitacoraSelected2 && bitacoraSelected2.bitacora_date}
          {...register("bitacora_date", {
            required: "Required",
            minLength: 3,
            maxLength: 41,
          })}
          onChange={(e) => handleOnChangeE("bitacora_date", e.target.value)}
        />
        {errors.bitacora_date && errors.bitacora_date.bitacora_date}
      </div>
      <div className="invisible md:invisible md:w-1/2 px-3 mb-6 md:mb-0">
        <label
          className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
          htmlFor="id"
        >
          ID
        </label>
        <input
          className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
          type="number"
          placeholder="Gonzalez"
          name="id"
          defaultValue={bitacoraSelected2 && bitacoraSelected2.id}
          {...register("id", {
            required: "Required",
            minLength: 1,
            maxLength: 9,
          })}
          onChange={(e) => handleOnChangeE("id", e.target.value)}
        />
        {errors.id && errors.id.id}
      </div>

      <br></br>
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

export default BitacoraEdit;
