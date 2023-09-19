import { ArrowBackOutlined } from "@material-ui/icons";
import "./watch.scss";

import { Link } from "react-router-dom";

export default function Watch() {
  //const location = useLocation();
  //console.log(location);
  return (
    <div className="watch">
      <Link to="/home">
        <div className="back">
          <ArrowBackOutlined />
          Home
        </div>
        <video
          className="video"
          autoPlay
          progress
          controls
          src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4"
        />
      </Link>
    </div>
  );
}
