import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart, deleteFromCart, addToCart } from '../redux/cartSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import './CartPage.css';

const CartPage = () => {
    const dispatch = useDispatch();
    const { carts, totalQuantity, totalAmount } = useSelector((state) => state.cart);

    return (
        <>
            {carts.length === 0 ? (
                <h2 className="empty-cart-message">No Items Added yet</h2>
            ) : (
                <div className="cart-container">
                    <div className="cart-left">
                        <table className="cart-table">
                            <thead className="cart-thead">
                                <tr>
                                    <th>Product</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Remove</th>
                                </tr>
                            </thead>
                            <tbody className="cart-tbody">
                                {carts.map((item) => (
                                    <tr key={item.id} className="cart-tr">
                                        <td>
                                            <div className="cart-img-container">
                                                <img src={item.imageUrl} alt={item.title} className="cart-img" />
                                            </div>
                                        </td>
                                        <td>
                                            <span className="cart-name">{item.title}</span>
                                        </td>
                                        <td>
                                            <span className="cart-price">${item.price.toFixed(2)}</span>
                                        </td>
                                        <td>
                                            <div className="quantity-control">
                                                <button className="quantity-btn" onClick={() => dispatch(deleteFromCart({id: item.id, removeOne: true}))}>
                                                    <FontAwesomeIcon icon={faMinus} />
                                                </button>
                                                <span className="cart-quantity">{item.quantity}</span>
                                                <button className="quantity-btn" onClick={() => dispatch(addToCart(item))}>
                                                    <FontAwesomeIcon icon={faPlus} />
                                                </button>
                                            </div>
                                        </td>
                                        <td>
                                            <span className="cart-trash" onClick={() => dispatch(deleteFromCart({id: item.id, removeOne: false}))}>
                                                <FontAwesomeIcon icon={faTrash} />
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="cart-right">
                        <div className="checkout-wrapper">
                            <h2 className="checkout-title">CART TOTAL</h2>
                            <div className="total-text">
                                <b className="total-text-title">Subtotal:</b>${totalAmount.toFixed(2)}
                            </div>
                            <div className="total-text">
                                <b className="total-text-title">Total items:</b>{totalQuantity}
                            </div>
                            <div className="total-text">
                                <b className="total-text-title">Total:</b>${totalAmount.toFixed(2)}
                            </div>
                            <button className="checkout-button">CHECKOUT NOW!</button>
                        </div>
                    </div>
                    <button className="clear-cart-button" onClick={() => dispatch(clearCart())}>Clear cart</button>
                </div>
            )}
        </>
    );
};

export default CartPage;
