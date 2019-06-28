CREATE TABLE family_member (
	family_member_id SERIAL NOT NULL primary key,
	first_name varchar(80) NOT NULL,
	last_name varchar(80) NOT NULL
	);
	
INSERT INTO family_member(family_member_id, first_name, last_name) VALUES(DEFAULT, 'Cristina', 'Irwin');
INSERT INTO family_member(family_member_id, first_name, last_name) VALUES(DEFAULT, 'Scott', 'Irwin');
INSERT INTO family_member(family_member_id, first_name, last_name) VALUES(DEFAULT, 'Simon', 'Irwin');
INSERT INTO family_member(family_member_id, first_name, last_name) VALUES(DEFAULT, 'Isabella', 'Irwin');
INSERT INTO family_member(family_member_id, first_name, last_name) VALUES(DEFAULT, 'Isaac', 'Irwin');

CREATE TABLE category (
	category_id SERIAL NOT NULL primary key,
	category_name varchar(80) NOT NULL
	);

INSERT INTO category(category_id, category_name) VALUES(DEFAULT, 'Dairy');	
INSERT INTO category(category_id, category_name) VALUES(DEFAULT, 'Frozen Foods');	
INSERT INTO category(category_id, category_name) VALUES(DEFAULT, 'Meat');	
INSERT INTO category(category_id, category_name) VALUES(DEFAULT, 'Produce');
INSERT INTO category(category_id, category_name) VALUES(DEFAULT, 'Cleaners');
INSERT INTO category(category_id, category_name) VALUES(DEFAULT, 'Paper Goods');
INSERT INTO category(category_id, category_name) VALUES(DEFAULT, 'Personal Care');
INSERT INTO category(category_id, category_name) VALUES(DEFAULT, 'Snacks');
INSERT INTO category(category_id, category_name) VALUES(DEFAULT, 'Canned Goods');
INSERT INTO category(category_id, category_name) VALUES(DEFAULT, 'Baking Items');
INSERT INTO category(category_id, category_name) VALUES(DEFAULT, 'Beverages');
INSERT INTO category(category_id, category_name) VALUES(DEFAULT, 'Dry Food');
INSERT INTO category(category_id, category_name) VALUES(DEFAULT, 'Bread/Cereal');
INSERT INTO category(category_id, category_name) VALUES(DEFAULT, 'Miscellaneous');


CREATE TABLE shopping_items (
	item_id SERIAL NOT NULL primary key,
	item varchar(100) NOT NULL
)
INSERT INTO shopping_items(item_id, item) VALUES(DEFAULT, 'Milk');	
	
	
CREATE TABLE item_categories (
	item_id int NOT NULL references item(item_id),
	category_id int NOT NUll references category(category_id)
	--PRIMARY KEY (genre_id, book_id)
	);

