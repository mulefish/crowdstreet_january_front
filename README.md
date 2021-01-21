
# Dependancies
react   

# Rules
I: landing page to collect basic info
  a:Investment Amount (Currency)
  b: Investment Type (Text) eg. “Bond”, “Stocks”, “Real Estate” etc...
  c: Total Net Worth (Currency)
  d: User Estimated Yearly Income (Currency)
  e: User Estimated Credit Score (Number from 300-850)
II:  
Based on I a ~ e -> simulated network call -> redirect the user to
  a: either a new account creation page or a
  b: disqualification notice.
III: The styling should be simple, plain but deliberate.

IV: New Account Page
  a: Username (Text)
  b: Password (Text) 
    1: 8 characters length +
    2: Have a number or special character
    3: Have password dupe check

V: Disqualification Page
  a: fake information to get in contact with a customer service
  b: no navigation away from page

VI: API call
  a: mock fetch call for your backend communication -
  b: same interface as the real fetch and return a promise wrapped response object.
  c: The response should return disqualify if
    1: Investment Amount is more than 1/5th of their Yearly Income or 
    2: Estimated Credit is below 600, or 
    3: Investment Amount is 3%+ of their Total Net Worth. 
    4: Otherwise it should return a positive qualification flag. 
    5: A `Bad Request` response should be returned for any Investment Amount above $9,000,000.

# QA acceptance rules



# For the RESTful logic 
See validateInputs() in the components/LandingPage.jsx files and in components/utils.js's see the method fake_restful_call(). 

# The images
Via https://www.iconpacks.net/free-icon/rocket-1206.html or https://thenounproject.com/term/dead-fish/21632/    
Fish image is from Matt Brooks of thenounproject  

# Paths: 
Happy path: http://localhost:3000/ -> http://localhost:3000/create -> http://localhost:3000/success  
Failure mode:  http://localhost:3000/ ->  http://localhost:3000/sorry

# Unit tests: 
TODO: I do not plan to unit test the .jsx pages, but util.js ought to be. 
