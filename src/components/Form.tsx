interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  children: React.ReactNode;
  onSubmit: (formData: any) => void;
  initialValues: InitialValues;
}

interface InitialValues {
  [key: string]: string;
}

const Form = ({ children, onSubmit, initialValues }: FormProps) => {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = Object.fromEntries(
      new FormData(e.target as HTMLFormElement)
    );

    onSubmit && onSubmit(formData);
  }

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      {children}
    </form>
  );
};

export default Form;
