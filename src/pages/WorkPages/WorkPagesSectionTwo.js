import React, { useEffect, useState } from "react";
import styled from "styled-components";

// import component
import WorkPagesTagButtonComponent from "./WorkPagesTagButtonComponent";
import WorkCardComponent from "../../components/WorkCardComponent";
import { dataWork } from "../../data/data-works";

// import icon
import ArrowNarrowLeft from "../../assets/svg/arrowNarrowLeft.svg";
import ArrowNarrowRight from "../../assets/svg/arrowNarrowRight.svg";
import { Link } from "react-router-dom";

const WorkPagesSectionTwo = () => {
  const [tagActive, setTagActive] = useState("All");
  const [dataShown, setDataShown] = useState(dataWork);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPage = Math.ceil(dataShown.length / 9);
  console.log(totalPage);
  const goToPage = (number) => {
    if (currentPage + number < 1) {
      setCurrentPage(1);
    } else if (currentPage + number > totalPage) {
      setCurrentPage(totalPage);
    } else {
      setCurrentPage(currentPage + number);
    }
    window.scroll({
      top: 0,
      left: 0,
    });
  };

  useEffect(() => {
    if (tagActive === "All") {
      setDataShown(dataWork);
    } else {
      setDataShown(dataWork.filter((item) => item.tag === tagActive));
    }
    setCurrentPage(1);
  }, [tagActive]);

  console.log(dataShown);
  return (
    <WorkPagesSectionTwoStyled className='container'>
      <div className='tag-container'>
        <WorkPagesTagButtonComponent
          text='All'
          tagActive={tagActive}
          setTagActive={setTagActive}
        />
        <WorkPagesTagButtonComponent
          text='Software Development'
          tagActive={tagActive}
          setTagActive={setTagActive}
        />
        <WorkPagesTagButtonComponent
          text='Marketing'
          tagActive={tagActive}
          setTagActive={setTagActive}
        />
        {/* <WorkPagesTagButtonComponent
          text='IT Security'
          tagActive={tagActive}
          setTagActive={setTagActive}
        />
        <WorkPagesTagButtonComponent
          text='Media and Advertising'
          tagActive={tagActive}
          setTagActive={setTagActive}
        /> */}
      </div>

      <div className='work-container'>
        {dataShown.map((item, index) => {
          if (index >= (currentPage - 1) * 9 && index < currentPage * 9) {
            return (
              <div className='work-card-container' key={item.id}>
                <Link to={`/works`}>
                  <WorkCardComponent
                    tag={item.tag}
                    title={item.title}
                    desc={item.desc}
                    theme='small-medium'
                    image={item.images}
                  />
                </Link>
              </div>
            );
          }
          return "";
        })}
      </div>

      <div className='pager'>
        <div className='pager-item pointer before' onClick={() => goToPage(-1)}>
          <div className='paragraph-small regular'>
            <img src={ArrowNarrowLeft} alt='before' />
          </div>
        </div>
        {(() => {
          const arr = [];
          for (let i = 0; i < totalPage; i++) {
            arr.push(
              <div
                className={`pager-item pointer ${
                  currentPage === i + 1 ? "active" : ""
                }`}
                onClick={() => setCurrentPage(i + 1)}
                key={i}
              >
                <div className='paragraph-small regular'>{i + 1}</div>
              </div>
            );
          }
          return arr;
        })()}
        <div className='pager-item pointer after' onClick={() => goToPage(1)}>
          <div className='paragraph-small regular'>
            <img src={ArrowNarrowRight} alt='after' />
          </div>
        </div>
      </div>
    </WorkPagesSectionTwoStyled>
  );
};

const WorkPagesSectionTwoStyled = styled.div`
  padding-bottom: 80px;
  .tag-container {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 20px 0px;
    overflow-y: auto;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  .work-container {
    display: flex;
    gap: 24px;
    flex-wrap: wrap;

    .work-card-container {
      margin-bottom: 32px;
      flex: 0 1 calc(33.33% - 24px);
    }
  }

  .pager {
    display: flex;
    align-items: center;
    gap: 16px;
    justify-content: center;
    .pager-item {
      padding: 8px 8px;
      &.before,
      &.after {
        border-radius: 12px;
        border: 1px solid #d9dbdb;
        background: var(--hxvr-neutral-30);
      }
      &.active {
        border-radius: 12px;
        background: var(--primary-base);
        color: var(--hxvr-neutral-30);
      }

      & > div {
        width: 24px;
        height: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }

  @media (max-width: 768px) {
    .work-container {
      flex-direction: column;
    }
    .pager {
      gap: 8px;
      .pager-item {
        & > div {
          width: 20px;
          height: 20px;
        }
      }
    }
  }
`;

export default WorkPagesSectionTwo;
