import type { Album } from "../types";
import AlbumInput from "./AlbumInput";
import AlbumList from "./AlbumList";
import { useState } from "react";

//this is my test data to start the state with so it doesn't start empty
//now we're exporting the main function of newalbums.
export default function NewAlbums() {
  const [newAlbumList, setNewAlbumList] = useState<Album[]>([]); // setting the state!

  const addNewAlbum = (
    artist: string,
    album: string,
    link: string,
    image: string
  ) => {
    //this function lets us add a new album to the newalbum list!  it uses the same data every time for now!
    const newAlbum = {
      id: newAlbumList.length
        ? newAlbumList[newAlbumList.length - 1].id + 1
        : 0,
      artist: artist,
      name: album,
      image: image,
      link: link,
      list: 0,
    };

    setNewAlbumList([...newAlbumList, newAlbum]); //now we're calling our set state function to be set to a copy of the current state plus the new album!
  };

  const deleteAlbum = (idToDelete: number) => {
    setNewAlbumList(newAlbumList.filter((album) => album.id !== idToDelete));
  }; // this function lets us delete an album!

  return (
    <>
      <h4>Albums I Wanna Listen To</h4>
      <AlbumInput addNewAlbum={addNewAlbum} />
      <AlbumList albumList={newAlbumList} deleteAlbum={deleteAlbum} />
    </>
  );
}
