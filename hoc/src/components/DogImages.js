import React from "react";
import { v4 as uuidv4 } from "uuid";
import withLoader from "../hoc/withLoader";

class DogImages extends React.Component {
  render() {
    const { data } = this.props;
    // console.log(data);

    return (
      <div className="random-pic">
        {data.message.map((dog) => (
          <img src={dog} alt="Dog" key={uuidv4()} />
        ))}
      </div>
    );
  }
}

export default withLoader(
  DogImages,
  "https://dog.ceo/api/breeds/image/random/1"
);
