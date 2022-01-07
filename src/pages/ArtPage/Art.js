import React, { useEffect, useState } from "react";
import {
  ArtContainer,
  ArtContent,
  RandomPiece,
  PieceContainer,
  ArtButton,
} from "./ArtElements";
import ConLoader from "../../components/Loader";

const Art = () => {
  const [isFetchingData, setIsFetchingData] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [randomArt, setRandomArt] = useState();
  const [randomArtName, setRandomArtName] = useState();

  const APIGithubURL = "https://github.com/conDavis/art-api";
  const ArtTitle = () => {
    return (
      <p style={{ fontStyle: "italic" }}>
        <b>{randomArtName}</b>
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
            fetchArt().then(() => {
              setIsFetchingData(false);
            });
          }}
        >
          See another random piece
        </ArtButton>
        <ArtButton>See all</ArtButton>
        <a href={APIGithubURL} target="_blank"><ArtButton>Check Out the API</ArtButton></a>
      </>
    );
  };
  const ArtScreen = () => {
    return (
      <>
        <RandomPiece
          src={randomArt}
          alt={`Random Art at ${randomArt}`}
          style={isImageLoaded ? {} : { display: "none" }}
          onLoad={() => setIsImageLoaded(true)}
        />
        <br />
        {isImageLoaded && <ArtButtons />}
      </>
    );
  };

  const fetchArt = async () => {
    await fetch("https://secret-basin-38348.herokuapp.com/random")
      .then((response) => response.json())
      .then((data) => {
        setRandomArt(data.url);
        setRandomArtName(data.name);
      })
      .catch((error) => console.log(error.message));
  };

  useEffect(() => {
    setIsFetchingData(true);
    fetchArt().then(() => {
      setIsFetchingData(false);
    });
  }, []);

  return (
    <ArtContainer>
      <ArtContent>
        <h1>Random Piece Generator</h1>
        <PieceContainer>
          {!isImageLoaded && <ConLoader />}
          {!isFetchingData && <ArtScreen />}
          <br />
          {isImageLoaded ? <ArtTitle /> : <p>fetching...</p>}
        </PieceContainer>
      </ArtContent>
    </ArtContainer>
  );
};

export default Art;
