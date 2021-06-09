import styled from 'styled-components';
import { motion } from 'framer-motion';
import { header, description, flexColumn, flexCenter } from 'styles/Mixins';

export const LessonContainer = styled(motion.section)`
  padding: 4.8rem 0 2rem;
  transition: padding 0.15s ease-in-out;
  overflow-x: hidden;
`;
