import { css } from 'styled-components';

export const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const flexBetween = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const flexColumn = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const gridCenter = css`
  display: grid;
  place-items: center;
`;

export const positionCenter = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const responsiveText = css`
  ${({ responsive }) =>
    responsive &&
    css`
      @media only screen and (max-width: 48em) {
        text-align: center;
      }
    `}
`;

/**
 * Return different header styles.
 *
 * @param {String} htmlFor - html tag string for different use
 * @returns {String} css style string
 * @example header('h1')
 */
export const header = (htmlFor) => css`
  color: ${({ color, theme }) => color || theme.colors.primary};
  margin: ${({ margin }) => margin || '0.8rem'};
  font-weight: ${({ fontWeight }) => fontWeight || '600'};
  max-width: ${({ maxWidth }) => maxWidth};
  transition: color 0.15s ease-in-out;
  padding: ${({ padding }) => padding};
  display: ${({ display }) => display || 'block'};
  font-family: ${({ theme }) => theme.fonts.primary};
  text-align: ${({ textAlign }) => textAlign};
  ${responsiveText}

  ${htmlFor === 'h1' &&
  css`
    margin: ${({ margin }) => margin || '1.2rem 0.8rem'};
    font-size: 3.6em;
  `};

  ${htmlFor === 'h2' &&
  css`
    font-size: 2.4em;
  `};

  ${htmlFor === 'h3' &&
  css`
    font-size: 2em;
  `};
`;

export const description = css`
  color: ${({ theme }) => theme.colors.primary};
  margin: ${({ margin }) => margin || '0.8rem'};
  transition: color 0.15s ease-in-out;
  display: ${({ display }) => display || 'block'};
  max-width: ${({ maxWidth }) => maxWidth};
  font-size: ${({ fontSize }) => fontSize || '1.6rem'};
  text-align: ${({ textAlign }) => textAlign};
  line-height: ${({ lineHeight }) => lineHeight || '2.75rem'};
  ${responsiveText}
`;
