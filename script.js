<<<<<<< HEAD
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
=======

// script.js
function openLoginForm() {
    document.getElementById("loginForm").style.display = "block";
  }
  
  function closeLoginForm() {
    document.getElementById("loginForm").style.display = "none";
  }
//   document.getElementById('category').addEventListener('click', function() {
//     var submenu = document.getElementById('category-menu');
//     submenu.classList.toggle('active');
// });

// // Tương tự, bạn có thể làm cho phần thương hiệu
// document.getElementById('brand').addEventListener('click', function() {
//     var submenu = document.getElementById('brand-menu');
//     submenu.classList.toggle('active');
// });
>>>>>>> d035ed626bf97aa17000e86d7ac3cc8b2a21b400
