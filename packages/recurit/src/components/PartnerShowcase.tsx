import * as React from 'react';
import styled from 'styled-components';

import partnerData from '../data/partners.json';

interface IPartner {
  logo: string;
  height: number;
  width: number;
}

const partners = partnerData as IPartner[];

type PartnerLogoProps = {
  logo: string,
  height: number,
  width: number,
};

const PartnerLogo: React.FC<PartnerLogoProps> = ({ logo, height, width }) => (
  <ShowcaseLogo
    height={`${height}px`}
    width={`${width}px`}
    src={require(`../assets/partners/${logo}.png`)}
  />
);

const PartnerShowcase: React.FC = () => {
  return (
    <ShowcaseContainer>
      <ShowcaseHeading>
        Together With
      </ShowcaseHeading>
      <ShowcaseSlider>
        {partners.map(({ ...logoProps }, idx) => (
          <PartnerLogo
            key={`partner-${idx}`}
            {...logoProps}
          />
        ))}
      </ShowcaseSlider>
    </ShowcaseContainer>
  );
};

export default PartnerShowcase;

const ShowcaseLogo = styled.img`
  opacity: 0.6;
  filter: brightness(0) invert(1);

  &:not(:last-child) {
    margin-right: 3rem;
  }
`;

const ShowcaseContainer = styled.div`
  margin-top: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 10rem;
  width: 100%;
  background: linear-gradient(45deg, #343887, #000457);
  z-index: -2;
  color: white;
  padding: 0 2rem;
`;

const ShowcaseHeading = styled.span`
  font-weight: 700;
  font-size: 1.1rem;
  text-transform: uppercase;
  margin: 0 auto;
  margin-bottom: 1rem;
`;

const ShowcaseSlider = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
