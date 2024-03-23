import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react'
import { useActiveSessionCtx } from '../../context/active-section-context';
import type { SectionName } from './types';

export function useSectionInView(
    sectionName:SectionName,threshhold=0.75
) {
const {ref, inView } = useInView(
    {
        threshold:threshhold
    }
);

const { setActiveSection } = useActiveSessionCtx();
useEffect(() => {
  if (inView) {
    setActiveSection(sectionName);
  }
}, [inView, sectionName, setActiveSection]);

return {
    ref
}
}

