import React from "react";

import SpaceXData from "./SpaceXData";

class SpaceX extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false,
      spaceData: []
    };
  }

  componentDidMount() {
    fetch("https://api.spacexdata.com/v3/launches")
      .then(res => res.json())
      .then(data => {
        this.setState({
          spaceData: data,
          isLoaded: true
        });
      })
      .catch(console.log);
  }

  toggleSpacedata = () => {
    this.setState({
      showSpaceData: !this.state.showSpaceData
    });
  };

  render() {
    if (!this.state.isLoaded) {
        return <h1>Loading...</h1>;
      } else {
      const fullList = this.state.spaceData.map(i => (
        <SpaceXData data={i} id={i.flight_number} />
      ));
      return (
        <div className="text-2xl text-center space-y-5">
          <h1>Where was the mission? SpaceX</h1>
          {fullList}
        </div>
      );
    }
  }
}

export default SpaceX;

