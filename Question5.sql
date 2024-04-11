CREATE TABLE Hotels (
 hotel_id INT PRIMARY KEY,
 hotel_name VARCHAR(255)
 ); 
 
 
CREATE TABLE Menus (
 menu_id INT PRIMARY KEY,
 hotel_id INT,
 menu_name VARCHAR(255),
 FOREIGN KEY (hotel_id) REFERENCES Hotels(hotel_id) -- Add other menu details columns as needed
 ); 
 
 
 CREATE TABLE FoodItems (
 food_item_id INT PRIMARY KEY,
 food_item_name VARCHAR(255),
 price DECIMAL(10, 2) -- Add other food item details columns as needed
 ); 
 
CREATE TABLE Menu_Food_Item (
  menu_id INT,
  food_item_id INT,
  FOREIGN KEY (menu_id) REFERENCES Menus(menu_id),
  FOREIGN KEY (food_item_id) REFERENCES FoodItems(food_item_id)
);