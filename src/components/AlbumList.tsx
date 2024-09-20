import AlbumCard from "./AlbumCard.tsx";
import type { Album } from "../types.tsx";

type AlbumListProps = {
  albumList: Album[];
  deleteAlbum: (idToDelete: number) => void;
};

export default function AlbumList({ albumList, deleteAlbum }: AlbumListProps) {
  return (
    <div className="border-end bg-light p-3 d-flex flex-column rounded">
      {albumList.length === 0 && <p>No albums to display yet!</p>}
      {albumList.map((a) => (
        <AlbumCard key={a.id} album={a} deleteAlbum={deleteAlbum} />
      ))}
    </div>
  );
}
