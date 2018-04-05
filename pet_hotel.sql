--databse name: pet_hotel

CREATE TABLE pets(
	id SERIAL PRIMARY KEY,
	owner_id INT REFERENCES "owner",
	name varchar(255),
	type varchar(255),
	breed varchar(255),
	color varchar(255),
	checked_in boolean
	);
	
CREATE TABLE owner(
	id SERIAL PRIMARY KEY,
	first_name varchar(255),
	last_name varchar(255),
	phone_number varchar(255)
	);

CREATE TABLE pictures(
    id SERIAL PRIMARY KEY,
    pic_url varchar(255),
    pet_id INT REFERENCES "pets",
    owner_id INT REFERENCES "owner"
);