const Video = ({type}) => {
    return(
        <video width="100%" height="240" autoPlay="true">
        <source src={type} type="video/mp4" />
            <source src={type} type="video/ogg" />
            Your browser does not support the video tag.
    </video>
    )
}
export default Video;