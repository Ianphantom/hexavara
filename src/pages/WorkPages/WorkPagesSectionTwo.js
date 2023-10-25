import React, { useState } from "react";
import styled from "styled-components";

// import component
import WorkPagesTagButtonComponent from "./WorkPagesTagButtonComponent";
import WorkCardComponent from "../../components/WorkCardComponent";

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
    </WorkPagesSectionTwoStyled>
  );
};

const WorkPagesSectionTwoStyled = styled.div`
  .tag-container {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 20px 0px;
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
`;

export default WorkPagesSectionTwo;
