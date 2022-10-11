// import React from 'react';
// import Colors from '../../components/Product/Colors';
// import DetailsThumb from '../../components/Product/DetailsThumb';
// import styles from './Product.module.css'

// class Products extends React.Component{

//     state = {
//       products: [
//         {
//           "_id": "1",
//           "title": "Nike Shoes",
//           "src": [
//               "../../images/1.jpg",
//               "../../images/1.jpg",
//               "../../images/2.jpg",
//               "../../images/3.jpg"
//             ],
//           "description": "UI/UX designing, html css tutorials",
//           "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
//           "price": 23,
//           "colors":["red","black","crimson","teal"],
//           "count": 1
//         }
//       ],
//       index: 0
//     };

//     myRef = React.createRef();

//     handleTab = index =>{
//       this.setState({index: index})
//       const images = this.myRef.current.children;
//       for(let i=0; i<images.length; i++){
//         images[i].className = images[i].className.replace("active", "");
//       }
//       images[index].className = "active";
//     };

//     componentDidMount(){
//       const {index} = this.state;
//       this.myRef.current.children[index].className = "active";
//     }

//     render(){
//       const {products, index} = this.state;
//       return(
//         <div className={styles.app}>
//           {
//             products.map(item =>(
//               <div className={styles.details} key={item._id}>
//                 <div className={styles.bigImg}>
//                     {console.log(item.src[index])}
//                     <img src={require(item.src[index])} alt=""/>
//                     {/* item.src[index] */}
//                 </div>

//                 <div className={styles.box}>
//                   <div className={styles.row}>
//                     <h2>{item.title}</h2>
//                     <span>{item.price}</span>
//                   </div>
//                   <Colors colors={item.colors} />

//                   <p>{item.description}</p>
//                   <p>{item.content}</p>

//                   <DetailsThumb images={item.src} tab={this.handleTab} myRef={this.myRef} />
//                   <button className={styles.cart}>Add to cart</button>

//                 </div>
//               </div>
//             ))
//           }
//         </div>
//       );
//     };
//   }

//   export default Products;
