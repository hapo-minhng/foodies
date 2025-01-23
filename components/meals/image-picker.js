"use client";

import { useRef, useState } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";

export default function ImagePicker({ label, name }) {
  const [selectedImage, setSelectedImage] = useState();
  const imageInputRef = useRef();

  function handleClick() {
    imageInputRef.current.click();
  }

  function handleChangeImage(event) {
    const file = event.target.files[0];

    if (!file) {
      setSelectedImage(null);
      return;
    }

    const fileReader = new FileReader();

    fileReader.onload = () => {
      setSelectedImage(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!selectedImage && <p>No image selected.</p>}
          {selectedImage && (
            <Image src={selectedImage} alt="Selected image" fill />
          )}
        </div>
        <input
          ref={imageInputRef}
          className={classes.input}
          type="file"
          name={name}
          accept="image/png, image/jpeg"
          id={name}
          onChange={handleChangeImage}
          required
        />
        <button className={classes.button} type="button" onClick={handleClick}>
          Pick an Image
        </button>
      </div>
    </div>
  );
}
