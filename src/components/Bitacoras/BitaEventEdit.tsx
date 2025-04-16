import React, { useState } from "react";
import {
  useForm,
  Controller,
  SubmitHandler,
  DefaultValues,
} from "react-hook-form";
import Select from "react-select";
import WYSIWYGEditor from "./WYSIWYG";
interface EditFormValues {
  id: number;
  bitacora_id: number;
  tipo_event_id: number;
  events_id: number;
  description: string;
  event_date: string;
  image: boolean;
}

const BitaEventEdit = (props: any): JSX.Element => {
  const {
    bitacoraSeleccionada2,
    onSubmitE,
    handleOnChangeE,
    handleOnChange,
    typeEvents1,
    eventsId,
    setEventId,
    onClose,
  } = props;

  const editFormDefaultValues: DefaultValues<EditFormValues> = {
    tipo_event_id: bitacoraSeleccionada2.tipo_event_id,
    events_id: bitacoraSeleccionada2.events_id,
    description: bitacoraSeleccionada2.description,
    event_date: bitacoraSeleccionada2.event_date,
    image: bitacoraSeleccionada2.image,
  };

  const [isImage, setIsImage] = useState(bitacoraSeleccionada2.image);

  const handleOnChange1 = () => {
    setIsImage(!isImage);
    handleOnChangeE("image", !isImage);
  };

  const {
    register: registerEditField,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<EditFormValues>({
    defaultValues: editFormDefaultValues,
  });

  return (
    <form
      name="edit-form"
      className="w-full max-w-lg  bg-gray-600 shadow-md rounded"
      onSubmit={handleSubmit(onSubmitE)}
    >
      <div className="md:w-11/12 px-3 mb-6 md:mb-0">
        <label
          className="block uppercase tracking-wide text-xs font-bold mb-2"
          htmlFor="id"
        >
          Edit Event: {bitacoraSeleccionada2.id}
        </label>
      </div>

      <div className="md:w-11/12 px-3 mb-6 md:mb-0">
        <label
          className="block uppercase tracking-wide text-xs font-bold mb-2"
          htmlFor="id"
        >
          Tipos Events
        </label>
        <Controller
          name="tipo_event_id"
          control={control}
          render={({ field: { onChange, value, name, ref } }) => {
            const currentSelection = typeEvents1.find(
              (c) => c.value === bitacoraSeleccionada2.tipo_event_id
            );
            console.log("CurrentSelection", currentSelection);

            return (
              <Select
                className="search-line"
                ref={ref}
                options={typeEvents1}
                defaultValue={currentSelection}
                name={name}
                onChange={(val) => {
                  onChange(val.value);
                  setEventId(val.value);
                  handleOnChange("tipo_event_id", val.value);
                }}
              />
            );
          }}
        />
      </div>

      <div className="md:w-11/12 px-3 mb-6 md:mb-0">
        <label
          className="block uppercase tracking-wide text-xs font-bold mb-2"
          htmlFor="events_id"
        >
          Event
        </label>
        <Controller
          name="events_id"
          control={control}
          render={({ field: { onChange, value, name, ref } }) => {
            const currentSelection3 = eventsId.find(
              (c) => c.value === bitacoraSeleccionada2.events_id
            );
            console.log("CurrentSelection3", currentSelection3);

            return (
              <Select
                inputRef={ref}
                options={eventsId}
                defaultValue={currentSelection3}
                name={name}
                onChange={(val) => {
                  onChange(val.value);
                  handleOnChange("events_id", val.value);
                }}
              />
            );
          }}
        />
      </div>

      <div className="md:w-11/12 px-3 mb-6 md:mb-0">
        <label
          className="block uppercase tracking-wide text-xs font-bold mb-2"
          htmlFor="description"
        >
          Descripcion evento
        </label>
        <Controller
          name="description"
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, onBlur, value, ref } }) => (
            <WYSIWYGEditor
              onChange={onChange} // send value to hook form
              onBlur={onBlur} // notify when input is touched/blur
              selected={value}
              rows={14}
            />
          )}
        />
        {errors.description && (
          <p className="text-red-600 text-1xl font-bold">
            This field is required
          </p>
        )}{" "}
      </div>

      <div className="md:w-11/12 px-3 mb-6 md:mb-0">
        <label
          className="block uppercase tracking-wide text-xs font-bold mb-2"
          htmlFor="event_date"
        >
          Fecha Evento
        </label>
        <input
          className="appearance-none block w-full text-gray-600 border border-grey-lighter rounded py-3 px-4"
          type="text"
          placeholder="Date Event"
          name="event_date"
          defaultValue={
            bitacoraSeleccionada2 && bitacoraSeleccionada2.event_date
          }
          {...registerEditField("event_date", {
            required: "Required",
            minLength: 3,
            maxLength: 41,
          })}
          onChange={(e) => handleOnChangeE("event_date", e.target.value)}
        />
        {errors.event_date && (
          <p className="text-red-600 text-1xl font-bold">
            This field is required
          </p>
        )}{" "}
      </div>

      <div className="md:w-11/12 px-3 mb-6 md:mb-0">
        <input
          type="checkbox"
          id="image"
          name="image"
          defaultValue={isImage}
          checked={isImage}
          {...registerEditField("image", {
            required: "Required",
          })}
          onChange={(val) => {
            handleOnChange1();
          }}
        />
        Image
      </div>

      <div className="md:w-11/12 px-3 mb-6 md:mb-0">
        Above checkbox is {isImage ? "checked" : "unchecked"}.
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
      <input
        type="hidden"
        name="id"
        defaultValue={bitacoraSeleccionada2 && bitacoraSeleccionada2.id}
        {...registerEditField("id", {
          required: "Required",
          minLength: 3,
          maxLength: 41,
        })}
      ></input>
      <input
        type="hidden"
        name="bitacora_id"
        defaultValue={
          bitacoraSeleccionada2 && bitacoraSeleccionada2.bitacora_id
        }
        {...registerEditField("bitacora_id", {
          required: "Required",
          minLength: 3,
          maxLength: 41,
        })}
      ></input>
    </form>
  );
};

export default BitaEventEdit;
