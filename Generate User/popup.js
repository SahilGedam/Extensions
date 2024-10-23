// Function to generate a random date of birth for users aged between 18 and 70
function generateRandomDOB() {
    const today = new Date();
    const minAge = 18;
    const maxAge = 70;
    const birthYear = today.getFullYear() - (Math.floor(Math.random() * (maxAge - minAge)) + minAge);
    const birthMonth = Math.floor(Math.random() * 12);
    const birthDay = Math.floor(Math.random() * 28) + 1;
    
    return new Date(birthYear, birthMonth, birthDay).toLocaleDateString();
  }
  
 // Function to generate a random string
function generateRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}
  
  // Function to generate a random email
  function generateRandomEmail(firstName, lastName) {
    const domains = ['example.com', 'test.com', 'email.com','gmail.com','autoflowtech.com'];
    const randomDomain = domains[Math.floor(Math.random() * domains.length)];
    return `${firstName.toLowerCase()}.${lastName.toLowerCase()}@${randomDomain}`;
  }
  
  // Function to generate a random password
// Function to generate a random password
function generateRandomPassword() {
    const length = Math.floor(Math.random() * 5) + 8; // Random length between 8 and 12
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?';
    
    // Ensure at least one of each character type
    const passwordArray = [
        lowercase[Math.floor(Math.random() * lowercase.length)],
        uppercase[Math.floor(Math.random() * uppercase.length)],
        numbers[Math.floor(Math.random() * numbers.length)],
        symbols[Math.floor(Math.random() * symbols.length)]
    ];
    
    // Fill the rest of the password length with random characters from all sets
    const allCharacters = lowercase + uppercase + numbers + symbols;
    
    for (let i = passwordArray.length; i < length; i++) {
        passwordArray.push(allCharacters[Math.floor(Math.random() * allCharacters.length)]);
    }
    
    // Shuffle the password array to avoid predictable patterns
    const shuffledPassword = passwordArray.sort(() => Math.random() - 0.5).join('');
    
    return shuffledPassword;
}
  
  // Function to generate random first and last names
  function generateRandomName() {
    const firstNames = [
        'John', 'Jane', 'Alex', 'Emily', 'Chris', 'Taylor', 'Jordan', 'Sam',
        'Michael', 'Sarah', 'David', 'Jessica', 'Daniel', 'Laura', 'Matthew', 
        'Ashley', 'Andrew', 'Megan', 'Joshua', 'Samantha', 'Ryan', 'Amanda', 
        'Ethan', 'Avery', 'James', 'Sophia', 'Jacob', 'Isabella', 'William', 
        'Mia', 'Alexander', 'Charlotte', 'Joseph', 'Grace', 'David', 'Lily', 
        'Samuel', 'Zoe', 'Benjamin', 'Chloe', 'Daniel', 'Nora', 'Gabriel', 
        'Scarlett', 'Henry', 'Hannah', 'Isaac', 'Aria', 'Sebastian', 'Luna', 
        'Oliver', 'Ellie', 'Lucas', 'Aubrey', 'Jackson', 'Addison', 'Caleb', 
        'Mila', 'Nathan', 'Peyton', 'Logan', 'Lucy', 'Mason', 'Riley', 
        'Leo', 'Madison', 'Julian', 'Bella', 'Carter', 'Savannah', 'David', 
        'Kylie', 'Matthew', 'Victoria', 'Ryan', 'Natalie', 'Dylan', 'Ruby', 
        'Adam', 'Sadie', 'Owen', 'Ariana', 'Jaxon', 'Eliana', 'Charles', 
        'Aurora', 'Ezra', 'Skylar', 'Nolan', 'Sophie', 'Aaron', 'Clara', 
        'Eli', 'Paisley', 'Theo', 'Genesis', 'Chase', 'Faith', 'Zachary', 
        'Cora', 'Kevin', 'Alyssa', 'Gavin', 'Lydia', 'Liam', 'Katherine', 
        'Jared', 'Willow', 'Patrick', 'Maria', 'Simon', 'Naomi', 'Vincent', 
        'Emilia', 'Leonardo', 'Brooklyn', 'Xander', 'Violet', 'Harrison', 
        'Penelope', 'Malachi', 'Skylar', 'Isaiah', 'Lila', 'Hugo', 'Juliana', 
        'Ryder', 'Bianca', 'Max', 'Lola', 'Dominic', 'Adele', 'Giselle', 
        'Daphne', 'Bennett', 'Wesley', 'Alice', 'Freddie', 'Margaret', 
        'Quinn', 'Stella', 'Zara', 'Santiago', 'Julius', 'Rosa', 'Morgan', 
        'Kendall', 'Sophie', 'Anastasia', 'Elliot', 'Haven', 'Cassidy', 
        'Raquel', 'Milo', 'Juliet', 'Maddox', 'Finn', 'Amara', 'Lana', 
        'Alison', 'Melody', 'Aidan', 'Luka', 'Liam', 'Diana', 'Phoenix', 
        'Alana', 'Nina', 'Sage', 'Piper', 'Maya', 'River', 'Harlow', 
        'Kian', 'Jolie', 'Sabrina', 'Graham', 'Aliana', 'Rafael', 
        'Simone', 'Salem', 'Kiera', 'Mila', 'Dorian', 'Sierra', 'Rhea', 
        'Kane', 'Teagan', 'Elias', 'Veronica', 'Winston', 'Haley', 
        'Elise', 'Lindsey', 'Evelyn', 'Arielle', 'Fiona', 'Cynthia', 
        'Sophie', 'Emery', 'Sienna', 'Hope', 'Callum', 'Maggie', 
        'Brielle', 'Lydia', 'Axton', 'Marissa', 'Nevaeh', 'Casey', 
        'Ivy', 'Emory', 'Bryson', 'Charity', 'Marlowe', 'Kendrick', 
        'Justine', 'Zoe', 'Emmeline', 'Gunner', 'Frankie', 'Graham', 
        'Zelda', 'Hunter', 'Bristol', 'Kyla', 'Marilyn', 'Judah', 
        'Indigo', 'Zane', 'Desmond', 'Ember', 'Carmen', 'Tristan', 
        'Vivian', 'Reagan', 'Alyssa', 'Amira', 'Alfredo', 'Leonora', 
        'Matteo', 'Arianna', 'Dominique', 'Ximena', 'Margot', 'Cecilia', 
        'Cecily', 'Yara', 'Kamryn', 'Paxton', 'Anya', 'Renata', 
        'Zara', 'Nash', 'Dara', 'Noelle', 'Rosalie', 'Sandy', 
        'Chloe', 'Layla', 'Dario', 'Devin', 'Adele', 'Keira', 
        'Elsa', 'Sky', 'Stefan', 'Adeline', 'Ellison', 'Kara', 
        'Emberly', 'Anika', 'Ashlyn', 'Bodhi', 'Elaina', 'Lorenzo', 
        'Jovany', 'Mckenzie', 'Hugo', 'Roxanne', 'Giana', 'Gideon', 
        'Alfred', 'Eden', 'Ivy', 'Asher', 'Kamila', 'Greta', 
        'Logan', 'Skylar', 'Bodhi', 'Layne', 'Lance', 'Darius', 
        'Neal', 'Coral', 'Alison', 'Talia', 'Terrell', 'Blake', 
        'Reed', 'Brayden', 'Celeste', 'Lexi', 'Weston', 'Rylan', 
        'Anya', 'Raiden', 'Zane', 'Luca', 'Mika', 'Samson', 
        'Tatiana', 'Kylie', 'Sierra', 'Corbin', 'Roslyn', 'Darby', 
        'Jaiden', 'Lorelai', 'Sampson', 'Hailie', 'Sampson', 
        'Samantha', 'Maddison', 'Jaden', 'Alena', 'Dawson', 
        'Daphne', 'Calista', 'Marguerite', 'Alayna', 'Ashton', 
        'Charlotte', 'Lainey', 'Noel', 'Darcy', 'Jovita', 
        'Gage', 'Hayley', 'Libby', 'Micah', 'Marlo', 'Zuri', 
        'Aliyah', 'Carmen', 'Rocco', 'Addison', 'Marley', 
        'Archer', 'Demi', 'Peyton', 'Elle', 'Phoenix', 'Quincy', 
        'Ryder', 'Siena', 'Emery', 'Brylee', 'Cassie', 
        'Hunter', 'Easton', 'Cleo', 'Tatum', 'Mara', 'Hattie', 
        'Greer', 'Haven', 'Reagan', 'Marisol', 'Tess', 'Liesl'
      ];
      
      const lastNames = [
        'Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis',
        'Rodriguez', 'Martinez', 'Hernandez', 'Lopez', 'Gonzalez', 'Wilson', 'Anderson',
        'Thomas', 'Taylor', 'Moore', 'Jackson', 'Martin', 'Lee', 'Perez', 'Thompson',
        'White', 'Harris', 'Sanchez', 'Clark', 'Ramirez', 'Lewis', 'Robinson', 'Walker',
        'Young', 'Allen', 'King', 'Wright', 'Scott', 'Torres', 'Nguyen', 'Hill', 
        'Flores', 'Green', 'Adams', 'Nelson', 'Baker', 'Hall', 'Rivera', 'Campbell',
        'Mitchell', 'Carter', 'Roberts', 'Gomez', 'Phillips', 'Evans', 'Turner', 
        'Diaz', 'Parker', 'Cruz', 'Edwards', 'Collins', 'Reyes', 'Stewart', 
        'Morris', 'Murphy', 'Cook', 'Rogers', 'Morgan', 'Cooper', 'Peterson', 
        'Bailey', 'Reed', 'Kelly', 'Howard', 'Ramos', 'Kim', 'Cox', 'Ward', 
        'Richardson', 'Wood', 'Watson', 'Brooks', 'Bennett', 'Gray', 'James', 
        'Hayes', 'Hughes', 'Price', 'Alvarez', 'Castillo', 'Sanders', 'Patel', 
        'Myers', 'Long', 'Ross', 'Foster', 'Jimenez', 'Powell', 'Jenkins', 
        'Perry', 'Russell', 'Sullivan', 'Ortega', 'Henderson', 'Coleman', 
        'Simmons', 'Patterson', 'Jordan', 'Reynolds', 'Fisher', 'Ellis', 
        'Harrison', 'Gibson', 'McDonald', 'Burns', 'Bishop', 'Newton', 
        'Caldwell', 'Chavez', 'Little', 'Tucker', 'Olson', 'Stevens', 
        'Serrano', 'Duncan', 'Armstrong', 'Schmidt', 'Carroll', 'Holland', 
        'Bates', 'Daniel', 'Harmon', 'Cannon', 'Ingram', 'Murray', 
        'Mann', 'Barker', 'Keith', 'Douglas', 'Curry', 'Casey', 
        'Farrell', 'Nichols', 'Allison', 'Salazar', 'Ferguson', 
        'Cameron', 'Patton', 'Knox', 'Stein', 'Joseph', 'Mason', 
        'Bradley', 'Wolfe', 'Freeman', 'Hardy', 'Glover', 'Randall', 
        'Reeves', 'Sampson', 'Strickland', 'George', 'Barrett', 
        'Riddle', 'Roberson', 'Hensley', 'Floyd', 'Oneal', 'Bass', 
        'Poole', 'Bradford', 'Massey', 'Sheppard', 'Dyer', 'Vasquez', 
        'York', 'Acosta', 'Cameron', 'Holt', 'Blevins', 'Bridges', 
        'Aguirre', 'Sparks', 'Dickson', 'Underwood', 'Pace', 'Gentry', 
        'Yates', 'Charles', 'Cochran', 'Knox', 'Barber', 'Bowers', 
        'Sampson', 'Powers', 'Lynn', 'Klein', 'Joseph', 'Nash', 
        'Gonzalez', 'Hurst', 'Tyler', 'Riley', 'Walsh', 'Glass', 
        
      ];
      
    
    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    
    return { firstName, lastName };
  }
  
  // Function to copy text to clipboard
  function copyToClipboard(text) {
    const tempInput = document.createElement('input');
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
  }
  
  // Function to generate the complete random user profile
  function generateRandomUserProfile() {
    const { firstName, lastName } = generateRandomName();
    const dob = generateRandomDOB();
    const email = generateRandomEmail(firstName, lastName);
    const password = generateRandomPassword();
    const randomStrings = [
      generateRandomString(8),
      generateRandomString(8),
      generateRandomString(8)
    ];
  
    return {
      firstName,
      lastName,
      dob,
      email,
      password,
      randomStrings
    };
  }
  
  // Function to display the user profile in the popup
  function displayUserProfile() {
    const userProfile = generateRandomUserProfile();
    const profileDiv = document.getElementById('user-profile');
  
    profileDiv.innerHTML = `
    <p style="font-size: 14px; margin-bottom: 8px;"><strong>First Name:</strong> ${userProfile.firstName} <button class="copy-btn" style="font-size: 12px; padding: 5px 10px; background-color: #4fc3f7; color: white; border: none; border-radius: 3px; cursor: pointer;" data-copy="${userProfile.firstName}">Copy</button></p>
    <p style="font-size: 14px; margin-bottom: 8px;"><strong>Last Name:</strong> ${userProfile.lastName} <button class="copy-btn" style="font-size: 12px; padding: 5px 10px; background-color: #4fc3f7; color: white; border: none; border-radius: 3px; cursor: pointer;" data-copy="${userProfile.lastName}">Copy</button></p>
    <p style="font-size: 14px; margin-bottom: 8px;"><strong>Date of Birth:</strong> ${userProfile.dob} <button class="copy-btn" style="font-size: 12px; padding: 5px 10px; background-color: #4fc3f7; color: white; border: none; border-radius: 3px; cursor: pointer;" data-copy="${userProfile.dob}">Copy</button></p>
    <p style="font-size: 14px; margin-bottom: 8px;"><strong>Email:</strong> ${userProfile.email} <button class="copy-btn" style="font-size: 12px; padding: 5px 10px; background-color: #4fc3f7; color: white; border: none; border-radius: 3px; cursor: pointer;" data-copy="${userProfile.email}">Copy</button></p>
    <p style="font-size: 14px; margin-bottom: 8px;"><strong>Password:</strong> ${userProfile.password} <button class="copy-btn" style="font-size: 12px; padding: 5px 10px; background-color: #4fc3f7; color: white; border: none; border-radius: 3px; cursor: pointer;" data-copy="${userProfile.password}">Copy</button></p>
    <p style="font-size: 14px; margin-bottom: 8px;"><strong>Random Strings:</strong></p>
    <ul style="list-style-type: none; padding-left: 0;">
      <li style="font-size: 14px; margin-bottom: 6px;">${userProfile.randomStrings[0]} <button class="copy-btn" style="font-size: 12px; padding: 5px 10px; background-color: #4fc3f7; color: white; border: none; border-radius: 3px; cursor: pointer;" data-copy="${userProfile.randomStrings[0]}">Copy</button></li>
      <li style="font-size: 14px; margin-bottom: 6px;">${userProfile.randomStrings[1]} <button class="copy-btn" style="font-size: 12px; padding: 5px 10px; background-color: #4fc3f7; color: white; border: none; border-radius: 3px; cursor: pointer;" data-copy="${userProfile.randomStrings[1]}">Copy</button></li>
      <li style="font-size: 14px;">${userProfile.randomStrings[2]} <button class="copy-btn" style="font-size: 12px; padding: 5px 10px; background-color: #4fc3f7; color: white; border: none; border-radius: 3px; cursor: pointer;" data-copy="${userProfile.randomStrings[2]}">Copy</button></li>
    </ul>
  `;
  
  
    // Add event listeners to all copy buttons
    document.querySelectorAll('.copy-btn').forEach(btn => {
      btn.addEventListener('click', function () {
        const textToCopy = this.getAttribute('data-copy');
        copyToClipboard(textToCopy);
        alert(`${textToCopy} copied to clipboard!`);
      });
    });
  }
  
  // Event listener for generating a new user on button click
  document.getElementById('generate-btn').addEventListener('click', displayUserProfile);
  
  // Generate a random user profile when the popup opens
  window.onload = displayUserProfile;
  