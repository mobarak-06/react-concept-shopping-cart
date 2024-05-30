
import PropTypes from 'prop-types'

const SingleProduct = ({product, handleCart}) => {
    // console.log(handleCart);

    const {image, title, price, description} = product

  return (
    <div className="card w-96 bg-base-100 shadow-xl mb-5">
  <figure><img className="w-32" src= {image}alt="Shoes" /></figure>
  <div className="card-body">
    <span className="text-xl"> ${price} </span>
    <h2 className="card-title">{title.slice(0,10)}</h2>
    <p> {description.slice(0, 50)} </p>
    
    <div className="card-actions justify-center">
      <button onClick={()=>handleCart(product)} className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
  )
}

SingleProduct.propTypes = {
    product: PropTypes.object,
    handleCart: PropTypes.func
}

export default SingleProduct