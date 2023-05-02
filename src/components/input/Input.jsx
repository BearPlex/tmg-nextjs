const Input = ({ title, type }) => {
  return (
    <>
      <div className="border-b border-black">
        <input
          type={type}
          name={title}
          id={title}
          className="block px-2 w-full border-0 border-b border-transparent text-md focus:ring-0 placeholder-gray-700::placeholder focus-within:outline-0 focus:border-transprent pb-3"
          placeholder={title}
        />
      </div>
    </>
  );
};

export default Input;
