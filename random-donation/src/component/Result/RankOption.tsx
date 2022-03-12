import React from 'react';
import styled from 'styled-components';

interface RankTitleProp {
  width?: string;
  isFirst?: boolean;
}

const RankOptionWrapper = styled.div`
  width: 95%;
  margin: 25px auto;
  display: flex;
`;

const RankTitle = styled.h1`
  color: #a53232;
  font-size: 1.4em;
  font-weight: bold;
  width: ${(props: RankTitleProp) => props.width};
  color: ${(props: RankTitleProp) => (props.isFirst ? '#a53232' : '#121212')};
`;

const RankOption = (props: any) => {
  const { name, price, index } = props;
  // console.log('name', name, 'price', price, 'index', index)

  return (
    <RankOptionWrapper>
      <RankTitle width={'80px'} isFirst={index === 0}>
        {index + 1}위
      </RankTitle>
      <RankTitle isFirst={index === 0}>{name}</RankTitle>
      <RankTitle
        width={'120px'}
        style={{ textAlign: 'right' }}
        isFirst={index === 0}
      >
        {price.toLocaleString('ko-KR')}원
      </RankTitle>
    </RankOptionWrapper>
  );
};

export default RankOption;
