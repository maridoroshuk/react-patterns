import React from "react";
import ReactLoading from "react-loading";

function withLoader(Component, url) {
  class ContainerComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: null
      };
    }

    componentDidMount() {
      fetch(url)
        .then((res) => res.json())
        .then((data) => this.setState({ data }));
    }

    render() {
      if (!this.state.data) {
        return (
          <div className="loader">
            <ReactLoading
              type="spokes"
              color="#eee"
              height={"20%"}
              width={"20%"}
            />
          </div>
        );
      }

      return <Component {...this.props} data={this.state.data} />;
    }
  }

  return ContainerComponent;
}

export default withLoader;
