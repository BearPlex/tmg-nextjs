const HeadingThree = (props) => {
  const { title, cssClass } = props;
  return (
    <h3 className={`font-bold leading-tight tracking-[-0.075rem] ${cssClass}`}>
      {title}
    </h3>
  );
};
export default HeadingThree;
