
const HeadingOne = (props) => {
    const {title, cssClass} = props;
    return(
        <h1 className={`${cssClass} font-sofia-bold font-black leading-none text-zinc-700 text-primary-size`}>{title}</h1>
    )
}
export default HeadingOne;