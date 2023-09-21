import React from "react";
import Image from "next/image";
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

const ImageComponent = ({
  alt = "Image",
  width = 500,
  height = 500,
  src,
  className,
  decoding = "async",
  loading = "lazy",
  priority = false,
  layout = "intrinsic",
  ...otherProps
}) => {
  return (
    <ErrorBoundary>
      {/* {layout !== "intrinsic" ? : } */}
      <Image
        alt={alt}
        width={width ? width : "500"}
        height={height ? height : "500"}
        src={src}
        className={`${className}`}
        decoding={decoding}
        loading={loading}
        layout={layout}
        priority={priority}
        {...otherProps}
      />
    </ErrorBoundary>
  );
};

export default ImageComponent;
