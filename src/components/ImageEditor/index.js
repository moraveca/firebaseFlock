import React from 'react'
import AvatarEditor from 'react-avatar-editor'
 
function ImageEditor(props) {
    return (
      <AvatarEditor
        image="https://assets.foxdcg.com/dpp-uploaded/images/bobs-burgers/seriesDetail.jpg?fit=inside%7C375:211"
        width={250}
        height={250}
        border={50}
        color={[255, 255, 255, 0.6]} // RGBA
        scale={1.2}
        rotate={0}
      />
    )
}
 
export default ImageEditor