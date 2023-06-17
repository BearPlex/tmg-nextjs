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

const ImageComponent = (props) => {
  return (
    <ErrorBoundary>
      <Image
        id="imageRef"
        alt={props.alt}
        width="500"
        height="300"
        src={props.src}
        className={`${props.className}`}
        decoding="async"
      />
    </ErrorBoundary>
  );
};

export default ImageComponent;
