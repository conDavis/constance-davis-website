/* Elements for Art Page.*/

import styled from "styled-components";

export const ArtContainer = styled.div`
  height: ${window.screen.availHeight}px;
  display: flex;
`;

export const ArtContent = styled.div`
  height: 100%;
  width: 80%;
  background-color: #f3f9f4;
  margin: 0 auto;
  text-align: center;
`;

export const PieceContainer = styled.div`
  height: 100%;
  width: 100%;
`;

export const RandomPiece = styled.img`
  max-width: 65%;
  max-height: 55%;
`;

export const ArtButton = styled.button`
  background-color: #f1d5e3;
  color: #293d3d;
  border: none;
  padding: 4px 4px 4px 4px;
  margin: 4px 4px 4px 4px;
  font-size: 16px;

  &:hover {
    transition: all 0.2s ease-in-out;
    background-color: #ea9dc5;
  }
`;
