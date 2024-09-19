// this is the code I wrote to put at the top of each of the sections so that someone might be able to add an album to a list! I don't have any state code yet since this is just a static version of the app!

import { ChangeEvent, useState } from "react";

type AlbumInputProps = {
  addNewAlbum: (
    artist: string,
    album: string,
    link: string,
    image: string
  ) => void;
};
export default function AlbumInput({ addNewAlbum }: AlbumInputProps) {
  const [formValues, setFormValues] = useState({
    artist: "",
    album: "",
    link: "",
    image: "",
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) =>
    setFormValues({ ...formValues, [event.target.name]: event.target.value });

  /*   const handleSubmit = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    
  } */

  return (
    <div className="border-end bg-info">
      <input
        name="artist"
        className="m-2"
        type="text"
        onChange={handleChange}
        placeholder="Artist Name"
      ></input>
      <input
        className="m-2"
        name="album"
        type="text"
        placeholder="Album Name"
        onChange={handleChange}
        value={formValues.album}
      ></input>

      <input
        className="m-2"
        name="link"
        type="text"
        onChange={handleChange}
        placeholder="Link"
      ></input>

      <input
        className="m-2"
        name="image"
        type="text"
        onChange={handleChange}
        placeholder="Image Link"
      ></input>

      <br />
      <button
        onClick={() =>
          addNewAlbum(
            formValues.artist,
            formValues.album,
            formValues.link,
            formValues.image
          )
        }
      >
        Add
      </button>
    </div>
  );
}
