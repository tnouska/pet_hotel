--databse name: pet_hotel

CREATE TABLE pets(
	id SERIAL PRIMARY KEY,
	owner_id INT REFERENCES "owner" ON DELETE CASCADE,
	name varchar(255),
	type varchar(255),
	breed varchar(255),
	color varchar(255),
	checked_in boolean DEFAULT true
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
    pet_id INT REFERENCES "pets"  ON DELETE CASCADE,
    owner_id INT REFERENCES "owner"  ON DELETE CASCADE
);

INSERT INTO owner
	(first_name, last_name, phone_number)
VALUES('Frank', 'Last', '123-456-7890'),('Greg', 'Harvy','112-223-4445');

INSERT INTO pets
	(owner_id,name,type,breed,color)
VALUES(1, 'Leonidus', 'Cat', 'Tabby', 'Orange'),(2, 'Harry', 'Dog', 'Lab', 'Yellow');