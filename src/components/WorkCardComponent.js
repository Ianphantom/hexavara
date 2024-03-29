import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styled from "styled-components";

// import component
import TagComponent from "./TagComponent";

// import assets
import ArrowRight from "../assets/svg/arrowRight.svg";

const WorkCardComponent = ({ tag, title, desc, theme }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <WorkCardComponentStyled
      className={`pointer ${theme}`}
      data-aos="zoom-out"
      data-aos-duration="1500"
    >
      <img
        src={`https://source.unsplash.com/random/200x200?sig=${Math.random()}`}
        alt="project-icon"
        className="image-container border-radius-large"
      />

      <div className="information">
        <TagComponent text={tag} theme="primary" />

        <div className="title paragraph-large">{title}</div>
        <div className="description paragraph-medium regular">{desc}</div>

        <div className="read-more paragraph-large">
          <span>
            Read more <img src={ArrowRight} alt="arrow-right" />
          </span>
        </div>
      </div>
    </WorkCardComponentStyled>
  );
};

const WorkCardComponentStyled = styled.div`
  padding: 20px 20px;
  &:hover {
    border-radius: 8px;
    border: 1px solid var(--primary-base, #3182ff);
    background: var(--color-gray-2, #fdfdfd);
    box-shadow: 0px 12px 24px -4px rgba(59, 65, 69, 0.08),
      0px 0px 12px -4px rgba(59, 65, 69, 0.08);
  }
  &.small {
    .image-container {
      height: 137px;
      width: 100%;
      object-fit: cover;
    }
  }

  &.small-medium {
    .image-container {
      height: 160px;
      width: 100%;
      object-fit: cover;
    }
  }

  &.normal {
    .image-container {
      height: 248px;
      width: 100%;
      object-fit: cover;
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
