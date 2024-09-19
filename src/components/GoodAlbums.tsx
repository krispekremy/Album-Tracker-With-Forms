import { useState } from "react";
import AlbumInput from "./AlbumInput";
import type { Album } from "../types";
import AlbumList from "./AlbumList";

export default function GoodAlbums() {
  const [goodAlbumList, setGoodAlbumList] = useState<Album[]>([]);

  const addGoodAlbum = (
    artist: string,
    album: string,
    link: string,
    image: string
  ) => {
    const newAlbum = {
      id: goodAlbumList.length
        ? goodAlbumList[goodAlbumList.length - 1].id + 1
        : 0,
      artist: artist,
      name: album,
      image: image,
      link: link,
      list: 1,
    };

    setGoodAlbumList([...goodAlbumList, newAlbum]);
  };

  const deleteAlbum = (idToDelete: number) => {
    setGoodAlbumList(goodAlbumList.filter((album) => album.id !== idToDelete));
  };

  return (
    <>
      <h4>Albums I Loved This Year</h4>
      <AlbumInput addNewAlbum={addGoodAlbum} />
      <AlbumList albumList={goodAlbumList} deleteAlbum={deleteAlbum} />
    </>
  );
}
