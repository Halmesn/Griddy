import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Button = styled(motion.button)`
  border: 0;
  cursor: pointer;
  font-size: 1.6rem;
  font-family: ${({ theme }) => theme.fonts.primary};
  padding: 1.2rem;
  border-radius: 0.8rem;
  margin: ${({ margin }) => margin || '0.5rem 0.5rem'};
  background: ${({ theme }) => theme.colors.buttonPrimary};
  color: ${({ theme }) => theme.colors.primary};
  transition: background-color 0.15s ease-in-out, color 0.15s ease-in-out;
`;
