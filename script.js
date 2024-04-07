import React, { useState } from 'react';
import { Element } from 'react-scroll';

const App = () => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setIsHeaderVisible(scrollPosition < 100); // Thay 100 bằng ngưỡng bạn muốn
  };

  // Thêm event listener khi component được mount
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      {isHeaderVisible ? (
        <header>
          {/* Nội dung của header */}
        </header>
      ) : (
        <nav>
          {/* Nội dung của navbar */}
        </nav>
      )}
      <Element name="scroll-to-element">
        {/* Nội dung của trang */}
      </Element>
    </div>
  );
};

export default App;
