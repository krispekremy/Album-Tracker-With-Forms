import { Album } from "../types";
import vSnaresImage from "../assets/vsnares.jpg";
import blackenedImage from "../assets/blacksky.jpg";
import babyImage from "../assets/andbaby.jpg";
import AlbumCard from "./AlbumCard";
//This is some test code to display a static version of the app! Importing the images and Album type above, as well as the AlbumCard component for the JSX being returned at the bottom.
const goatAlbumsList: Album[] = [
  //I've typed the variable goatAlbumsList as being an array containing the Album type.
  {
    id: 0,
    artist: "Venetian Snares",
    name: "Rossz Csillag Alatt Született",
    image: vSnaresImage,
    link: "https://venetiansnares.bandcamp.com/album/rossz-csillag-alatt-sz-letett",
    list: 2,
  },
  {
    id: 1,
    artist: "Biffy Clyro",
    name: "Blackened Sky",
    image: blackenedImage,
    link: "https://beggarsarkive.bandcamp.com/album/blackened-sky",
    list: 2,
  },
  {
    id: 2,
    artist: "The Caution Children",
    name: "Safe Crusades / No Judgements / And Baby",
    image: babyImage,
    link: "https://thecautionchildren.bandcamp.com/album/safe-crusades-no-judgements-and-baby-2",
    list: 2,
  },
];
//This is the exported component for displaying the greatest albums. Using the map method on the goatAlbumsList and the key is set to the id of each album!
export default function GoatAlbumsList() {
  return (
    <>
      <div className="border-end bg-light p-3 d-flex flex-column ">
        {goatAlbumsList.map((a) => (
          <AlbumCard key={a.id} album={a} />
        ))}
      </div>
    </>
  );
}
