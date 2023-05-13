# DotsNKey_MachineTest
### Demo Application Details
1. Implement a data table with dynamic pagination to display a list of users. The table should
include the following columns: ID, Full Name, Email, Country Name, State Name, City Name,
Languages, Active, Created Date, and Action(For Edit & Delete Button).
2. Create a modal pop-up form with validation to add a new user. The form should include
fields for Full Name, Email, Password, Country, State, City, and Languages. For Languages,
implement a searchable drop-down with the ability to select multiple languages. For Country,
State, and City, apply searchable drop-downs with cascading functionality.
3. Create a modal pop-up form with validation to update a existing user. The edit form should
have the same requirements as the new user form (described above).
4. Allow users to be deleted from the list with a confirmation modal dialog box. After the delete
process is complete, refresh the data table list.
5. Populate the following tables with static data: Country, State, City, and Languages.
Note: Add a button above the data table list to add a new customer, and include an Edit &
Delete button inside each row of the data table list.
### Data Table Schemas:
Use the following table schemas:
1. Customers:
ID (int, primary key), FullName (varchar), Email (varchar), Password (varchar), CountryID (int,
foreign key to Country table), StateID (int, foreign key to State table), CityID (int, foreign key to
City table), LanguagesIDs (varchar), IsActive (bit), CreatedDate (datetime), ModifiedDate
(datetime)
2. Languages:
ID (int, primary key), Name (varchar)
3. Country:
ID (int, primary key), Name (varchar)
4. State:
ID (int, primary key), Name (varchar), CountryID (int, foreign key to Country table)
5. City:
ID (int, primary key), Name (varchar), StateID (int, foreign key to State table)
Note: Make sure to implement proper database relationships between tables as indicated by
the foreign key references in the Customers table.
