const HeadingTwo = (props) => {
  const { title, cssClass } = props;
  return (
    <h2
      className={`${cssClass} font-sofia-bold font-bold text-4xl leading-none`}
    >
      {title}
    </h2>
  );
};
export default HeadingTwo;
