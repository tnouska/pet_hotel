Pet Hotel Project
NOTE: Do not fork this repository. Instead, create your own repository from scratch.

Trello Board: https://trello.com/b/1mJRBCmZ/pet-hotel-weekend-project

DATABASE NAME: pet_hotel
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

PROGRESS:
- [x] basic file structure.
- [x] pool.js
- [x] set up server.js and map out routes
- [x] create sql tables and plan for data...
- [ ] 
- [ ] 
- [ ] 
- [ ] 


Features
Add owners
Add pets
Remove owners if no pets are assigned
Remove pets
Check in / out a pet
Show total number of pet next to each owner
Wireframes
Add Entry Page

Add Entry Page

Database
Start with two tables pets & owners. When base features are complete, add more tables as needed for stretch goals.

Stretch goals
- [ ] Angular Material for design
- [ ] Keep track of visits (you may need another table or two for this)
- [ ] Add images for pets
- [ ] Update pets and owners
