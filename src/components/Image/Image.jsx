import React from "react";
import Image from "next/image";
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

const ImageComponent = ({
  alt,
  width = 500,
  height = 500,
  src,
  className,
  ...otherProps
}) => {
  return (
    <ErrorBoundary>
      <Image
        alt={alt}
        width={width ? width : "500"}
        height={height ? height : "500"}
        src={src}
        className={`${className}`}
        decoding="async"
        loading="lazy"
        {...otherProps}
      />
    </ErrorBoundary>
  );
};

export default ImageComponent;
