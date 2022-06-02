/* Elements for Art Page.*/

import styled from "styled-components";

export const ArtContainer = styled.div`
  display: flex;
  padding: 24px 16px 4px 16px;
`;

export const ArtContent = styled.div`
  height: 100%;
  width: 80%;
  background-color: #f3f9f4;
  margin: 0 auto;
  text-align: center;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const PieceContainer = styled.div`
  height: 100%;
  width: 100%;
`;

export const RandomPiece = styled.img`
  max-width: calc(${window.screen.availWidth}px / 2);
  max-height: calc(${window.screen.availHeight}px * 0.6);
`;

export const Piece = styled.img`
  max-width: calc(${window.screen.availWidth}px * 0.7);
  max-height: calc(${window.screen.availHeight}px * 0.7);
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
