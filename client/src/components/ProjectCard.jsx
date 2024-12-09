import React, { useState } from 'react';

const ProjectCard = ({ projectDesc ,proImg}) => {
  const [hoverDirection, setHoverDirection] = useState('');
  const [isHovered, setIsHovered] = useState(false);

  const getDirection = (e, element) => {
    const { width, height, top, left } = element.getBoundingClientRect();
    const x = e.clientX - left - width / 2;
    const y = e.clientY - top - height / 2;

    // Calculate angle and determine direction
    const angle = Math.atan2(y, x) * (180 / Math.PI) + 180;
    if (angle >= 45 && angle < 135) return 'top';
    if (angle >= 135 && angle < 225) return 'right';
    if (angle >= 225 && angle < 315) return 'bottom';
    return 'left';
  };

  const handleMouseEnter = (e) => {
    const direction = getDirection(e, e.currentTarget);
    setHoverDirection(direction);
    setIsHovered(true);
  };

  const handleMouseLeave = (e) => {
    const direction = getDirection(e, e.currentTarget);
    setHoverDirection(direction);
    setIsHovered(false);
  };

  const getTransformClasses = () => {
    switch (hoverDirection) {
      case 'top':
        return isHovered ? 'translate-y-0' : '-translate-y-full';
      case 'bottom':
        return isHovered ? 'translate-y-0' : 'translate-y-full';
      case 'left':
        return isHovered ? 'translate-x-0' : '-translate-x-full';
      case 'right':
        return isHovered ? 'translate-x-0' : 'translate-x-full';
      default:
        return 'translate-y-full'; // Hidden off-screen by default
    }
  };

  return (
    <div
      className="relative flex items-center justify-center max-w-[320px] min-h-[400px] bg-[--cardBg] overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={proImg}
        alt=""
        className="w-full h-full p-5 object-cover"
      />
      <div
        className={`absolute inset-0 bg-[--green]  flex items-center justify-center text-white text-lg font-bold transition-transform duration-300 ${getTransformClasses()}`}
      >
        {projectDesc}
      </div>
    </div>
  );
};

export default ProjectCard;
