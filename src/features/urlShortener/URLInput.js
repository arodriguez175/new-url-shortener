import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./URLInput.css";

function URLInput() {
  const urlInput = useRef(null);

  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.shortener.isLoading);

  const handleClick = () => {
    const urlToShorten = urlInput.current.value;
    dispatch(shortenURL(urlToShorten));
  };

  return (
    <div>
      <div className="inputContainer" id="input">
        <input ref={urlInput} placeholder="Shorten a link here..." />
        <button>{}</button>
      </div>
    </div>
  );
}

export default URLInput;
