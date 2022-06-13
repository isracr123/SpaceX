import React from "react";

import SpaceXImages from "./SpaceXImages";

class SpaceXData extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false
    };
  }

  handleClick = () => {
    this.setState({ visible: !this.state.visible });
  };

  render() {
    const data = this.props.data;
    if (!this.state.visible) {
      return (
        
        <button onClick={this.handleClick} className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
            {data.mission_name}
        </button>
        
      );
    } else {
      return (
        <div>
          <button onClick={this.handleClick} className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
             {this.props.data.mission_name}
          </button>
          <h1 className="font-bold">{data.mission_name}</h1>
          <p className="text-base">{data.launch_site.site_name_long}</p>
          <SpaceXImages images={data.links.flickr_images} />
        </div>
      );
    }
  }
}

export default SpaceXData;
