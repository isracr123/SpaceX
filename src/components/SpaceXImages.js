import React from "react";

class SpaceXImages extends React.Component {
  render() {
    if (this.props.images[0] === undefined) {
      return <p className="text-base">No image</p>
    } else {
      const images = this.props.images.map(i => <img  alt={i} className="h-48 w-48 center cursor-pointer" src={i} />);
      return (
        <div>
          <h1>Gallery</h1>
          {images}
        </div>
      );
    }
  }
}

export default SpaceXImages;
