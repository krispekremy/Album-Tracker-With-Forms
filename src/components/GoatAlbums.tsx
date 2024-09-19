import { Album } from "../types";
import AlbumInput from "./AlbumInput";
import { useState } from "react";
import AlbumList from "./AlbumList";
// This code is set up to be the far right column that is a list for my favorite albums of all time. It calls the AlbumInput component and the GoatAlbumsList component.

export default function GoatAlbums() {
  const [goatAlbumList, setGoatAlbumList] = useState<Album[]>([]);

  const addNewAlbum = (
    artist: string,
    album: string,
    link: string,
    image: string
  ) => {
    const newAlbum = {
      id: goatAlbumList.length
        ? goatAlbumList[goatAlbumList.length - 1].id + 1
        : 0,
      artist: artist,
      name: album,
      image: image,
      link: link,
      list: 2,
    };

    setGoatAlbumList([...goatAlbumList, newAlbum]);
  };

  const deleteAlbum = (idToDelete: number) => {
    setGoatAlbumList(goatAlbumList.filter((album) => album.id !== idToDelete));
  };

  return (
    <>
      <h4>Greatest of All Time</h4>
      <AlbumInput addNewAlbum={addNewAlbum} />
      <AlbumList albumList={goatAlbumList} deleteAlbum={deleteAlbum} />
    </>
  );
}
