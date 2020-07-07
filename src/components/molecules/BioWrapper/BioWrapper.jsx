// import React, { useState, useRef, useEffect } from "react";
// import Modal from "../../atoms/Modal";
// import Biography from "../../molecules/";
// import BioCard from "../../molecules/";

// export default function ModalVideoWrapper({ member, bio }) {
//   const [open, setOpen] = useState(false);
//   const { BioCard } = useRef(null);
//   const handleOpenModal = () => {
//     setOpen(true);
//   };
//   useEffect(() => {
//     const handleEsc = event => {
//       event = event || window.event;
//       if (!open) {
//         return null;
//       }
//       if (event.keyCode === 27 || event.type === "click") {
//         setOpen(false);
//         openButton.current.focus();
//       }
//     };
//     window.addEventListener("keydown", handleEsc);
//     window.addEventListener("click", handleEsc);
//     return () => {
//       window.removeEventListener("keydown", handleEsc);
//       window.removeEventListener("click", handleEsc);
//     };
//   }, [open]);
//   return (
//     <React.Fragment>
//       <div className="bioCard" onClick={handleOpenModal}>
//         {BioCard}
//       </div>
//       <Modal open={open} source={source} videoID={videoID}>
//           {Biography}
//       </Modal>
//     </React.Fragment>
//   );
// }