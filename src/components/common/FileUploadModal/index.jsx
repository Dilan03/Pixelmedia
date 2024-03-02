import React from "react";
import PropTypes from 'prop-types';
import { Button, Modal, Progress } from "antd";
//import "./index.scss";

FileUploadModal.propTypes = {
   modalOpen: PropTypes.any,
   setModalOpen: PropTypes.any,
   getImage: PropTypes.any,
   uploadImage: PropTypes.any,
   currentImage: PropTypes.any,
   progress: PropTypes.any,
};

export default function FileUploadModal({
   modalOpen,
   setModalOpen,
   getImage,
   uploadImage,
   currentImage,
   progress,
}) {
   return (
      <div>
         <Modal
            title="Add a Profile Image"
            centered
            open={modalOpen}
            onOk={() => setModalOpen(false)}
            onCancel={() => setModalOpen(false)}
            footer={[
               <Button
                  disabled={currentImage.name ? false : true}
                  key="submit"
                  type="primary"
                  onClick={uploadImage}
               >
                  Upload Profile Picture
               </Button>,
            ]}
         >
            <div className="image-upload-main">
               <p>{currentImage.name}</p>
               <label className="upload-btn" htmlFor="image-upload">
                  Add an Image
               </label>
               {progress === 0 ? (
                  <></>
               ) : (
                  <div className="progress-bar">
                     <Progress type="circle" percent={progress} />
                  </div>
               )}
               <input hidden id="image-upload" type={"file"} onChange={getImage} />
            </div>
         </Modal>
      </div>
   );
}