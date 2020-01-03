import * as React from 'react';
import styled from 'styled-components';

import {
  OpacityFadeOut,
  SlideForShowcase,
} from '../keyframes';

import partnerData from '../../data/partners.json';

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

const PartnerSlider: React.FC = () => (
  <ShowcaseSlider>
    {partners.map(({ ...logoProps }, idx) => (
      <PartnerLogo
        key={`partner-${idx}`}
        {...logoProps}
      />
    ))}
  </ShowcaseSlider>
);

const PartnerShowcase: React.FC = () => {
  return (
    <ShowcaseContainer>
      <ShowcaseHeading>
        Together With
      </ShowcaseHeading>
      <SliderWrapper>
        <PartnerSlider />
        <PartnerSlider />
        <PartnerSlider />
      </SliderWrapper>
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
`;

const ShowcaseHeading = styled.span`
  font-weight: 700;
  font-size: 1.1rem;
  text-transform: uppercase;
  margin: 1rem auto;
  margin-top: 1.5rem;
`;

const SliderWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  padding-bottom: 1.5rem;
`;

const ShowcaseSlider = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${SlideForShowcase} 18s linear infinite;
  white-space: nowrap;
  overflow: hidden;
  position: absolute;
  width: 100%;
  height: auto;

  &:first-child {
    animation:
      ${SlideForShowcase} 18s linear 3s infinite,
      ${OpacityFadeOut} 2s ease-in-out 1s;
  }

  &:nth-child(2) {
    transform: translateX(100%);
    animation-delay: 9s;
  }

  &:last-child {
    transform: translateX(100%);
    animation-delay: 15s;
  }
`;
