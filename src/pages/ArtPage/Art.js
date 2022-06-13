import React, { useEffect, useState } from "react";
import { HashLink as Link } from 'react-router-hash-link';
import {
  ArtContainer,
  ArtContent,
  RandomPiece,
  PieceContainer,
  ArtButton,
  Piece,
} from "./ArtElements";
import ConLoader from "../../components/Loader";

const Art = () => {
  const [isFetchingData, setIsFetchingData] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [randomArt, setRandomArt] = useState();
  const [allArt, setAllArt] = useState([]);
  const [isGalleryLoaded, setIsGalleryLoaded] = useState(false);
  const [randomArtName, setRandomArtName] = useState();

  const APIGithubURL = "https://github.com/conDavis/art-api";
  const ArtTitle = (title) => {
    return (
      <p style={{ fontStyle: "italic", marginTop: "8px" }}>
        <b>{title}</b>
      </p>
    );
  };

  const ArtButtons = () => {
    return (
      <>
        <ArtButton
          onClick={() => {
            setIsImageLoaded(false);
            setIsFetchingData(true);
            fetchRandoArt().then(() => {
              setIsFetchingData(false);
            });
          }}
        >
          See another random piece
        </ArtButton>
        <Link to="/art#all_works">
          <ArtButton>See all</ArtButton>
        </Link>
        <a href={APIGithubURL} target="_blank">
          <ArtButton>Check Out the API</ArtButton>
        </a>
      </>
    );
  };
  const RandoArtScreen = () => {
    return (
      <>

        <Link to={`/art#${randomArtName}`}>
        <RandomPiece
          src={randomArt}
          alt={`Random Art at ${randomArt}`}
          style={isImageLoaded ? {} : { display: "none" }}
          onLoad={() => setIsImageLoaded(true)}
        />
        </Link>
        <br />
        {isImageLoaded && <ArtButtons />}
      </>
    );
  };

  

  const fetchRandoArt = async () => {
    await fetch("https://secret-basin-38348.herokuapp.com/random")
      .then((response) => response.json())
      .then((data) => {
        setRandomArt(data.url);
        setRandomArtName(data.name);
      })
      .catch((error) => console.log(error.message));
  };

  const fetchAllArt = async () => {
    await fetch("https://secret-basin-38348.herokuapp.com/all")
      .then((response) => response.json())
      .then((data) => {
        setAllArt(data);
      })
      .catch((error) => console.log(error.message));
  };

  useEffect( () => {
    setIsFetchingData(true);
    const fetchArt = async () => {
    await fetchRandoArt();};
    fetchArt().catch(console.error).then(() => {
      setIsFetchingData(false);
    });
  }, []);

  useEffect(() => {
    fetchAllArt().catch(console.error).then(() => setIsGalleryLoaded(true));
  }, [isFetchingData]);



  return (
    <ArtContainer>
      <ArtContent>
        <a id="top" />
        <h1>Random Piece Generator</h1>
        <PieceContainer>
          {!isImageLoaded && <ConLoader />}
          {!isFetchingData && <RandoArtScreen />}
          <br />
          {isImageLoaded ? ArtTitle(randomArtName) : <p style={{paddingBottom: "25%"}}>fetching...</p>}
        </PieceContainer>
        <a id="all_works" />
        {isImageLoaded && (
          <div
            style={{
              padding: "16px 0 32px 0",
              backgroundColor: "#85ab8c",
              color: "#F3F9F4",
            }}
          >

              <h1>All Works</h1>
            {isGalleryLoaded &&
              allArt.map((galleryPiece) => (
                <>
                <a id={`${galleryPiece.name}`}/>
                <div
                  style={{
                    padding: "24px 4px 4px 16px",
                    backgroundColor: "#F3F9F4",
                    color: "#85ab8c",
                  }}
                  key={galleryPiece.name}
                >
                  <Piece
                    src={galleryPiece.url}
                    alt={`Art at ${galleryPiece.url}`}
                    key={name}
                  />
                  {ArtTitle(galleryPiece.name)}
                </div>
                </>
              ))}
            <Link to="/art#top">
              <p>Back To Top</p>
            </Link>
          </div>
        )}
      </ArtContent>
    </ArtContainer>
  );
};

export default Art;
