import { useState } from 'react';

interface UseFormParams {
  initialValues: InitialValues;
  onSubmit: (values: InitialValues) => void;
}

interface InitialValues {
  [key: string]: string | number | boolean;
}

const useForm = ({ initialValues, onSubmit }: UseFormParams) => {
  const [values, setValues] = useState(initialValues);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(values);
  };

  return {
    values,
    handleChange,
    handleSubmit,
  };
}

export default useForm;
