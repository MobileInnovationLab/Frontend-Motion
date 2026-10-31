import { useState, useMemo } from 'react';
import { DIVISIONS } from '../constants/peopleConstants';

export const usePeople = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  const sortedGenerations = useMemo(() => {
    return DIVISIONS.sort((a, b) => a.id - b.id);
  }, []);

  const filteredMembers = useMemo(() => {
    if (activeCategory === 0) {
      // Return all members from all divisions
      return DIVISIONS.slice(1).flatMap(div => div.members);
    }
    const selectedDivision = DIVISIONS.find(div => div.id === activeCategory);
    return selectedDivision ? selectedDivision.members : [];
  }, [activeCategory]);

  return {
    activeCategory,
    setActiveCategory,
    sortedGenerations,
    filteredMembers,
  };
}; 