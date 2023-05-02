
const HeadingTwo = (props) => {
    const {title, cssClass} = props;
    return(
        <h2 className={`${cssClass} font-sofia-bold font-bold text-secondary-size leading-none`}>{title}</h2>
    )
}
export default HeadingTwo;