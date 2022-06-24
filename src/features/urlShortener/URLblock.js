import React from "react";
import "./URLblock.css";
import { connect } from "react-redux";
import { deleteShortenedUrl } from "./shortenerSlice";
import PropTypes from "prop-types";

class URLblock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { copyButtonLabel: "Copy" };
    this.delete = this.delete.bind(this);
    this.copy = this.copy.bind(this);
  }

  copy() {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(this.props.shortenedUrl).catch((error) => {
        console.error(error);
      });
    } else {
      const el = document.createElement("input");
      el.value = this.props.shortenedUrl;
      document.body.appendChild(el);
      el.select();
      document.execCommand("Copy");
      document.body.removeChild(el);
    }

    this.setState({ copyButtonLabel: "Copied!" });
    setTimeout(() => {
      this.setState({ copyButtonLabel: "Copy" });
    }, 3000);
  }

  delete() {
    this.props.deleteShortenedUrl(this.props.index);
  }

  render() {
    return (
      <div className="urlBlock">
        <button onClick={this.delete} className="deleteButton">
          x
        </button>
        <p className="originalUrl">{this.props.originalUrl}</p>
        <p className="shortenedUrl">{this.props.shortenedUrl}</p>
        <button className="copyButton" onClick={this.copy}>
          {this.state.copyButtonLabel}
        </button>
      </div>
    );
  }
}

URLblock.propTypes = {
  originalUrl: PropTypes.string,
  shortenedUrl: PropTypes.string,
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteShortenedUrl: (index) => dispatch(deleteShortenedUrl(index)),
  };
};

export default connect(null, mapDispatchToProps)(URLblock);
