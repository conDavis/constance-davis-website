/* Elements for Software Page.*/

import styled from "styled-components";

export const SoftwareContainer = styled.div`
  padding: 2.5em 1.5em 1.5em 1.5em;
  margin-bottom: 2em;
  text-align: center;
`;

export const SkillsContainer = styled.div`
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0 8px 0 8px;
  }
`;

export const MentorshipContainer = styled.div`
  padding: 0 7.6em 0 5em;
`;

export const ProjectCard = styled.div`
  width: 10%;
  height: 100%;
  background-color: #eaf4ce;
  padding: 16px 16px 4px 16px;
  margin: 8px 16px 4px 16px;
  color: black;
`;
