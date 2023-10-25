import React, { useState } from "react";
import styled from "styled-components";

// import component
import WorkPagesTagButtonComponent from "./WorkPagesTagButtonComponent";
import WorkCardComponent from "../../components/WorkCardComponent";

// import icon
import ArrowNarrowLeft from "../../assets/svg/arrowNarrowLeft.svg";
import ArrowNarrowRight from "../../assets/svg/arrowNarrowRight.svg";

const WorkPagesSectionTwo = () => {
  const [tagActive, setTagActive] = useState("All");
  console.log(tagActive);
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
          text='IT Security'
          tagActive={tagActive}
          setTagActive={setTagActive}
        />
        <WorkPagesTagButtonComponent
          text='Media and Advertising'
          tagActive={tagActive}
          setTagActive={setTagActive}
        />
      </div>

      <div className='work-container'>
        <div className='work-card-container'>
          <WorkCardComponent
            tag='Software Development'
            title='SISTEM WAREHOUSE - MJA UNILEVER'
            desc='Sistem yang mengakomodir kegiatan pendataan stok barang pada perusahaan MJA sebagai distributor unilever'
            theme='normal'
          />
        </div>
        <div className='work-card-container'>
          <WorkCardComponent
            tag='Software Development'
            title='SISTEM WAREHOUSE - MJA UNILEVER'
            desc='Sistem yang mengakomodir kegiatan pendataan stok barang pada perusahaan MJA sebagai distributor unilever'
            theme='normal'
          />
        </div>
        <div className='work-card-container'>
          <WorkCardComponent
            tag='Software Development'
            title='SISTEM WAREHOUSE - MJA UNILEVER'
            desc='Sistem yang mengakomodir kegiatan pendataan stok barang pada perusahaan MJA sebagai distributor unilever'
            theme='normal'
          />
        </div>
        <div className='work-card-container'>
          <WorkCardComponent
            tag='Software Development'
            title='SISTEM WAREHOUSE - MJA UNILEVER'
            desc='Sistem yang mengakomodir kegiatan pendataan stok barang pada perusahaan MJA sebagai distributor unilever'
            theme='normal'
          />
        </div>
        <div className='work-card-container'>
          <WorkCardComponent
            tag='Software Development'
            title='SISTEM WAREHOUSE - MJA UNILEVER'
            desc='Sistem yang mengakomodir kegiatan pendataan stok barang pada perusahaan MJA sebagai distributor unilever'
            theme='normal'
          />
        </div>
        <div className='work-card-container'>
          <WorkCardComponent
            tag='Software Development'
            title='SISTEM WAREHOUSE - MJA UNILEVER'
            desc='Sistem yang mengakomodir kegiatan pendataan stok barang pada perusahaan MJA sebagai distributor unilever'
            theme='normal'
          />
        </div>
        <div className='work-card-container'>
          <WorkCardComponent
            tag='Software Development'
            title='SISTEM WAREHOUSE - MJA UNILEVER'
            desc='Sistem yang mengakomodir kegiatan pendataan stok barang pada perusahaan MJA sebagai distributor unilever'
            theme='normal'
          />
        </div>
        <div className='work-card-container'>
          <WorkCardComponent
            tag='Software Development'
            title='SISTEM WAREHOUSE - MJA UNILEVER'
            desc='Sistem yang mengakomodir kegiatan pendataan stok barang pada perusahaan MJA sebagai distributor unilever'
            theme='normal'
          />
        </div>
        <div className='work-card-container'>
          <WorkCardComponent
            tag='Software Development'
            title='SISTEM WAREHOUSE - MJA UNILEVER'
            desc='Sistem yang mengakomodir kegiatan pendataan stok barang pada perusahaan MJA sebagai distributor unilever'
            theme='normal'
          />
        </div>
      </div>

      <div className='pager'>
        <div className='pager-item pointer before'>
          <div className='paragraph-small regular'>
            <img src={ArrowNarrowLeft} alt='before' />
          </div>
        </div>
        <div className='pager-item pointer active'>
          <div className='paragraph-small regular'>1</div>
        </div>
        <div className='pager-item pointer'>
          <div className='paragraph-small regular'>2</div>
        </div>
        <div className='pager-item pointer'>
          <div className='paragraph-small regular'>...</div>
        </div>
        <div className='pager-item pointer'>
          <div className='paragraph-small regular'>8</div>
        </div>
        <div className='pager-item pointer'>
          <div className='paragraph-small regular'>9</div>
        </div>
        <div className='pager-item pointer after'>
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
