import React from "react";
import styled from "styled-components";

const WorkDetailPagesSectionFour = () => {
  return (
    <WorkDetailPagesSectionFourStyled>
      <div>
        <img
          src='https://assets.materialup.com/uploads/28b7af29-c8e1-4f4d-b5fd-8d797bb00e6a/preview.png'
          alt='work-preview'
        />
      </div>
    </WorkDetailPagesSectionFourStyled>
  );
};

const WorkDetailPagesSectionFourStyled = styled.div`
  padding: 40px 0px;
  img {
    height: 520px;
    width: 100%;
    object-fit: cover;
  }
`;

export default WorkDetailPagesSectionFour;
