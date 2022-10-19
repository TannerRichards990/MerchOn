// import React from 'react';
// import CartItem from './CartItem';

// export default function Cart({ items, total, removeFromCart }) {
//   return (
//     <div>
//       <h2>Shopping Cart</h2>
//       <div className='cart'>
//         <div className='panel'>
//           {items.length > 0 && (
//             <div>
//               {items.map(item => (
//                 <CartItem key={item.id} {...item} onClick={() => removeFromCart(item.id)} />
//               ))}
//             </div>
//           )}
//           {items.length === 0 && (
//             <div>Empty Cart</div>
//           )}
//           <div>Total: {total}</div>
//         </div>
//       </div>
//     </div>
//   );
// }
