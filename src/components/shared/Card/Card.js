import React from 'react';
import {
  CardBox,
  CardLink,
  CardImage,
  CardInfo,
  CardTitle,
  CardDescription,
  CardLinkButton,
} from './styles';

export const Card = ({
  image,
  title,
  linkTo = '#',
  onClick,
  linkButtonTo,
  linkButtonOnClick,
  linkButtonLabel,
  linkButtonIcon,
  showNew,
  t,
  ...props
}) => {
  return (
    <CardBox>
      <CardImage className="card-image">
        {image && <img alt={title} src={image} />}
      </CardImage>
      <CardInfo>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{props.children}</CardDescription>
      </CardInfo>
      <CardLink href={linkTo} onClick={onClick}></CardLink>
      {linkButtonOnClick ? (
        <CardLinkButton href="#" onClick={linkButtonOnClick}>
          {linkButtonLabel}
        </CardLinkButton>
      ) : (
        linkButtonTo && (
          <CardLinkButton target="_blank" href={linkButtonTo}>
            {linkButtonLabel}
            {/* {linkButtonIcon && <Icon iconName={linkButtonIcon} small />} */}
          </CardLinkButton>
        )
      )}
    </CardBox>
  );
};
