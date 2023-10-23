import React from "react";
import styled from "styled-components";

// import component
import TagComponent from "./TagComponent";

// import assets
import ArrowRight from "../assets/svg/arrowRight.svg";

const WorkCardComponent = ({ tag, title, desc, theme }) => {
  return (
    <WorkCardComponentStyled className={`pointer ${theme}`}>
      <img
        src='https://www.pngkey.com/png/detail/233-2332677_image-500580-placeholder-transparent.png'
        alt='project-icon'
        className='image-container'
      />

      <div className='information'>
        <TagComponent text={tag} theme='primary' />

        <div className='title paragraph-large'>{title}</div>
        <div className='description paragraph-medium regular'>{desc}</div>

        <div className='read-more paragraph-large'>
          <span>
            Read more <img src={ArrowRight} alt='arrow-right' />
          </span>
        </div>
      </div>
    </WorkCardComponentStyled>
  );
};

const WorkCardComponentStyled = styled.div`
  padding: 20px 20px;
  &.small {
    .image-container {
      height: 137px;
    }
  }

  &.normal {
    .image-container {
      height: 248px;
    }
  }
  .information {
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    .title {
      color: black;
    }

    .description {
      color: var(--hxvr-neutral-secondary);
    }

    .read-more {
      color: var(--hxvr-brand-70);
      span {
        text-decoration: underline;
      }
    }
  }
`;

export default WorkCardComponent;
