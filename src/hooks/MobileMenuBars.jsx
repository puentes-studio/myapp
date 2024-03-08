// import { useEffect } from 'react';

// const MobileMenu = () => {
//     useEffect(() => {
//         const handleMobileMenuClick = () => {
//             const mobileMenu = document.getElementById('mobile-menu');
//             console.log(mobileMenu)
//             const navList = document.querySelector('.nav-list');
//             if (mobileMenu && navList) {
//                 mobileMenu.classList.toggle('active');
//                 navList.classList.toggle('show');
//             }
//         };

//         const mobileMenu = document.getElementById('mobile-menu');
//         if (mobileMenu) {
//             mobileMenu.addEventListener('click', handleMobileMenuClick);
//         }

//         return () => {
//             if (mobileMenu) {
//                 mobileMenu.removeEventListener('click', handleMobileMenuClick);
//             }
//         };
//     }, []);
// };


// export default MobileMenu;
