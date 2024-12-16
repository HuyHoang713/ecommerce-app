import Box from '@mui/material/Box'
import Footer from '~/components/layout/Footer'
import Header from '~/components/layout/Header'
import ProductDetailContent from './ProductDetailContent'

const ProductDetails = () => {
  return (
    <Box sx={{ fontFamily: 'Arial, sans-serif' }}>
      <Header />
      <ProductDetailContent />
      <Footer />
    </Box>
  )
}

export default ProductDetails

// -- Bảng Products
// CREATE TABLE Products (
//     product_id INT AUTO_INCREMENT PRIMARY KEY,
//     name VARCHAR(255) NOT NULL,
//     description TEXT NOT NULL,
//     price DECIMAL(10, 2) NOT NULL,
//     stock INT NOT NULL,
//     category_id INT NOT NULL,
//     image_url VARCHAR(255),
//     created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
//     updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
// );

// -- Bảng Categories
// CREATE TABLE Categories (
//     category_id INT AUTO_INCREMENT PRIMARY KEY,
//     name VARCHAR(255) NOT NULL,
//     description TEXT
// );

// -- Bảng ProductOptions
// CREATE TABLE ProductOptions (
//     option_id INT AUTO_INCREMENT PRIMARY KEY,
//     product_id INT NOT NULL,
//     option_type ENUM('size', 'color', 'material', 'style') NOT NULL,
//     option_value VARCHAR(100) NOT NULL,
//     is_available BOOLEAN DEFAULT TRUE,
//     FOREIGN KEY (product_id) REFERENCES Products(product_id) ON DELETE CASCADE
// );

// -- Bảng ProductReviews
// CREATE TABLE ProductReviews (
//     review_id INT AUTO_INCREMENT PRIMARY KEY,
//     product_id INT NOT NULL,
//     customer_name VARCHAR(255) NOT NULL,
//     rating TINYINT CHECK (rating BETWEEN 1 AND 5),
//     review_text TEXT,
//     created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
//     FOREIGN KEY (product_id) REFERENCES Products(product_id) ON DELETE CASCADE
// );

// -- Bảng RelatedProducts
// CREATE TABLE RelatedProducts (
//     product_id INT NOT NULL,
//     related_product_id INT NOT NULL,
//     PRIMARY KEY (product_id, related_product_id),
//     FOREIGN KEY (product_id) REFERENCES Products(product_id) ON DELETE CASCADE,
//     FOREIGN KEY (related_product_id) REFERENCES Products(product_id) ON DELETE CASCADE
// );

// -- Bảng ProductImages
// CREATE TABLE ProductImages (
//     image_id INT AUTO_INCREMENT PRIMARY KEY,
//     product_id INT NOT NULL,
//     image_url VARCHAR(255) NOT NULL,
//     is_primary BOOLEAN DEFAULT FALSE,
//     FOREIGN KEY (product_id) REFERENCES Products(product_id) ON DELETE CASCADE
// );

// -- Bảng ProductTags
// CREATE TABLE ProductTags (
//     tag_id INT AUTO_INCREMENT PRIMARY KEY,
//     name VARCHAR(100) NOT NULL UNIQUE
// );

// -- Bảng ProductTagMapping
// CREATE TABLE ProductTagMapping (
//     product_id INT NOT NULL,
//     tag_id INT NOT NULL,
//     PRIMARY KEY (product_id, tag_id),
//     FOREIGN KEY (product_id) REFERENCES Products(product_id) ON DELETE CASCADE,
//     FOREIGN KEY (tag_id) REFERENCES ProductTags(tag_id) ON DELETE CASCADE
// );

// -- Bảng Discounts
// CREATE TABLE Discounts (
//     discount_id INT AUTO_INCREMENT PRIMARY KEY,
//     product_id INT NOT NULL,
//     discount_percentage DECIMAL(5, 2) NOT NULL CHECK (discount_percentage BETWEEN 0 AND 100),
//     start_date DATETIME NOT NULL,
//     end_date DATETIME NOT NULL,
//     FOREIGN KEY (product_id) REFERENCES Products(product_id) ON DELETE CASCADE
// );