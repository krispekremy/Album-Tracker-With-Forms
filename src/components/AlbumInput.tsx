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

  const handleSubmit = () => {
    addNewAlbum(
      formValues.artist,
      formValues.album,
      formValues.link,
      formValues.image
    );

    // Clear form fields after adding the album
    setFormValues({
      artist: "",
      album: "",
      link: "",
      image: "",
    });
  };

  return (
    <div className="border-end bg-info rounded">
      <input
        name="artist"
        className="m-2"
        type="text"
        onChange={handleChange}
        value={formValues.artist}
        placeholder="Artist Name"
      />
      <input
        className="m-2"
        name="album"
        type="text"
        placeholder="Album Name"
        onChange={handleChange}
        value={formValues.album}
      />
      <input
        className="m-2"
        name="link"
        type="text"
        onChange={handleChange}
        value={formValues.link}
        placeholder="Link"
      />
      <input
        className="m-2"
        name="image"
        type="text"
        onChange={handleChange}
        value={formValues.image}
        placeholder="Image Link"
      />
      <br />
      <button onClick={handleSubmit}>Add</button>
    </div>
  );
}
