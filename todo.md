# Project TODO list

[x] - first transaction list using mock data

[x] - integrate MUI Datatables `[in dev]` (branch `table`)

[ ] - consider refactoring to CSS Modules or Styled Components

[ ] - start Node.js + MongoDB server project

[ ] - Account settings

[ ] - auth ? Passport.js : 0Auth : Okta : custom?

[ ] - testssss

[ ] - Figma design for mobile first

[ ] - standing orders tables by weekly & monthly, `day` text value depdendend on if its weekly or monthly

[ ] - View of split the receipt into categories with range sliders (easy UI)

[ ] - `Add Transaction` & `Add Receipt` buttons next to section headers (plus icon on circle, animated text and background on :hover and :focus)




### [ ] - IMPORTANT - forecast view (?? should this be generated on the fly with JS in the Client OR server generated)


# Data Schema

Ideally have to use relational database, however worth a try with NoSQL like Mongo for the first iteration.


### Table `users`

### Table `joint_accounts`

### Table `transactions`
  - created_at [datetime]
  - updated_at [datetime]
  - transaction_date [datetime]
  - id [int] [primary key] [not null]
  - description [varchar(30)]
  - userId [int] [foregin key] [not null]
  - value [int] OR [numeric(precision=8, scale=4)]
      
      Note: for the values stores as integer arithmetic operations are much quicker comparing to those stored as numeric 
  - categoryId [int] [foreign key] [not null]
  - isPaid [boolean] [not null]
  
### Table `app_config`

### Table `standing_orders`

### Table `monthly_avrg_costs`



# `Add Receipt` vs `Add Transaction`

If the new entry is a transaction, than single record is added.

If the new entry is a receipt, than multiple records are added and each should hold transaction_id.

*Question*: should the receipts have separate table? Or have transaction table hold all records with optional receipt_id field? 