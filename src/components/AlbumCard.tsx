import { useState } from "react";

type AlbumCardProps = {
  album: {
    id: number;
    artist: string;
    name: string;
    image: string;
    link: string;
  };
  deleteAlbum: (idToDelete: number) => void;
};

export default function AlbumCard({ album, deleteAlbum }: AlbumCardProps) {
  function goToPage(linkToGoTo: string) {
    console.log("Navigating to your webpage...", linkToGoTo);

    //Window.open navigates to another webpage.
    //https://developer.mozilla.org/en-US/docs/Web/API/Window/open
    window.open(linkToGoTo);
  }
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  //now we return some jsx that is the album card itself
  return (
    <div>
      <span>
        {album.artist} - {album.name}
      </span>
      <div>
        <img
          onClick={() => goToPage(album.link)} //on click go to the link in album.link
          src={album.image} //the image source is in album.image
          width={100} // nice small little album art
          className="pb-3" // a little bootstrap padding to make it look nicer
        />
        <button onClick={handleClick}>{count} listens</button>
        <button onClick={() => deleteAlbum(album.id)}>Delete</button>
      </div>
    </div>
  );
}
