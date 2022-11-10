import React from 'react'
import { Element } from 'react-scroll'

const Product = ({title,titleColor,description,descriptionColor,background,btnTxt,btnOnClick,imgList,Img}) => {
  return (
    <Element style={{backgroundColor: `${background}`}} name='Product' class="position-relative overflow-hidden m-md-3 text-center">
    <div>
      <div class="col-md-5 p-lg-5 mx-auto">
        <h1 class="display-4 fw-normal" style={{color: `${titleColor}`}}>{title}</h1>
        <p class="lead fw-normal" style={{color: `${descriptionColor}`}}>{description}</p>
        {btnTxt?<button onClick={btnOnClick} class="btn btn-outline-secondary">{btnTxt}</button>:null}
      </div>
      {Img?<img src={Img}/>:null}
    </div>

    {imgList?imgList.map((img)=>{
      return (
        <img style={{width: `10%`,margin: `1%`}} src={img} alt="_blank" />
      )
    }):null}

    </Element>
  )
}

export default Product