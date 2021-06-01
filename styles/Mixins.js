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

/**
 * Return different header styles.
 *
 * @module
 * @function Header
 *
 * @example
 * // Calls the `Header` function when style different headers
 * useKeyDown(27, hide)
 *
 * @param {htmlFor} html tag for different use
 */

export const header = (htmlFor) => css`
  color: ${({ color, theme }) => color || theme.colors.primary};
  margin: ${({ margin }) => margin || '0.8rem 0.8rem'};
  font-weight: ${({ fontWeight }) => fontWeight || '600'};
  max-width: ${({ maxWidth }) => maxWidth};
  transition: color 150ms ease-in-out;
  text-align: ${({ textAlign }) => textAlign};
  padding: ${({ padding }) => padding};
  display: ${({ display }) => display || 'block'};
  font-family: ${({ theme }) => theme.fonts.primary};

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
