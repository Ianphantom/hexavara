import React, { useState } from "react";
import styled from "styled-components";

import WorkCardComponent from "../../components/WorkCardComponent";
import { dataWork } from "../../data/data-works";

const WorkDetailPagesSectionEight = () => {
	const [dataNew] = useState(
		dataWork.filter((item) => item.uploadStatus === 'new').reverse().slice(0,3)
	);
	return (
		<WorkDetailPagesSectionEightStyled className='container'>
		<div className='title heading-large'>Related Project</div>
		<div className='desc paragraph-large regular'>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ducimus,
			praesentium qui iusto corrupti debitis voluptates nisi
		</div>
		<div className='work-container'>
			{dataNew.map((item) => (
				<div className='work-card-container' key={item.id}>
					<WorkCardComponent
						tag={item.tag}
						title={item.title}
						desc={item.desc}
						image={item.images}
						theme='small'
					/>
				</div>
				)
			)}
		</div>
		</WorkDetailPagesSectionEightStyled>
	);
};

const WorkDetailPagesSectionEightStyled = styled.div`
  padding: 60px 0px;
  .title {
    margin-bottom: 12px;
    color: var(--hxvr-neutral-100);
  }
  .desc {
    margin-bottom: 20px;
    color: var(--hxvr-neutral-secondary);
  }
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

  @media (max-width: 768px) {
    .work-container {
      flex-direction: column;
    }
  }
`;

export default WorkDetailPagesSectionEight;
