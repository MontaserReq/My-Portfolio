// import { useEffect, useState } from 'react';

// const ThreeDImageComponent = () => {
//   const [imageSrc, setImageSrc] = useState('');

//   useEffect(() => {
//     // هذا الجزء يمكن أن ينفذ عندما يكون الحدث المناسب أو عند تحميل الصفحة
//     const loadImage = () => {
//       setImageSrc('https://drive.google.com/drive/folders/1MR9lDvnlRMoi5jZh71XASmGGKgoG9Nce?usp=drive_link');
//     };

//     loadImage();
//   }, []);

//   return (
//     <div>
//       {imageSrc ? (
//         <img src={imageSrc} alt="3D Image" />
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// };

// export default ThreeDImageComponent;
