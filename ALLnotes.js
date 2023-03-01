


//Contact has a checkbox field "Active".The Account object has a number field "Active Contacts".You need to show total active child contacts on parent
//account.Make sure your code works in bulk operations as well.
//////////////////////////////////  MANISH  ////////////////////////////////////////////////////////////////////

Primitive Data Types: - Date, Boolean, String, Time, Datetime; Integer; Blob; Long; ID; Decimal; Double

EG: -
    String greeting = 'Hello World';
System.debug(greeting);

Boolean amIAwake = true;
System.debug(amIAwake);

Integer rollNumber = 11008890;
System.debug(rollNumber);

Long worldPopulation = 7000000000L;
System.debug(worldPopulation);

Double lightSpeed = 93000000 / 186000;
System.debug(lightSpeed);

Date tDay = Date.newInstance(2020, 5, 18);
System.debug(tDay);

Time currentTime = Time.newInstance(3, 25, 0, 0);
System.debug(currentTime);

DateTime currentDateTime = DateTime.newInstance(2020, 5, 18, 3, 25, 0);
System.debug(currentDateTime);


//All null values
String greeting;
System.debug(greeting);

Boolean amIAwake;
System.debug(amIAwake);

Integer rollNumber;
System.debug(rollNumber);

Long worldPopulation;
System.debug(worldPopulation);

Double lightSpeed;
System.debug(lightSpeed);

Date tDay;
System.debug(tDay);

Time currentTime;
System.debug(currentTime);

DateTime currentDateTime;
System.debug(currentDateTime);

//BLANK values
String greeting = '';
System.debug(greeting);

Integer rollNumber = 0;
System.debug(rollNumber);

In particular, null values must be distinguished from blank values: A null database field means that there is no value for a given record. 
It indicates the absence of a value.A blank database field means that there is a value for a given record, and this value is empty
    (for a string value) or 0(for a numeric value)
Null indicates there is no value within a database field for a given record.It does not mean zero because zero is a value. 
Blank indicates there is a value within a database but the field is blank.

    //TO CHECK FOR NULL & BLANK 
    recentLoanCycle != null(check for not null)
    recentLoanCycle != ''((check for not blank))

/* isNull
isNull(<string>)
Checks if the <string> value is "null".
isNull(null) = true
isNull("") = false
isNull(" ") = false
isNull("bob") = false
isNull(" bob ") = false
Returns true if the string is null.

// isEmpty
isEmpty(<string>)
Checks if the <string> value is an empty string containing no characters or whitespace.
isEmpty(null) = true
isEmpty("") = true
isEmpty(" ") = false
isEmpty("bob") = false
isEmpty(" bob ") = false
Returns true if the string is null or empty.

// isBlank
isBlank(<string>)
Checks if the value is null, empty, or contains only whitespace characters.
isBlank(null) = true
isBlank("") = true
isBlank(" ") = true
isBlank("bob") = false
isBlank(" bob ") = false
Returns true if the string is null, empty, or only whitespace.
*/

// escape quotes in string ( to use single quotes in string )
String str = 'My team\'s name is \'SFDCFacts Academy\'. \n We work on apex.';
System.debug(str);

/////////////////////////////////// LIST ///////////////////////////////////////////////////////////////////////////
LIST is an ordered collection of elements of same datatype.
duplicates allowed

List < Integer > rollNumbers = new List < Integer > { 11008890, 11008100, 11007231};
OR
List < Integer > rollNumbers = new List < Integer > ();
System.debug(rollNumbers);

rollNumbers.add(89897767);
rollNumbers.add(89897764);
rollNumbers.add(89897765);

System.debug(rollNumbers);

// get item on index 1
Integer rollNum = rollNumbers.get(1);
OR
Integer rollNum = rollNumbers[1];
System.debug(rollNum);
System.debug(rollNumbers.get(1));

// add item on index 4
rollNumbers.add(4, 99990000);
System.debug(rollNumbers);

// get the list size
System.debug(rollNumbers.size());

// remove the item on index 3
rollNumbers.remove(3);
System.debug(rollNumbers);
System.debug(rollNumbers.size());

// update item on index 1
rollNumbers.set(1, 44444444);
System.debug(rollNumbers);

// clear the list
rollNumbers.clear();
System.debug(rollNumbers);
System.debug(rollNumbers.size());

/////////////////////////////////// SET ///////////////////////////////////////////////////////////////////////////
SET is an unordered collection of elements of same datatype.
no duplicates allowed

Set < Integer > rollNumbers = new Set < Integer > { 11008890, 11008100, 11007231};
or
Set < Integer > rollNumbers = new Set < Integer > ();
System.debug(rollNumbers);

rollNumbers.add(89897767);
rollNumbers.add(89897764);
rollNumbers.add(89897765);

System.debug(rollNumbers);

// adding duplicate values - NOT ALLOWED
rollNumbers.add(89897767);
System.debug(rollNumbers);

// check if set has an item
System.debug(rollNumbers.contains(89897764));
System.debug(rollNumbers.contains(345345));

// delete an item
rollNumbers.remove(89897765);
System.debug(rollNumbers);

// get set size
System.debug(rollNumbers.size());

// check if set is empty
System.debug(rollNumbers.isEmpty());

// remove all items
rollNumbers.clear();
System.debug(rollNumbers.isEmpty());

/////////////////////////////////// MAP ///////////////////////////////////////////////////////////////////////////
MAP IS KEY VALUE PAIR where keys r unique(non duplicate) & values can be duplicate

Map < Integer, String > class2020 = new Map < Integer, String > ();

// add a new student/item
class2020.put(11008890, 'Manish');

System.debug(class2020);

class2020.put(11008891, 'Harry');
class2020.put(11008892, 'Rick');
class2020.put(11008893, 'Bill');

System.debug(class2020);

class2020.put(11008894, 'Bill');
System.debug(class2020);

//update/override value
class2020.put(11008894, 'Skywalker');
System.debug(class2020);

// get a value
System.debug(class2020.get(11008892));

// remove an item from map
class2020.remove(11008893);
System.debug(class2020);

// get all the keys
Set < Integer > rollNumber = class2020.keySet();
System.debug(rollNumber);

// get all the values
List < String > students = class2020.values();
System.debug(students);

// check if map has the key
System.debug(class2020.containsKey(11008892));
System.debug(class2020.containsKey(11008893));


/////////////////////////////////// CONSTANTS IN APEX ///////////////////////////////////////////////////////////////////////////
USE FINAL KEYWORD TO DECLARE Constants

// Declare Constant Variable
final Decimal PI;
System.debug(PI); //prints null

// initialize variable
PI = 3.14159;
System.debug(PI);

// update variable value - NOT ALLOWED
PI = 2.14159;
System.debug(PI);

/////////////////////////////////// OPERATORS IN APEX ///////////////////////////////////////////////////////////////////////////

// assignment operator
Integer x = 5;
System.debug('assignment operator - ' + x);

// addition operator
x = x + 5;
System.debug('addition operator - ' + x);

// Subtraction operator
x = x - 5;
System.debug('Subtraction operator - ' + x);
// multiplication operator
x = x * 5;
System.debug('multiplication operator - ' + x);
// division operator
x = x / 5;
System.debug('division operator - ' + x);

//x = x + 1;
//increment operator
x++;
System.debug('increment operator - ' + x);

//decrement operator
x--;// x=x-1;
System.debug('decrement operator - ' + x);

// addition assignment operator
//x = x + 5; addition operator
x += 5; // x = x+5;
System.debug('addition assignment operator - ' + x);
// subtraction assignment operator
x -= 5; // x = x-5;
System.debug('subtraction assignment operator - ' + x);
// multiplication assignment operator
x *= 5; // x = x*5;
System.debug('multiplication assignment operator - ' + x);
// division assignment operator
x /= 5; // x = x/5;
System.debug('division assignment operator - ' + x);


// using addition operator on strings
String hello = 'Hello';
String world = 'World';

System.debug(hello + world); //HelloWorld
System.debug(hello + ' ' + world); //Hello World


Boolean first = true;
Boolean second = false;
Boolean result;
//AND Operator
result = first && second;// both first and second is true, then final is true, else it is false
System.debug('And Operator - ' + result);

//OR Operator
result = first || second;// both first and second is false, then final is false, else it is true
System.debug('OR Operator - ' + result);


// Equality operator
result = (first == second); // if both expressions have the same value, then true, else false
System.debug('Equality Operator Boolean - ' + result);
result = (5 == 5);
System.debug('Equality Operator Integer - ' + result);
result = ('Hello' == 'World');
System.debug('Equality Operator String - ' + result);

// Less than operator
result = (5 < 6);
System.debug('Less than operator - ' + result);

// Greater than operator
result = (5 > 6);
System.debug('Greater than operator - ' + result);

//less than or equal to operator
result = (5 <= 6);
System.debug('less than or equal to operator - ' + result);
result = (6 <= 6);
System.debug('less than or equal to operator 2 - ' + result);

//greater than or equal to operator
result = (5 >= 6);
System.debug('greater than or equal to operator - ' + result);
result = (6 >= 6);
System.debug('greater than or equal to operator 2 - ' + result);



// NOT operator
System.debug('Not operator before - ' + first);
first = !first;
System.debug('Not operator after - ' + first);

// Ternary operator
String greeting = '';
Integer hour = 10;
// if hour is less than 12, then greeting should be good morning
// else greeting should be good afternoon
greeting = (hour < 12) ? 'Good Morning' : 'Good Afternoon';
System.debug('Ternary operator 10 - ' + greeting);
hour = 13;
greeting = (hour < 12) ? 'Good Morning' : 'Good Afternoon';
System.debug('Ternary operator 13 - ' + greeting);

//Challenge
// if hour < 12 = Good morning
// if hour > 12 && hour < 5 = Good Afternoon
// else Good Evening

/////////////////////////////////////////////////// DATA-TYPE CONVERSION IN APEX //////////////////////////////////////////////
// Storing student marks as string values
String physicsMarks = '72';
String chemistryMarks = '64';
String mathMarks = '87';

String total = String.valueOf(
    Integer.valueOf(physicsMarks) +
    Integer.valueOf(chemistryMarks) +
    Integer.valueOf(mathMarks)
);

System.debug('Total - ' + total);

/////////////////////////////////////////////////// IF/ELSE IN APEX //////////////////////////////////////////////

Boolean isItSunny = true;
Boolean isItRaining = false;
Boolean areYouWorking = false;

if (isItSunny == false) {
    System.debug('Do not go to party');
} else if (isItRaining == true) {
    System.debug('Do not go to party');
} else if (areYouWorking == true) {
    System.debug('Do not go to party');
} else {
    //multi line code block
    System.debug('Yayy!! its party time');
    System.debug('2nd line');
    System.debug('3rd line');
}

/////////////////////////////////////////////////// SWITCH IN APEX //////////////////////////////////////////////

// if current hour is in between 0-12 >> Good Morning
// else if current hour is in between 12 to 17 >> Good Afternoon
// else >> Good Evening

Integer currentHour = 12;

switch on currentHour {
    when 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11{
        System.debug('Good Morning');
    }
    when 12, 13, 14, 15, 16{
        System.debug('Good Afternoon');
    }
    when else {
        System.debug('Good Evening');
    }
}

/////////////////////////////////////////////////// LEAP YEAR SOLUTION AND MATH.MOD()--> FOR REMINNDER CHECK IN APEX //////////////////////////////////////////////

/*
> A year is a leap year, if it is evenly divisible by 4.
> Except if that is year is also evenly divisible by 100.
> Unless the year is also evenly divisible by 400.
*/

Integer year = 2200;

// check if year is evenly divisible by 4
if (Math.mod(year, 4) == 0) {
    //check if year is evenly divisible by 100
    if (Math.mod(year, 100) == 0) {
        // check if year is evenly divisible by 400
        if (Math.mod(year, 400) == 0) {
            System.debug('Its a leap year');
        } else {
            System.debug('Not a leap year');
        }
    } else {
        System.debug('Its a leap year');
    }
} else {
    System.debug('Not a leap year');
}

/////////////////////////////////////////////////// FOR LOOP IN APEX //////////////////////////////////////////////
//Checks condition before loop code block ; executes only if conditions r met;

/*
> A year is a leap year, if it is evenly divisible by 4.
> Except if that is year is also evenly divisible by 100.
> Unless the year is also evenly divisible by 400.
*/

// Print all leap years from year 1100 to year 2000

// for loop
//SYNTAX -->  FOR(VARIABLE DECLARATION OR INITIALIZATON ; CONDITION ; INCREMENT STATEMENT){}
for (Integer year = 1100; year <= 2000; year++) {
    System.debug('Processing year ' + year);
    // loop code block
    // check if year is leap year or not
    // check if year is evenly divisible by 4
    if (Math.mod(year, 4) == 0) {
        //check if year is evenly divisible by 100
        if (Math.mod(year, 100) == 0) {
            // check if year is evenly divisible by 400
            if (Math.mod(year, 400) == 0) {
                System.debug(year + ' is a leap year');
            }
        } else {
            System.debug(year + ' is a leap year');
        }
    }
}


/////////////////////////////////////////////////////  for loop example
/*

*
*   *
*   *   *
*   *   *   *
*   *   *   *   *

*/


Integer n = 5;

// for loop to build rows
for (Integer row = 0; row < n; row++) {
	String pattern = '';
    //System.debug('*');
    // for loop to build columns
    for (Integer column = 0; column <= row; column++) {
        //System.debug('*');
        pattern = pattern + '*  '; // or pattern+='*  ';
    }

    //print pattern here
    System.debug(pattern);
}

/////////////////////////////////////////////////// break statement IN APEX //////////////////////////////////////////////
//Use break statement to come out of the loop instantly.

// get goosebumps after listening to the song  these many time
Integer gooseBumpsAfter = 4;

// Iterate over the map for a maximum 1000 times
Integer n = 1000;

for (Integer i = 1; i <= n; i++) {
    System.debug('Listening to song ' + i + ' times');
    // break the loop if i equals to gooseBumpsAfter
    if (i == gooseBumpsAfter) {
        break;
    }
}

/////////////////////////////////////////////////// continue statement IN APEX //////////////////////////////////////////////
// use continue to skip or ignore , here it is tuesday , continue will ignore tuesday & then code execution will continue
//List of all days
List < String > days = new List < String > { 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'};

// get the list size
Integer listSize = days.size();

//iterate over the list
for (Integer i = 0; i < listSize; i++) {
    if (days.get(i) == 'Tuesday') {
        continue;
    }
    System.debug('It is ' + days.get(i) + '. Eat Chicken.');
}


/////////////////////////////////////////////////// LOOPING ON LIST IN APEX //////////////////////////////////////////////

//List of all days
List < String > days = new List < String > { 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'};

// list iteration for loop to iterate over days
for (String day : days) {
    if (day == 'Tuesday') {
        continue;
    }
    System.debug('It is ' + day + '. Eat Chicken');
}

/////////////////////////////////////////////////// OOPS IN APEX //////////////////////////////////////////////
EG - consider student as object, he will have some properties like name, age, rollNumber & some behaviour like mark attendance();
payfees(); paydues(); 
so here in programming world the student can be represented as CLASS, Properties as VARIABLES & behaviour as METHODS

// OOPS IN APEX
OOPS Pillars - Encapsulation, Abstraction, Inheritance, Polymorphism

Encapsulation - Bundling of variables & methods, in apex we do it by classes
eg: -
    class student {
    string name;
    integer age;

void markAttendance(){
    system.debug('markAttendance');
}
void payDues(){
    system.debug('payDues');
}
}

Abstraction - private, public & global to make classes, variables, methods accessible
eg: -
    public class student {
    private string name;
    private integer age;

    public void markAttendance() {
        system.debug('markAttendance');
    }
    public void payDues() {
        system.debug('payDues');
    }
}

Inheritance - shapes like rectangle, traingle, square have perimmete, area as common properties this means they r inherting from shape
if a class inherites other class we must give defination to all methods(initialize methods) which r declared in interface
eg: -
    public interface shape {
    double getArea();
    double getPerimeter();
}

public class Rectangle implements shape {
    private double width;
    private double height;

    public double getArea() {
        return width * this.height;
    }
    public double getPerimeter() {
        return width * this.height;
    }
}

Polymorphism -
    Polymorphism overloading-- > methods with same name but have different parameters
Polymorphism overloading-- >

    Polymorphism overloading eg: -
        void send(String text) {
    System.debug('Sending text message');
}
void send(Blob singleImage) {
    System.debug('Sending video/image message ');
}
void send(List < Blob > multipleImages){
    System.debug('Sending multiple videos/image');
}

/////////////////////////////////////////////////// CLASS & METHOD SYNTAX IN APEX //////////////////////////////////////////////

/**
 * HelloWorld class
 * This is demo class to demonstrate how an apex class is defined and executed
 * Write access modifier class then name of class{}
 * write acces modifier , static(so that method can be called directly by classname.methodname) , return type , name of method(){}
 * methods should always have rturn type as they will always return some thing , if they r not returning anything then return type should be void
 * if method needs some input or is accepting data then give it a parameter
 * return datatype should be same as datatype of method
 * 
 * */

public class HelloWorld {
    String greeting = 'Hello World';

    public void printGreeting() {
        System.debug(greeting);
    }

}

//to call helloworld class 
HelloWorld firstclass = new HelloWorld();  
firstclass.printGreeting();

/////////////////////////////////////////////////// ACCESS MODIFIERS IN APEX //////////////////////////////////////////////
default access modifier is private
global access modifier - use for integration as we need to make classes and methods accesible to different apps or other namespaces


/////////////////////////////////////////////////// NAMING CONVENTION IN APEX //////////////////////////////////////////////

/**
 * Class name should be written in PascalCase
 * Each word should be capitalized
 * Note: Always give meaningful name to your class
 * */
public class NamingConventionsDemo {
    // Variable name should be written in camelCase
    // First world should be all in small case, and each word after that should be capitalized
    // Note: Always give meaningful name to your variable
	  String superSecretKey = 'Secret_Key';

    // Constant variables should be written in CAPITAL CASE
    final String MY_FINAL_VARIABLE = 'DUMMY';

    /**
     * Method name should be written in camelCase
     * First world should be all in small case, and each word after that should be capitalized
     * Note: Always give meaningful name to your method
     * */
    public void demoFunction(){
        String superSecretKey = 'Secret_Key';
    }

}

/////////////////////////////////////////////////// CONSTRUCTOR IN APEX //////////////////////////////////////////////
constructor is similar to class , but name of constructor is always same as the name of class
constructors r auto called when we initialize a class , even if we dont define constructor in code , it is created
eg :- covid19 jaipur = new covid19()
constructors & initialization block can be used to initialize code at the time of class instance creation

/////////////////////////////////////////////////// WRAPPER CLASS  IN APEX //////////////////////////////////////////////
/**
 * Company Class
 * Stores information about the company
 * and its customers
 * */
public class Company {
	public String companyName;
    public String ceo;
    public Integer employeeCount;
    public Long revenue;

    // List of all customers (U CAN USE CLASS AS DATATYPE AS WELL LIKE LIST SET & MAO ; HERE CLIENT IS CLASS)
    private List<Client> customers = new List<Client>();

    // add new customer
    public void addNewCustomer(String name, String website, String email, Long phone) {
        Client customer = new Client(name, website, email, phone);
        customers.add(customer);
    }

    // print the list of all customers
    public void getAllCustomers(){
        for(Client customer : customers){
            System.debug('Customer Name: '+customer.clientName+', Website: '+customer.website+', Phone: '+customer.phone+', Email: '+customer.email);
        }
    }

    // private inner class to store customer information
    private class Client {
        public String clientName;
        public String website;
        public String email;
        public Long phone;

        Client (String clientName, String website, String email, Long phone){  //(this keyword used in constructor)
            this.clientName = clientName;
            this.website = website;
            this.email = email;
            this.phone = phone;
        }
    }
}

/////////////////////////////////////     calling wrapper class from developer console
Company sfdcfacts = new Company();
sfdcfacts.companyName = 'SFDCFacts Academy';
sfdcfacts.ceo = 'Manish Choudhari';
sfdcfacts.employeeCount = 6;
sfdcfacts.revenue = 1000000;


sfdcfacts.addNewCustomer('CLR Infotech', 'clrinfotech.com', 'clrinfotech@gmail.com', 7778889990L);
sfdcfacts.addNewCustomer('Forcepanda', 'forcepanda.com', 'forcepanda@gmail.com', 7778889990L);
sfdcfacts.addNewCustomer('Udemy', 'udemy.com', 'udemy@gmail.com', 6668889990L);


sfdcfacts.getAllCustomers();

/////////////////////////////////////////////////// SOQL IN APEX //////////////////////////////////////////////
=:    (TO BIND SINGLE VARIABLE FIRST EQUALTO = THEN COLON:)
IN :       (IN IS USED ON COLLECTIONS OR ON LARGE DATA)

//soql returns list;
List<Lead> leadlist = [SELECT Name, Company, Email, Status FROM Lead];

// OR Keyword
SELECT Name, Status, Company, Email FROM Lead WHERE Status='Closed - Converted' OR Status='Closed - Not Converted'

// OR and AND Keyword
SELECT Name, Status, LeadSource, Company, Email FROM Lead WHERE (Status='Closed - Converted' OR Status='Closed - Not Converted') AND LeadSource='Web'

// IN Operator
SELECT Name, Status, LeadSource, Company, Email FROM Lead WHERE Status IN ('Closed - Converted', 'Closed - Not Converted') AND LeadSource='Web'

// LIKE Operator
SELECT Name, Status, LeadSource, Company, Email FROM Lead WHERE Status LIKE 'Closed%' AND LeadSource='Web'

////////////////////////// ORDER BY (ASC , DSC -- DEFALUT IS ASC)
// Sorting by Name
SELECT Name, Status, LeadSource, Company, Email FROM Lead ORDER BY Name

// Sorting by Name in descending order
SELECT Name, Status, LeadSource, Company, Email FROM Lead ORDER BY Name DESC

// Sorting by Company
SELECT Name, Status, LeadSource, Company, Email FROM Lead ORDER BY Company

//Sorting by CreatedDate
SELECT Name, Status, LeadSource, Company, Email, CreatedDate FROM Lead ORDER BY CreatedDate

//Sorting by CreatedDate in descending order
SELECT Name, Status, LeadSource, Company, Email, CreatedDate FROM Lead ORDER BY CreatedDate DESC

//Order by clause with Where clause
SELECT Name, Status, Company, Email FROM Lead WHERE Status='Closed - Converted' ORDER BY Name

/////////////////  LIMIT & OFFSET
// Limit 10 rows
SELECT Name, Status, LeadSource, Company, Email, CreatedDate FROM Lead LIMIT 10

// Limit with Order By clause
SELECT Name, Status, LeadSource, Company, Email, CreatedDate FROM Lead Order By Name LIMIT 10

// Limit with Order By and Where clause
SELECT Name, Status, Company, Email FROM Lead WHERE Status='Closed - Converted' ORDER BY Name LIMIT 1

// Get latest record
SELECT Name, Status, LeadSource, Company, Email, CreatedDate FROM Lead ORDER BY CreatedDate DESC LIMIT 1

// OFFSET 5
SELECT Name, Status, LeadSource, Company, Email, CreatedDate FROM Lead OFFSET 5

// Get latest 5 records and skip first 5
SELECT Name, Status, LeadSource, Company, Email, CreatedDate FROM Lead ORDER BY CreatedDate DESC LIMIT 5 OFFSET 5

/////////////////  DATE TIME IN SOQL
LAST_WEEK
LAST_MONTH
LAST_YEAR
LAST_QUARTER
THIS_WEEK
THIS_MONTH
THIS_YEAR
THIS_QUARTER
NEXT_WEEK
NEXT_MONTH
NEXT_YEAAR
NEXT_QUARTER
LAST_N_DAYS:n
LAST_N_MONTHS:n
NEXT_N_DAYS:n
NEXT_N_MONTHS:n
LAST_N_WEEKS:n
LAST_N_YEAR:n
NEXT_N_WEEKSn 
NEXT_N_YEAR:n

// Get all leads created on 15th June 2020
SELECT Name, Status, LeadSource, Company, Email, CreatedDate FROM Lead WHERE CreatedDate>2020-06-15T00:00:00.000+0000

// Get all leads created today
SELECT Name, Status, LeadSource, Company, Email, CreatedDate FROM Lead WHERE CreatedDate=TODAY

// Get all leads created after yesterday
SELECT Name, Status, LeadSource, Company, Email, CreatedDate FROM Lead WHERE CreatedDate>YESTERDAY

// Get all leads created in last 10 days
SELECT Name, Status, LeadSource, Company, Email, CreatedDate FROM Lead WHERE CreatedDate=LAST_N_DAYS:10

/////////////////   PARENT TO CHILD SOQL QUERIES
(CHILD RELATION NAME IS REQUIRED WHICH CAN BE FOUND ON  child relationship name FIELD ON THE FIELD OF CHILD OBJECT)
// Get all related contacts of an account
SELECT Name, Phone, Website, (SELECT Name, Department, Email FROM Contacts) FROM Account

// Get all related contacts (with where clause) of an account (with where clause)
SELECT Name, Phone, Website, (SELECT Name, Department, Email FROM Contacts WHERE Department='Finance') FROM Account WHERE Name='United Oil & Gas, UK'

// Get all related contacts (with where clause) and opportunities of an account
SELECT Name, Phone, Website, (SELECT Name, Department, Email FROM Contacts WHERE Department='Finance'), (SELECT Name, Amount FROM Opportunities) FROM Account

// Get all books(child object) of an author (parent object)
SELECT Name, (SELECT Name FROM Books__r) FROM Author__c

/* HERE Contacts , Books__r R CHILD RELATIONSHIP NAMES WHICH R ALWAYS FOUND ON CHILD OBJECTS , GO ON THE CHILD OBJECT , THEN GO ON THAT FIELD 
WHICH HAS LOOKUP THERE U WILL FIND CHILD RELATIONSHIP NAMES
EG :- go on contact  go on fields , go on field accountid(API NAME) there u will find contacts as its relationship name
AND FOR CUSTOM OBJECTS USE __r after child relationship name
Limitations :-
Only one level of parent-to-child is supported.
Upto 20 related objects are supported.
*/

/////////////////  CHILD TO PARENT SOQL QUERIES  
(RELATION NAME IS REQUIRED WHICH CAN BE FOUND ON FieldName (just on page of child relationship name) FIELD ON THE FIELD OF CHILD OBJECT)
// Get account information from contact
SELECT Name, Phone, Department, Account.Name, Account.Website FROM Contact

// get grandparent (user) object details
SELECT Name, Phone, Department, Account.Name, Account.Website, Account.Owner.Name FROM Contact

// Get author(parent object) from books(child object)
SELECT Name, Price__c, Author__r.Name FROM Book__c

/*
IN PARENT TO CHILD WE NEEDED CHILD RELATIONSHIP NAME SIMILIARY HERE IN CHILD TO PARENT WE NEED RELATIONSHIP NAME WHICH CAN BE FOUND ON 
FIELD NAME IN CHILD OBJECTS FIELD
EG :- o on contact  go on fields , go on field accountid(API NAME) there u will find Account as its field name , this Account is 
relationship name
AND FOR CUSTOM OBJECTS USE __r after relationship name
Limitations :-
Only five level of child-to-parent is supported.
Upto 55 related objects are supported.
*/ 

/////////////////  SOQL IN APEX
// Retrieve all accounts and assign to a List collection
List<Account> accounts = [SELECT Name, Phone FROM Account];

// iterate over all accounts and print account information
for(Account account : accounts){
    System.debug('Account Name: '+account.Name+' Account Phone: '+account.Phone);
}

// Get SOQL results in a Map collection
Map<Id, Account> accountsMap = new Map<Id, Account>([SELECT Name, Phone FROM Account]);
for(Account account : accountsMap.values()){
    System.debug('Account Name: '+account.Name+' Account Phone: '+account.Phone);
}

// Retrieve all books and assign to a List collection
List<Book__c> books = [SELECT Name, Price__c FROM Book__c];
for(Book__c book : books){
    System.debug('Book Name: '+book.Name+' Book Price: '+book.Price__c);
}

/////////////////  soql-relationships-in-apex 
// use list of 'Contact' to store the query result
// you cannot use list of 'Case', or list of 'Account' as
// our main object is 'Contact'
List<Contact> contacts = [SELECT Account.Name, Account.Rating, Name, Department, Title, (Select CaseNumber, Subject FROM Cases) FROM Contact ORDER BY Name];

for(Contact con : contacts){
    System.debug('Contact Name: '+con.Name+', Contact Department: '+con.Department+', Contact Title: '+con.Title+', Account Name: '+con.Account.Name+', Account Rating: '+con.Account.Rating);
    // iterate over the child records (Cases)
    for(Case caseObj : con.Cases){
        System.debug('Case Number: '+caseObj.CaseNumber+', Case Subject:'+caseObj.Subject);
    }
}

/////////////////  soql-bind-variables
/*
You can use Apex variables in SoOL using a colon : These variables are called bind variables.

Set<Id> accountIds- new Set<Id> ();
[SELECT Id, Name, Rating FROM ACcOunt WHERE Id IN :account Ids ] ;

String leadName= XYZ Corp'
[SELECT Id, Name FROM Lead WHERE Name -:leadName ] ;                
*/

/////////////////  soql-dynamic-queries (USE WHEN WE HAVE TO ADD ADDITIONAL CONDITION TO SOQL QUERY DURING RUNTIME)
/*
String accountClass = 'Class3';

String queryString = 'SELECT Id, Name, Phone, Rating FROM Account';

if(accountClass == 'Class1'){
    queryString += ' WHERE Rating=\'Hot\' AND Type=\'Prospect\'';
} else if(accountClass == 'Class2'){
    queryString += ' WHERE Rating=\'Warm\' AND Type=\'Other\'';
} else {
    queryString += ' WHERE Rating=\'Hot\'';
}

List<Account> accounts = Database.query(queryString);
System.debug('Accounts '+accounts);
System.debug('Accounts size '+accounts.size());
*/

///////////////////////////////////////////////////  Advanced SOQL   /  soql-aggregate-functions  /////////////////////////////////
// get count of account
SELECT COUNT() FROM Account

// get count of ids in Account
SELECT COUNT(Id) FROM Account

// get count of distinct names in Account
SELECT COUNT_DISTINCT(Name) FROM Account

// multiple functions
SELECT COUNT_DISTINCT(Name), COUNT(Id) FROM Account

// Sum of amount in Opportunity
SELECT SUM(Amount) FROM Opportunity

// Max of amount in Opportunity
SELECT MAX(Amount) FROM Opportunity

// Min of amount in Opportunity
SELECT MIN(Amount) FROM Opportunity

// Avg of amount in Opportunity
SELECT AVG(Amount) FROM Opportunity

// Multiple functions
SELECT SUM(Amount), MAX(Amount), MIN(Amount), AVG(Amount) FROM Opportunity

/////////////////// GROUP BY ( CANNOT BE USED WITHOUT COUNT ) (ALL FIELDS WHICH WE R QUERING SHOULD ALSO BE IN GROUPBY LIKE LAST EG)
SELECT StageName, COUNT(Id) FROM Opportunity GROUP BY StageName

// Multiple aggregate functions
SELECT StageName, COUNT(Id), MAX(Amount), MIN(Amount), AVG(Amount) FROM Opportunity GROUP BY StageName

//Selecting multiple fields
SELECT StageName, LeadSource, COUNT(Id), MAX(Amount), MIN(Amount), AVG(Amount) FROM Opportunity GROUP BY StageName, LeadSource

///////////////////     HAVING CLAUSE
//WHERE CONDITION IS ONLY APPLIED ON FIELD LEVEL TO APPLY CONDITION ON AGGREGATE RESULT WE USE HAVING CLAUSE
//HAVING CLAUSE IS USED TO FILTER OUT RESULTS WHICH R GROUPED BY GROUP BY CLAUSE
// get sum of amount where sum is greater than 300k
SELECT StageName, SUM(Amount) FROM Opportunity WHERE Amount>300000 GROUP BY StageName        //WILL WORK ON FIELD LEVEL
SELECT StageName, SUM(Amount) FROM Opportunity  GROUP BY StageName HAVING SUM(Amount) > 300000    //WILL WORK ON AGGREGATE VALUE

///////////////////   USING  AGGREGATE FUNTIONS IN APEX
// Without Aliases / Using Expressions
AggregateResult[] groupedResult = [SELECT StageName, MAX(Amount), MIN(Amount), AVG(Amount) FROM Opportunity GROUP BY StageName];

for(AggregateResult result: groupedResult){
    System.debug('StageName: '+result.get('StageName')+' Max Amount: '+result.get('expr0')+' Min Amount: '+result.get('expr1')+' Avg Amount: '+result.get('expr2'));
}

// Using Aliases
AggregateResult[] groupedResult = [SELECT StageName, MAX(Amount) maxAmount, MIN(Amount) minAmount, AVG(Amount) avgAmount FROM Opportunity GROUP BY StageName];

for(AggregateResult result: groupedResult){
    System.debug('StageName: '+result.get('StageName')+' Max Amount: '+result.get('maxAmount')+' Min Amount: '+result.get('minAmount')+' Avg Amount: '+result.get('avgAmount'));
}

///////////////////   SOQL IN FOR LOOP (TO REDUCE HEAP SIZE) (LIMITATION - THE OUTPUT WONT BE AVAILABE OUTSIDE FOR LOOP)
for(AggregateResult result:  [SELECT StageName, MAX(Amount), MIN(Amount), AVG(Amount) FROM Opportunity GROUP BY StageName]){
    System.debug('StageName: '+result.get('StageName')+' Max Amount: '+result.get('expr0')+' Min Amount: '+result.get('expr1')+' Avg Amount: '+result.get('expr2'));
}
/////////////////////////////////////////////////// DML IN APEX //////////////////////////////////////////////

////////////////////////////////////////// INSERT 

//DEVELOPER CONSOLE CODE
// Inserting one single account
Account acc = new Account(Name='CLR Infotech', Phone='9988998899');
acc.Rating = 'Hot';
insert acc;


List<Account> accounts = new List<Account>();
Account acc1 = new Account(Name='Test Account 1');
Account acc2 = new Account(Name='Test Account 2');
Account acc3 = new Account(Name='Test Account 3');
Account acc4 = new Account(Name='Test Account 4');
Account acc5 = new Account(Name='Test Account 5');
accounts.add(acc1);
accounts.add(acc2);
accounts.add(acc3);
accounts.add(acc4);
accounts.add(acc5);
// Inserting a list of account
insert accounts;

// Alternate way to insert the accounts
Database.insert(accounts, false);

/**
 * AccountController Class
 * This class has helpful methods to work with Account object
 * */
public class AccountController {

    // Insert a list of account
    public static List<Account> insertAccounts(List<Account> accountToInsert){
        insert accountToInsert;
        return accountToInsert;
    }

    // Insert an account record
    public static Account insertAccount(Account accountToInsert){
        insert accountToInsert;
        return accountToInsert;
    }

    // Get all accounts
    public static List<Account> getAllAccounts(){
        // Retrieve all accounts and assign to a List collection
        List<Account> accounts = [SELECT Name, Phone FROM Account];
        return accounts;
    }


    // Print all accounts
    public static void printAllAccounts(){
        // Retrieve all accounts using getAllAccounts method
        List<Account> accounts = getAllAccounts();
        // iterate over all accounts and print account information
        for(Account account : accounts){
            System.debug('Account Name: '+account.Name+' Account Phone: '+account.Phone);
        }
    }

    public static Integer getAccountSize(){
        // Retrieve all accounts using getAllAccounts method
        List<Account> accounts = getAllAccounts();
        return accounts.size();
    }
}

////////////////////////////////////////// DML METHODS 
/*
Database Methods - 
Database. SaveResult[] srlist = Database. insert (accList, false) ;

You can control partial record processing
NO exception is thrown, instead a result array is returned
ek record la error ala tari to record sodun bakki records insert honar , complete transcation nahi fail honar


DML Statements -
insert accList;

NO partial recordprocessing
Results in exception
eka jari record la error ala tar ek hi record insert nahi honar or purna transaction roll back honar
*/


////////////////////////////////////////// UPDATE 

// insert a new account record first, which we will update later on
Account acc = new Account(Name='SFDCFacts', Phone='9988998899');
AccountController.insertAccount(acc);

// Update an account with valid id  (TO PERFORM UPDATE , ID WILL BE NEEDED OF RECORD WHICH WE HAVE TO UPDATE) 
//(ALSO WE NEED TO CREATE NEW INSTANT FOR UPDATE ASWELL)
Account acc = new Account(Id='0012x00000923pPAAQ', Name='SFDCFacts', Phone='9988998899', Rating='Warm');
update acc;


// update a list of account
List<Account> accounts = [SELECT Id, Name, Phone FROM Account WHERE Name='SFDCFacts Academy' AND Phone='9988998899'];
for(Account acc :  accounts){
    acc.Name = 'SFDCFacts Academy';
    acc.Rating = 'Hot';
}
update accounts;

////////////////////////////////////////// DELETE & UNDELETE 

// get all accounts to delete
List<Account> accounts = [SELECT Id FROM Account WHERE Name LIKE 'Test Account%'];
// delete using dml statement
delete accounts;
// delete using database methods
//Database.delete(accounts); 
//(by default it is true , mention false if u dont want entire transaction to roll back if any single record fails)

// get deleted account records (ALL ROWS - GIVES DELETED RECORDS AS WELL WHICH R IN RECYCLE BIN)
List<Account> deletedAccounts = [SELECT Name, Phone FROM Account WHERE isDeleted=true ALL ROWS];
//undelete records
undelete deletedAccounts;

////////////////////////////////////////// SOBJECT  

// Retrieve all books and assign to a List collection
List<SObject> books = [SELECT Name, Price__c, Author__r.Name FROM Book__c];
for(SObject book : books){
    System.debug('Book Name: '+String.valueOf(book.get('Name'))+' Book Price: '+(Decimal)book.get('Price__c')+ ' Book Author: '+ (String)book.getSObject('Author__r').get('Name'));
}

// Retrieve all books and assign to a List collection
List<SObject> books = [SELECT Name, Price__c FROM Book__c];
for(SObject book : books){
    System.debug('Book Name: '+String.valueOf(book.get('Name'))+' Book Price: '+(Decimal)book.get('Price__c'));
}

// create a new account sobject instance
SObject accountRec = (SObject) Type.forName('Account').newInstance();
// set field values
accountRec.put('Name', 'Sample SObject Account');
accountRec.put('Phone', '7697890786');
// insert account record
insert accountRec;

////////////////////////////////////////// DML CHALLENGE  

/**
 * DML CHALLENGE
 * Create a new Account with the name “WingNut Films” and Rating “Warm”
 * Create a new Opportunity “Lord Of The Rings”  for this Account with below field values
 *                Stage > Qualification
 *                Closed Date > Today
 * Update Account Name to “New Line Cinema”
 * Update Opportunity Stage to “Closed-Won”
 * Delete the opportunity
 * Undelete the opportunity
 **/

// create new instance of account object
Account accRec = new Account(Name='WingNut Films', Rating='Warm');
// insert the account
insert accRec;

// create opportunity record
Account account = [SELECT Id FROM Account WHERE Name='WingNut Films' LIMIT 1];
Opportunity opp = new Opportunity(Name='Lord Of The Rings', StageName='Qualification ', CloseDate=Date.today());
opp.AccountId = account.Id;
insert opp;

// retrieve wingnut films account
Account account = [SELECT Id, Name FROM Account WHERE Name='WingNut Films' LIMIT 1];
// update the name
account.Name = 'New Line Cinema';
// update the account
update account;

Opportunity opp = [SELECT Id, Name, StageName FROM Opportunity WHERE Name='Lord Of The Rings' LIMIT 1];
opp.StageName = 'Closed Won';
update opp;

// get opportunity record to delete
Opportunity opp = [SELECT Id, Name, StageName FROM Opportunity WHERE Name='Lord Of The Rings' LIMIT 1];
// delete opportunity
delete opp;

// get opportunity record to undelete
List<Opportunity> opps = [SELECT Id, Name, StageName FROM Opportunity WHERE isDeleted=true ALL ROWS];
// undelete opportunity
undelete opps;

////////////////////////////////////////// DML CHALLENGE  WITH SOBJECT
/**
 * DML CHALLENGE
 * Create a new Account with the name “WingNut Films” and Rating “Warm”
 * Create a new Opportunity “Lord Of The Rings”  for this Account with below field values
 *                Stage > Qualification
 *                Closed Date > Today
 * Update Account Name to “New Line Cinema”
 * Update Opportunity Stage to “Closed-Won”
 * Delete the opportunity
 * Undelete the opportunity
 **/


// create new instance of account sobject
SObject accRec = (SObject) Type.forName('Account').newInstance();
// adding field values
accRec.put('Name', 'WingNut Films');
accRec.put('Rating', 'Warm');
// insert the sobject
insert accRec;

// get account record first to associate with opportunity
SObject account = Database.query('SELECT Id FROM Account WHERE Name=\'WingNut Films\' LIMIT 1');
// create new instance of opportunity sobject
SObject opp = (SObject) Type.forName('Opportunity').newInstance();
// adding field values
opp.put('Name', 'Lord Of The Rings');
opp.put('StageName', 'Qualification');
opp.put('CloseDate', Date.today());
opp.put('AccountId', account.Id);
insert opp;

// retrieve wingnut films account
SObject account = Database.query('SELECT Id, Name FROM Account WHERE Name=\'WingNut Films\' LIMIT 1');
// update the name
account.put('Name', 'New Line Cinema');
// update the account
update account;

// get the "Lord Of The Rings" opportunity
SObject opp = Database.query('SELECT Id, Name, StageName FROM Opportunity WHERE Name=\'Lord Of The Rings\' LIMIT 1');
opp.put('StageName', 'Closed Won');
update opp;

// get the "Lord Of The Rings" opportunity to delete
SObject opp = Database.query('SELECT Id, Name, StageName FROM Opportunity WHERE Name=\'Lord Of The Rings\' LIMIT 1');
// delete opportunity
delete opp;

// get the "Lord Of The Rings" opportunity to undelete
List<SObject> opps = Database.query('SELECT Id, Name, StageName FROM Opportunity WHERE isDeleted=true ALL ROWS');
// undelete opportunity
undelete opps;

////////////////////////////////////////// Order of Execution ///////////////////////////////////////////////////////////////////////


Process starts
System Validation rules
Record triggered flows
Before triggers
Custom Validation Rules
Duplicate rules
Save the record (no commit)
After triggers
Save the record
AssignnentRules
Auto response
Workflow rules
Processes and Flows
Escalation and entitlement rules
Record triggered flows
Rollup summary
Sharingrule evaluation 
commit all DML changes
Post commit operations

////////////////////////////////////////// TRIGGERS ///////////////////////////////////////////////////////////////////////
BEFORE -
Before triggers are used to update or validate record values before they r saved to the database
Avoid making changes to other records in Before triggers
AFTER -
Records that fire the after trigger, are read only
Make changes (create/update/delete) to other records in after triggers.

////////////////////////////////////////// SHOW VALIATION ERROR USING TRIGGER
trigger LeadTrigger on Lead (before insert, before update) {
	//System.debug('Lead trigger called');
    for(Lead leadRecord : Trigger.new){
        if(String.isBlank(leadRecord.LeadSource)){
            leadRecord.LeadSource = 'Other';
        }
        // validation on industry field
        if(String.isBlank(leadRecord.Industry)){
            leadRecord.addError('The industry field cannot be blank');
        }

    }
    System.debug('Lead trigger 1 is executing');
}




//////////////////////////////////  salesforce exclusive Asynchronous apex  ////////////////////////////////////

//////////////////////////////////// FUTURE APEX ////////////////////////////////////////////////////////////////
/* 
1.FUTURE METHOD IS A SET OF CODE THAT WE RUNS IN BACKGROUND.
2.FUTURE METHOD ONLY ACCEPTS PRIMITIVE(INTEGER , Boolean , LIST OF Ids) AS PARAMETERS AND DOESNOT ACCEPT NON PRIMITIVE(SOBJECTS)
3.future methods are static and void
4.You must have faced mixed DML exception.This exception occurs when you insert set up and non setup objects in one transaction.
Setupobjects-User, Group, Profile, Layout,Email templates
Nonsetup Objects- All other standard and custom objects(Account,Custom objects)
We cannot insert User/Profile and Account in same object.Then Future method is savoir to get out of this situation as it runs in seperate transaction
5.You cannot perform callout from trigger.Use future method to put callout in future method to make a callout
6. You cannot call one future method from another future method.
*/

//SYNTAX
@future
public static void carServicing(List < Id > recordIds){
    //CODE THAT WILL RUN IN BACKGROUND
}


//////////////////////////////////// QUEUABLE APEX ////////////////////////////////////////////////////////////////
/*
SIMILAR TO FUTURE METHOD, QUEUEABLE IS ALSO A SET OF CODE THAT WE RUNS IN BACKGROUND.
WE CANNOT CALL 1 FUTURE METHOD FROM ANOTHER BUT QUEUEABLE ALLOWS CHAINING OF JOBS UNLIKE FUTURE METHOD. 
1.Queuable 1 - Delete old cases
2. Queuable 2 - Update current cases
3. Queuable 3 - Create new cases
Queueable allows using NON-PRIMITIVE types as params.unlike Future method which doesnt allow SOBJECTS.
Queueable provides you ID of job to track job progress.
Queuable cannot handle millions of records in one job.
MAX 50 JOBS CAN BE CHAINED
*/

//SYNTAX 1 
public class MyClass implements Queueable {
    public void execute(QueueableContext context) {
        //CODE THAT WILL RUN IN BACKGROUND
    }
    System.enqueuejob(new MyClass());
}

//SYNTAX 2  [ENQUEUING JOB]
public class Firstjob implements Queueable {
    public void execute(QueueableContext context) {
        //My logic
        System.enqueuejob(new Secondjob());
    }
}


//EXAMPLE 1  [ENQUEUING JOB]
public class FirstJobQueueable implements Queueable {
    public void execute(Queueablecontext qContx) {
        //My logic
        DELETE[SELECT id from Account where createddate = LAST_YEAR];

        //Chain any job if you want
        system.enqueueJob(new SecndjobQueueable());
    }
}

/////

public class SecndJobQueueable implements Queueable {
    public void execute(QueueableContext qCntx) {
        DELETE[SELECT id from Contact wHERE createddate = LAST_YEAR];
        system.enqueueJob(new ThirdJobQueueable());
    }
}

/////// To call queuable 
system.enqueueJob(new FirstJobQueueable());


//EXAMPLE 2 PRACTICAL   [ENQUEUING JOB]
/* 
IF ACCOUNT IS INSERTED IT WILL CALL TRIGGER & FROM TRIGGER CALL QueueableClass & QueueableClass WILL CREATE CONTACT , IF ACCOUNT IS CREATED
WITH NAME SREEKANTH WE WANT QUEUABLE CLASS TO CREATE CONTACT WITH NAME SREEKANTH. BUT FOR THAT QUEABLE CLASS SHOULD GET ACCOUNT NAME & ID FRM TRIGGER
*/

trigger AccountTriegerforContacts on Account(after insert) {
    if (Trigger.isAfter && Trigger.isInsert) {
        System.enqueueJob(new ContactCreationQueueable(Trigger.New));
    }
}

public class ContactCreationQueueable implements Queueable {
    private List<Account> accListTocreateContacts;
    public ContactCreationQueueable(List<Account> expectingaccountsFromTrigger) {
    this.accListToCreateContacts = expectingaccountsFromTrigger;
}
    public void execute(QueueableContext qCont){
    List < Contact > conListToTnsert = new List < Contact > ();
    for (Account acc: accListToCreateContacts) {
    Contact con = new Contact();
        con.lastName = acc.Name;
        con.AccountId = acc.Id;
        conListToInsert.add(con);
    }
    if (ConListToInsert.size() > 0);
    INSERT ConListToInsert;
}}

//////////////////////////////////// BATCH APEX ////////////////////////////////////////////////////////////////
/*
1.We can perform DML operation like insert,update,delete on only 10k records at once because SF has 10k as governor limit.So we use batch apex
as it can process upto 50 million records in background {future & queuable only has double limit of normal soql & dml limit , like normal soql
limit is 100 & dml is 150 so for future and queable it will be 200 & 300 as it comes in asynchronous apex but batch apex can process upto 50 
million records in background}. Default batchsize is 200 , minimum 1 & max batch size is 2000
2.we can only have 5 batch jobs running at a time
3.Future methods cannot be called from batch apex
4.We can chain jobs in batch apex like queuable (eg:- Database.executebatch(new secondBatch() 200); -> write this in first batch job finish method )
*/

//BATCH APEX SYNTAX 
/*
start() -> querys all the records to process
execute() -> process batch of records from start
finish() -> any post processing logic like sending email
*/
Public class TestDemoBatch implements Database.batchable<Sobject>{
    Public Database.QueryLocator start(Database.BatchableContext bc) {
        return Database.getQueryLocator('SELECT Id from Account'); //it will not hit exception even if query returns 1 million records , normal limit is 50k but getquerylocator doesnot have any limit
    }
    Public void execute(Database.BatchableContext bc, List < sobject > subListFromStartMethod){
    // Logic to process all records
    for (Account acc: subListFromStartMethod ) {
        acc.name = 'Batch updated-' + acc.Name;
    }
        UPDATE subListFromstartMethod;
}
    Public void finish(Database.BatchableContext bc){
    // send mail
    Database.executebatch(new secondBatch() 200); // for chaining 

}
    }

//To call batch apex
Database.executeBatch(new TestDemoBatch(), 200);



//////////////////////////////////// SCHEDULE APEX ////////////////////////////////////////////////////////////////
/* U WILL LEARN 
1. WHAT IS SCHEDULED APEX?
2. HOW TO SCHEDULE FROM UI AND
FROM CRON EXPRESSION
3. SCENARIOS TO USE SCHEDULE APEX
4. HOW TO MONITOR SCHEDULED APEX */

//We can schedule a batch class , queuable class or any block of code to run in schedule apex (eg:- run batch daily at 1 AM)
//SYNTAX
public class MyClass implements Schedulable {
    public void execute(SchedulableContext context) {
        //CODE THAT WILL NEEDS TO RUN IN SCHEDULE
    }
}

//eg :- 1
public class ScheduleApexDemo implements Schedulable {
    public void execute(schedulableContext sc) {
        /Any code written inside this method can be schedule
        List < Account > accs=[SELECT id, name FROM Account WHERE CREATEDDATE = Today];
        for (Account acc: accs) {
            acc.name - 'Created today' - acc.Name;
        }
    UPDATE accs;
    }
}

//eg :- 2 (CALLING BATCH CLASS FROM SCHEDULE APEX)
public class SchedulcApexDemo implements Schedulable {
    public void execute(SchedulableContext sc) {
        Database.executeBatch(new TestDemoBatch()); //OR  Database.executeBatch(new TestDemoBatch() , 100); --> WHERE TestDemoBatch IS BATCH CLASS NAME AND 100 IS BATCH SIZE

    }
}

//eg :- 3 (CALLING Queueable CLASS FROM SCHEDULE APEX)
public class QueueableScheduleClass implements Schedulable {
    public void execute(SchedulableContext sc) {
        System.enqueueJob(new QueueableClassDemo());
    }
}

/*
Scheduling can be done in 2 ways
1. From User interface.
2. Programatically using System.schedule method.
*/

//1. From User interface - SETUP -> CLASSES -> SCHEDULEAPEX -> GIVE JOBNAME -> SELECT CLASS -> SELECT FREQUENCY

/*
How to schedule a class daily 4 times. let say 2.15 AM,4.15 AM, 6.15 AM, 8.15 AM ?
If any job has to scheduled within the hours like 5.15 or 5.20 AM, we cannot do it from User interface.
Answer is: CRON EXPRESSION (WE WILL NEED TO USE CRON EXPRESSION PROGRAMMATICALY) 
*/

String cronExpression = '000**?*' //where * = all values &  ? = novalue
system.schedule('Job title', cronExpression, class name)


Cron expression has 7 parameters
secs, Mins, Hrs, Day_of_month, Mnth, Day_of_week, optional_year

/*
SEC: 0-59
MINS: 0-59
HR: 0-23
DAY OF MONTH: 1-31 or * or ?
MONTH: 1-12 or JAN-DEC or ? or *
DAY OF WEEK: 1-7 or SUN-SAT or ? or*
OPTIONAL-YEAR: 1970-2099
*/

//you can not pass the both a day-of-month AND a day-of-week parameter (if u give dayofmonth then dayofweek should be ? or if u give day of week then dayofmonth should be ?)
1.Secs; 2.Mins; 3.Hrs; 4.Day_of month; 5.Mnth; 6.Day_of_week; 7.optional_year

'0 00**? *' - 12 AM every day
'0 0 0 **?*' - 10 AM every day
'0 0 10 **?' - 3 PM every day
'0 0 15 **?*' - 3.10 PM every day
'0 10 17? * MON-FRI' - 5.10PM only on weekdays
'000**? *' - 12 AM every day
'000 23 *? *' - 12 AM every 23rd of month
'000* 1? *' - 12 AM every day only in Jan month
'000**? 2020' - 12 AM every day only in 2020


//calling queable or any apex class in schedule method programatically
String cronExp1 = '0 0 2** ?';  // 2 AM
System.schedule("Queueable 2 AM job', cronExp1, new QueueableScheduleClass ());

//to see sheduled jobs --> setup -> schedule jobs

/*summary
1. We can schedule batch class,queueable and any snippet of code
2. Scheduling can be done in 2 ways. Ul and Programatically(CRON exp)
3. We can monitor scheduled jobs.Current and Future scheduled.
*/




//////////////////////////////////  salesforce exclusive apex triggers ////////////////////////////////////

/*RecordId is not generated in beforeInsert trigger as record is not saved in database, RecordId is generated for afterInsert trigger*/

/* BEST PRACTISES FOR WRITTING TRIGGERS
One Trigger per Object (As order of execution of multiple triggers on same object is not guarenteed)
Bulkify your Trigger. Code should work if records are inserted/Updated/Deleted/undeleted in bulk
Avoid DML Statements/ SOQL queries in For Loop (Else it hits Governor limits)
Do not write logics in Trigger, Use Trigger Handler Instead
Avoid Hardcoding lds
Prevent Recursive Triggers
Use Comments to make your trigger readable
*/



/* 
EVENTS & CONTEXT VARIABLES
Before Insert - Trigger.new
After Insert - Trigger.new , Trigger.newMap
Before update - Trigger.new , Trigger.newMap , Trigger.old , Trigger.oldMap
After update - Trigger.new , Trigger.newMap , Trigger.old , Trigger.oldMap
Before delete - Trigger.old , Trigger.oldMap
After delete - Trigger.old , Trigger.oldMap
After undelete - Trigger.new , Trigger.newMap

//////////
Trigger.newMap  - RETURNS IDS & SOBJECT IN MAP
EG - Map<Id,Account> nMap = new Map<Id,Account>();
nMap = trigger.newMap;
*/

trigger AccountTrigger on Account(Before Insert, after Insert, Before update, after update, Before delete, After delete, after undelete){
    //CONTEXT VARIABLES (values which developer needs to write logic)
    //CONTEXT Variable 1: Trigger.new -> List of records that are got inserted/updated
    //CONTEXT Variable 2: Trigger.isbefore -> returns true if trigger is running on before event
    //CONTEXT Variable 3: Trigger.isInsert -> returns true if trigger is called when user has done insert operation
    //CONTEXT Variable 4: Trigger.isafter -> returns true if trigger is called after the record is inserted/updated
    //CONTEXT Variable 5: Trigger.newMap -> returns the list of records that are inserted/updated with latest values in map format
    //CONTEXT Variable 6: Trigger.oldMap -> returns the list of records that are inserted/updated with old/prior values in map format
    //CONTEXT Variable 7: Trigger.old -> Returns the List of records that are inserted/updated with old/prior values
    //CONTEXT Variable 8: Trigger.isUpdate -> Returns true if trigger is called when record is updated

    /*1. BEFORE INSERT
    senario 1) While user creating an account, if user provides Billing address but not Shipping address, write a logic to  populate shipping address with billing address 
    senario 2) While user creating an account, if Annual revenue provided by user is less than 1000, then write a logic to throw an error to user.*/
    If(Trigger.isBefore && Trigger.isInsert){
    for (account accRec: Trigger.new) {
        //senario 1
        if (accRec.ShippingCity == nul1)
            accRec.ShippingCity = accRec.Billingcity;
        if (accRec.ShippingCountry == null)
            accRec.Shippingcountry = accRec.BillingCountry;
        if (accRec.shippingState == nul1)
            actRec.shippingState = accRec.BillingState;
        if (accRec.ShippingStreet == null)
            accRec.Shippingstreet = accRec.billingstreet;
        if (accRec.ShippingPostalCode == null)
            accRec.ShippingPostalCode = accRec.BillingPostalCode;

        //senario 2
        if (accRec.AnnualRevenue < 1000)
            accRec.addError('Annual Revenue cannot ba less than 1000');
    }
}
//NEVER USE INSERT/UPDATE DML STATEMENT IN BEFORE EVENTS , they r automatically taken care of

/*2. AFTER INSERT
When user created an account, write a logic to create contact with same name and associate account & contact*/
//AFTER INSERT LOGIC TO BE WRITTEN IN THIS BELOW BLOCK
if (Trigger.inAfter && Trigger.isInsert) {
    List < Contact > conListToInsert = new List < Contact > ();
    for (Account accRec: Trigger.new) {
    Contact con = new Contact();
        con.LastName = accRec.Name
        con.AccountId = accRec.Id;
        conListToInsert.add(con);
    }
    if (conListToInsert.size() > 0)
    INSERT conListToInsert;
}

/*3. BEFORE UPDATE
When user updates account record, if user changes account name, throw an error 'Account name once created cannot be modified' */
//BEFORE UPDATE LOGIC 10 BE WRITTERN IN THIS BELOW BLOCK
IF(Trigger.isBefore && Trigger.isupdate){
    System.debug('New Values');
    System.debug(Trigger.new);
    System.debug(Tigger.newmap); //Id, Recordwithnewvalues
    System.debug('0ld values');
    System.debug(Trigger.Old);
    System.debug(Trigger.oldMap); //1d, recordwitholdvalues
    for (Account accRecNew: Trigger.new) {
    Account accRecOld = Trigger.oldMap.get(accRecNew.Id);
        if (accRecNew.Name - accRecOld.Name)
            accRecNew.addError('Account Name cannot be modified/ changed once it is created');
    }
}

/*4. AFTER UPDATE
On Account record update, if mailing address is changed, update all its child contacts mail address field same as account mailing address */
//AFTER UPDATE LOGIC TO BE WRITTEN IN THIS BELOW BLOCK
If(Trigger.isAfter && Trigger.isupdate){
    Set < Id > accIdWhichGotBillingAddressChanged = new Set < Id > ();
    for (Account accRecNew: Trigger.New) {
    Account accRecOld = Trigger.OldMap.get(accRecNew.Id);
        if (accRecNew.BillingStreet != accRecOld.BillingStreet) {
            accIdWhichGotBillingAddressChanged.add(accRecNew.Id);
        }
    }
    //This set accIdWhichGotBillingAddressChanged will have accountIds which got billing address changed
    List < Account > accswithContacts =[SELECT Id, Name, billingcity, billingstreet, billingstate, billingcountry, (SELECT Id, Name FROM Contacts) FROM Account WHERE Id IN: accIdWhichGotBillingAddressChanged];
    List < Contact > contsListToupdate = new List < Contact > ();
    for (Account acc: accsWithContacts) {
        List < Contact > consOfTheLoopedAccount = acc.contacts;
        for (Contact con: consOfTheLoopedAccount)
        {
            con.mailingstreet = acc.billingstreet;
            con.MailingCity = acc.BillingCity;
            con.Mailingstate = acc.BillingState;
            con.Mailingcountry = acc.Billingcountry;
            contslistToUpdate.add(con);
        }
    }
    If(contsListToupdate.size() > 0){
        UPDATE contsListToupdate;
    }

    /*5. BEFORE DELETE
    An active account should not be deleted.*/
    //BEFORE DELETE LOGIC TO BE WRITTEN IN THIS BELOW BLOCK
    If(Trigger.isBefore && Trigger.isDelete){
        //Trigger.new  & trigger.newmap r not available in Delete cperation (new and newmap)
        //Trigger.old & Trigger.oldmap are available in Delete operatian
        for (Account accold: Trigger.old) {
            if (accold.Active_c == "Yes")
                accold.addError('You cannot delete an active account');

        }
    }

    /*6. AFTER DELETE
    When ever account is deleted, send an email to account owner.*/
    //AFTER DELETE LOGIC IS WRITTEN IN THIS BELOW BLOCK
    If(Trigger.isafter && Trigger.isDelete){
        //Sending email to user who deletes the records
        //Trigger.new is not available in Delete operation (new and newmap)
        //Trigger.old & oldmap are available in Delete operatian
        List < Messaging.SingleEmailMessage > emailObjs = new List < Messaging.SingleEmailMessage > ();
        for (Account accold: Trigger.o1d) {
            Messaging.SinglEmailMessage emailObj = new Messaging.SingleEmailMessage();
            List < String > emailaddress = new List < String > ();
            emailAddress.add(Userinfo.getUserEmail());
            emailobj.toaddresses(emailAddress);
            emailobj.setSubject('Account has been sucessfully deleted' + accold.Name);
            emailobj.setPlainTextBody('Hello. . no body written here. .please refer subject');
            emailObjs.add(emailobj);
        }
        Messaging.sendEmail(emailObjs);
    }
}

/*7. AFTER UNDELETE
Send an email to account owner when account is being restored from Recycle bin*/
//AFTER UNDELETE LOGIC IS WRITTEN IN THIS BELOW BLOCK
If(Trigger.isafter && Trigger.isundelete){
    //Sending email to user who restores the records
    //Trigger.new/newmap is available in unDelete operation (new and newmap)
    //Trigger.old & oldmap is notavailable in unDelete operatian
    List < Messaging.SingleEmailMessage > emailObjs = new List < Messaging.SingleEmailMessage > ();
    for (Account accold: Trigger.new) {
        Messaging.SinglEmailMessage emailObj = new Messaging.SingleEmailMessage();
        List < String > emailaddress = new List < String > ();
        emailAddress.add(Userinfo.getUserEmail());
        emailobj.toaddresses(emailAddress);
        emailobj.setSubject('Account has been sucessfully restored' + accold.Name);
        emailobj.setPlainTextBody('Hello. . no body written here. .please refer subject');
        emailObjs.add(emailobj);
    }
    Messaging.sendEmail(emailObjs);
}

}

/*8. RECRUSSIVE TRIGGER ON CONTACT WITH HANDLER CLASS*/ 
trigger ContactTrigger on Contact(after insert){
    if (Trigger.isAfter && Trigger.isInsert && !ContactTriggerHandler.isTriggerRan) {
        ContactTriggerHandler.isTriggerRan = true;
        ContactTriggerHandler.createDuplicateContact(Trigger.new);
    }
}

public class ContactTriggerHandler {
    public static Boolean isTrigagerRan = false;
    public static void createDuplicateContact(List<Contact> newconsList) {
    List < Contact > dupConsToInsert = new List < Contact > ();
    for (Contact con: newconsList) {
    Contact con1 = new Contact();
        con1.lastname = 'Duplicate contact';
        dupConsToInsert.add(con1);
    }
    INSERT dupConsToInsert;
}
    }



//////////////////////////////////  sanjay gupta Asynchronous apex ////////////////////////////////////
/*
An asynchronous process executes a task in the background.User doesnt have to wait for the task to finish.
Use Asynchronous Apex for:
     1. Callouts to external systems
     2. Operations that require higher limits
     3. Code that needs to run at a certain time.
Asynchronous jobs wheather executed or not can be seen in Apex Jobs

//Types of Asynchronous Processing

Future - Run in their own thread, and do not start until resources are available
Common Scenarios - Web service callout.

Batch Apex - Run large jobs that would exceed normal processing limits
Common Scenarios - Data cleansing or archiving of records

Queueable - Similar to future methods, but provide additional job chaining and allow more complex data types to be used.
Common Scenarios - Performing sequential processing operations with external Web Services.

Scheduled Apex - Schedule Apex to run at a specified time.
Common Scenarios - Daily or weekly tasks

//Governor and Execution Limits
Asynchronous apex provides higher governor and execution limits.
Number of SOQL is doubled from 100 to 200.
Total heap size and maximum CPU time are similary large for asynchronous calls.
As you get higher limits with async, also those limits are independent of the limits in the synchronous request that queued the async request initially.

/////////////////////////////////Future Apex
Future Apex runs process in a separate thread, at a later time when system resources become available.
Use @future annotation to create future methods.
In Synchronous processing, all method calls are made from
the same thread and no additional processing can occur until the process is complete.
Whereas in future method, methods runs asynchronously in its own thread.
This unblocks users from performing other operations. 
Provides higher governor & execution limits for processing.

//When to use Future Method?
Callouts to external Web services. (we cant make Callouts from trigger so in that case we need to call future method ; set callouts=true)
Process that needs to executed in a separate or their own thread.
Isolating DML operations on different sObject types to prevent the mixed DML error. 
(like setup(user,profile) & nonsetup objects(standard & custom) as we cannot perform DML on both in 1 transaction)
*/

//syntax
global class FutureApex {
    @future
    public static void futureMethod(List<ld> recordlds) {
    List < Account > accounts =[SELECT ld From Account WHERE Id IN: recordlds];
    //some operation
}
}

//Example
//Total number of contacts available on any Account
public class AccountCalculator {
    @future
    public static void countContacts(List<Id> accIds) {
    List < Account > accList =[SELECT Id, (SELECT Id FROM Contacts) FROM Account WHERE Id IN: accIds];
    for (Account acc: accList) {
        acc.Number_of_Contacts_c = acc.Contacts.size();
    }
    if (!accList.isEmpty()) {
    update accList;
    }
}}

//test class for future method example
@isTest
public class AccountCalculatorTest {
    @isTest
    private static void countcontactsTest() {
        List < Account > accList = new List < Account > ();
        for (Integer i = 0; i < 250; i++) {
            accList.add(new Account(Name = 'Test' + i));
        }
insert accList;
        List < Contact > conList = new List < Contact();
        List < Id > accIds-= new List < Id > ();
        for (Account acc: accLIst) {
            conList.add(new Contact(FirstName = 'Test', LastName = acc.Name, AccountId = acc.Id));
            accIds.add(acc.Id);
        }
insert conList;
        Test.startTest();
        AccountCalculator.countContacts(accIds);
        Test.stopTest();
        List < Account > accs =[SELECT Id, Number _of_Contacts c FROM Account];
        System.assertEquals(1, accs[0].Number_of_Contacts_c, 'not working');
    }
}

////////////////////////////////////////////////Batch Apex
/* 
Batch Apex runs large jobs.It can process thousands or millions of records.It processes records asynchronously in batches.
For Data cleansing or archiving, Batch Apex is probably best solution.

How Batch Apex works ?
    The execution logic of the batch class is called once for each batch of records that is being processed.
Each time when a batch class is invoked, the job is placed on the Apex job queue and is executed as a discrete transaction.
Advantages are:
o) Every transaction starts with a new set of g
limits.
    o) If one batch fails to process successfully, all other
successful batch transactions aren't rolled back. 

Batch Apex class must implement the Database.Batchable interface and include the following three methods:
start
Oexecute
finish

//start
1) Collect the records or objects to be passed to the interface method execute for processing.
2) start method is called once at the beginning of a Batch Apex Job.
3) It returns a Database.QueryLocator object or an Iterable that contains the records or objects passed to the job.
4) When QueryLocator object is used, the governor limit for the total
number of records retrieved by SOQL queries is bypassed and 50
million records can be queried.
5) Whereas with an Iterable, governor limit by SOQL queries is
enforced.

//execute
1) Performs actual processing for each batch of data passed.
2) Default batch size is 200 records.
3) Batches of records can execute in any order, it doesn't depends on which order they are received from the start method.
4) It takes a reference to the Database.BatchableContext object and A List < sObject > or a list of parameterized types.
5) When using Database.QueryLocator use the returned list.

//finish
1) Execute post - processing operations.
2) Calls once after all batches are processed.
3) For example, sending an email process can be implemented in finish method.
*/

//SYNTAX
public class MyBatch implements Database.batchable<sObject>{
    public Database.QueryLocator start(Database.BatchableContext bc) {
        //collect the batches of records or objects to be passed to execute method
    }
    public void execute(Database.BatchableContext bc, List<P> records) {
    //Process each batch of records
}
public void finish(Database.BatchableContext bc) {
    //execute post-processing operations
}
}

//Invoke a Batch Class
MyBatch myBatch Obj = new MyBatch();
Id batchld = Database.executeBatch(myBatch Obj):

Pass Batch Size if needed:
Id batchld = Database.executeBatch(myBatchObj, 100);

//AsyncApexJob Record
Each Batch Apex invocation creates an AsyncApexJobrecord.It helps to track progress of the job.

AsyncApexJob job[SELECT Id, Status, Jobltems Processed, TotalJobltems, NumberOfErrors FROM AsyncApexJob WHERE ID: batchld];

// BATCH APEX EXAMPLE
//Query all opportunity records & set leadsource as web
public class OppProcessor implements Database.Batchable<sObject>, Database.stateful {
    public integer recordCount = 0;
    public Database.QueryLocator start(Database .BatchableContext bc) {
        return Database.getQueryLocator([SELECT Id, Name FROM Opportunity]);
    }
    public void execute(Database.BatchableContext bc, List<opportunity> opps) {
    for (Opportunity op : opps) {
        op.Leadsource 'Web';
    }
    update opps;
    recordCount = recordCount + opps.size();
}
    public void finish(Database.BatchableContext bc){
    system.debug('total records processed' + recordCount);
}}

/////////////////  execute batch apex
OppProcessor oppProcess = new OppProcessor();
Id batchId = Database.executeBatch(oppProcess);

////////////////////////     test class
@isTest
public class OppProcessorTest {
    @isTest
    private static void testBatchClass() {
        List < opportunity oppList = new LIst < opportunity > ();
        for (integer i - 0; i < 200; i++) {
            oppList.add(
                new Opportunity(Named 'Test ' + i, StageName - 'Prospecting', closeDate = System.today()));
        }
insert opplist;
        Test.startTest();
OppProcessor oppProcess new OppProcessor();
Id batchId = Database.executeBatch(oppProcess, 200);
        Test.stopTest();
        List < opportunity > updatedOpps=[SELECT Id From Opportunity WHERE LeadSource = 'Web'];
        System.assertEquals(200, updatedopps.size());
    }
}

//////////////////////////////////////////////////     Queueable APEX   ////////////////////////////////////
/* 
Superset of future methods with extra features.Combination of future methods and Batch Apex. Works beyond primitive arguments.
Called by a simple System.enqueueJob( ) method. enqueueJob( ) return a job ID that can be monitored.
Additional benefits of queable over future method r Non-primitive types , Monitoring , Chaining Jobs
*/

//Queueable Syntax
public class SomeClass implements Queueable {
    public void execute(Queueable Context context) {
        // write some code
    }
}

//Queueable Example
public class UpdateParentAccount implements Queueable {
    private List<Account> accList;
    private Id parentAccId;
    public UpdateParentAccount(List<Account> accRecords, Id id) {
    this.accList = accRecords;
    this.ParentAccId = id;
}
    public void execute(QueueableContext context) {
    for (Account acc: accList) {
        acc.ParentId = parentAcc Id;
    }
    update accList;
}}

// calling Queueable
List < account > accList[SELECT Id FROM Account WHERE billingstate - 'NY'];
Id parentId[SELECT Id FROM Account WHERE Name = 'Account 025'][0].Id;
UpdateParentAccount updateJob = new updateParentAccount(accList, parentId);
Id jobId = system.enqueuejob(update job);

// Queueable Test
@isTest
public class UpdateParentAccountTest {
    @testSetup
    static void setup() {
        List < account > accList = new LIst < Account > ();
        accList.add(new Account(Name = 'Parent'));
        for (Integer i - 0; i < 100; i++) {
            accList.add(new Account(name = 'Test Account' + i));
        }
insert accList;
        @isTest
        private static void testQueueable() {
Id parentId = [SELECT Id FROM Account WHERE Name = 'Parent'][0].id;
            List < Account > accList =[SELECT Id, Name FROM Account WHERE Name Like 'Test Account%'];
UpdateParentAccount updateJob new UpdateParentAccount(accList, parentId);
            Test.start Test();
            System.enqueueJob(updateJob);
            Test.stopTest();
            system.assertEquals(100, [SELECT count() FROM Account WHERE ParentId =: ParentId]);
        }
    }
}

































//////////////////////////////////  sanjay gupta apex triggers ////////////////////////////////////
/*dml is required in after and in before dml is not required*/

/*  1)  Before Insert
If Account Industry is not null and having value as 'Media' then
populate Rating as Hot. */

trigger AccountTrigger on Account(before insert, after insert) {
    if (Trigger.isInsert) {
        if (Trigger.isBefore) {
            AccountTriggerHandler.beforeInsert(Trigger.New);
        } else if (Trigger.isAfter) {
            AccountTriggerHandler.afterInsert(Trigger.New);
        }
    }
}
////////////////////

public class Account TriggerHandler {
public static void beforeInsert(List < Account > newList) {
        for (Account acc : newList) {
            if (acc.Industry != null && acc.Industry == 'Media') {
                acc.Rating = 'Hot'; I
            }
        }
    }
}

/* 2) After Insert
Create related Opportunity when Account is created. */

public static void createRelated0pp(List < Account > newList){
    List < 0pportunity > oppToBeInserted = new ListcOpportunity > ();
    for (Account acc: newlist) {
    Opportunity opp = new Opportunity();
        opp.Name = acc.Name;
        opp.AccountId = acc.Id;
        opp.StageName = 'Prospecting';
        opp.CloseDate = System.today():
        oppToBeInserted.add(opp);
    }
    if (!oppToBeInserted.isEmpty()) {
insert oppToBeInserted;
    }
}

/* 
Before Update
If account phone is updated then put update message in description.*/

if (Trigger.isUpdate) {
    if (Trigger.isBefore) {
        AccountTriggerHandler.updatePhoneDescription(Trigger.New, Trigger.oldMap);
    } else if (Trigger.isAfter) {
        AccountTriggerHandler.updateRelatedOppPhone(Trigger.New, Trigger.oldMap);
    }
}
////////////////////

public static void updatePhoneDescription(List < Account > newList, Map < Id, Account > oldMap) {
    for (Account acc: nenlList) {
        if (oldMap != null && acc.Phone != oldMap.get(acc.Id).Phone) {
            acc.Description = "Phone is modified on Account";
        }
    }
}

/* After Update
If Account phone is updated then populate that on all related
opportunities. */

public static void updateRelatedOppPhone(List < Account > newlist, Map < Id, Account > oldMap){
    Map < Id, Account > accIdToAccountMap = new Map < Id, Account > ();
    List < opportunity > oppToBeUpdated = new List < opportunity > ();
    for (Account acc newList) {
        if (oldMap != null && acc.Phone != oldMap.get(acc.Id).Phone) {
            accIdToAccountMap - put(acc.Id, acc);
        }
    }
    for (opportunity opp: [SELECT Id, Phone FROM Opportunity wHERE AccountId IN : accIdToAccountMap.keySet()]) {
        Opportunity oppor = new Opportunity();
        if (accIdToAccountMap.containsKey(opp.AccountId)) {
            oppor.id opp.id;
            oppor.Account_Phone__c = accIdToAccountMap.get(opp.AccountId).Phone;
            oppToBeUpdated.add(oppor);
        }
    }
    if (loppToBeUpdated.isEmpty()) {
update oppToBeUpdated;
    }
}

/* Before Delete
Employee record cannot be deleted if active is true.*/

trigger EmployeeTrigger on Employee_c(before delete, after delete)
if (Trigger.isDelete) {
    if (Trigger.isbefore) {
        EmployeeTriggerHandler.checkEmployeeStatus(Trigser.old);
else if (Trigger.isAfter) {
            EmployeeTriggerHandler.updateLeftEmpCountOnAcc(Trigger.old);
        }
    }
}
////////////////////

public class EmployeeTriggerHandler {
    public static void checkEmployeeStatus(List <Employee__ c> oldList) {
    for (Employee_c emp : oldlist)
    if (emp.Active__c == true) {
        emp.addError('Active Employee cannot be removed ');
    }
}
}

/*After Delete
When Employee record is deleted then update Left Employ
Count on Account.*/

public static void updateLeftEmpCountOnAcc(List < Employee_c > oldList) {
    Set Id > accIds = new Set < Id > ();
    ListAccount > accToBeUpdated = new List < Account > ();
    Map 1d, Account > accIdToAccMap;
    List Employee_c > empList = new List < Employee_c > ();
    Map Id, Decimal > accIdToTotalCount = new Map < Id, Decimal > ();
    for (Employee_c emp : oldList) {
        if (emp.Account _c I = null) {
            accIds.add(emp.Account_c);
            empList.add(emp);
        }
    }
    if (!accIds.isEmpty()) {
        accIdToAccMap = new Map < Id, Account > ([SELECT Id, Left_Employee_Count_c FROM Account
        WHERE Id IN: accIds]);
    }
    if (!empList.1stmpty()) {
        for (Employee__c emp : empList) {
            if (accIdToAccMap.containsKey(emp.Account c)) {
                if (accIdTotalcount.containskey(emp.Account_c)) {
            Decimal count = accIdTotalcount.get(emp.ACcount_c) + 1;
                    accIdTotalcount.put(emp.Account_c, count);
                } else {
                    accIdToTotalCount.put(emp.Account_c, accIdToAccMap get(emp.Account_c).Left_Employee_Count_C + 1)
                }
            }
        }
    }
    for (Id accId : accIdToTotalCount.keySet()) {
        Account acc = new Account();
        acc.id = accId;
        acc.Left_Employee_Count_c = accIdToTotalCount.get(accId);
        accToBeUpdated.add(acc);
    }
    if (laccToBeUpdated.isEmpty()) {
        update accToßeUpdated;
    }
}












///////// GET ALL META DATA FROM SF ORG TO VSCODE ////////////////////////////////
CONNECT VSCODE TO SF ORG BY AUTHORIZING IT, THEN ONCE AUTHORIZED U WILL SEE CLOUD ICON 
JUST CLICK ON THAT ICON & DOWNLOAD THE FILES WHICH U WANT IN UR DESKTOP

////////////////// HOW TO PUSH CODE FROM VS STUDIO TO GIT ////////////////////////
video link - https://www.youtube.com/watch?v=KgGnTMwSxFU&ab_channel=GeekyShows
ONLY ONCE U NEED TO LINK WITH GITHUB AFTER THAT U CN DIRECTLY USE - PUBLISH TO GITHUB

//////  to add changes to github file (CREATE FILE IN GITHUB)
goto source control -> enter commit message -> check the tick then CLICK ON 3 DOTS & SELECT PUSH

//////  to get github code in vscode
open github select project-- > goto code option-- > select https & copy link
with no file or folder selected open vscode, then u wil see option of clone repository in source control
    (to get vscode with no file or folder selected u can go to-- > file-- > new window(once u select new window u will get 
    fresh vscode with no file or folder selected))
(dont open any folder in vscode or u will get option of publish)

//////  to make repository public or private
go to repository & then on settings & then in danger zone & then Change repository visibility

//////  to push a folder as fresh in github if it already has its existing instant
if a folder is already pushed in github and u dont want to make changes to its existing folder in github
u rather want a fresh folder(for that go to that folder on dektop & click on view & check hidden files)
u will now see hidden files where git file will be visible, delete this git file from that desktop folder
    (as this git file in the folder is only connecting it with existing code in github, once delete u can have 
a fresh push in github)

/////   IF GITHUB IS ALREADY LINKED , JUST PUSH FOLDERS IN DIFFERENT NEW REPOSITORIES EASILY
OPEN FOLDER IN GITHUB-- > GO TO SOURCE CONTROL-- > CLICK ON PUBLISH TO GITHUB

/* 
VIDEO LINK - https://www.youtube.com/watch?v=14R1mI47SOc&list=WL&index=4&ab_channel=MridulSrivastava
OPEN FOLDER IN VS CODE
GO IN GITHUB & CREATE REPOSITORY & COPY THE URL LINK OF REPOSITORY
GO IN VSCODE ND SELECT SOURCE CONTROL & CLICK ON INITIALIZE REPOSITORY 
THEN ENTER MESAGE LIKE 'FIRST COMMIT' TO NAME IT & THEN CLICK TICK ICON 
THEN CLICK ON 3 DOTS , GOTO PULL,PUSH THEN SELECT PUSH TO , ADD REMOTE
ADD THE GITHUB REPOSITORY COPIED LINK
THEN AGAIN CLICK ON 3 DOTS GOTO PULL,PUSH THEN IN PUSH TO (U WILL SEE THE REPOSITOTY LINK CLICK ON IT)
*/





/////////////////////// WORK WITH FILES OBJECT IN APEX ////////////////////

CONTENT VERSION-- > MEANS FILES
CONTENT DOCUMENT LINK-- > LINKED ENTITY ID MADHE RELATED ID BHETO, JA OBJECT SOBAT FILE RELATED AHE TYACHA ID
CONTENT DISTRIBUTION-- > TO SHARE FILE, TO GIVE ACCESS OF FILE TO OTHER USERS



////////////////////////// GENERAL NOTE //////////////////////////////
1.System mode means running apex code by ignoring users permissions.User mode means running apex code by respecting users permissions and sharing of records
2.ja varti 3 lines astat schema builder madhe to chld object asto , lookup or masterdetail field child object var aste , like account contact 
madhe account parent ahe n contact child , tar chil var mnje contact var fild asnar ja madhe apan account select karu shakto
3.custom object n custom fields la __c asta tyahun kalta field or object custom ahe ki standard
4.lookup field la lwc or soql madhe refer kela n Id cha jagi name hava asel tar object__r.fieldname asa use karaicha
5.
<target>lightning__RecordAction</target>
</targets>
<targetConfigs>
    <targetConfig targets="lightning__RecordAction">
        <actionType>ScreenAction</actionType>
    </targetConfig>
</targetConfigs>
lwc component la quick action madhe refer karnya sati xml madhe asa kahi code add karava lagto
We cant write return statement on set & map , also we cant perfom dml on set & map;

////////////////////////// BOOK NOTES //////////////////////////////
/*
lookup fields max - 40
masterdetail max - 2 (to convert to lookup , no rollup field should be there)

Custom settings
1) list - available to all
2) heriarcy - customized 
customized settings r used to store data in chache so it ie easily accessible
eg:- store all error message in custom setting & refer it in code rather than directly adding error to code
this will help to change the error message , as even admin can dchange it from custom setting & no need to touch code

methods
list - add , get , set , clear , size
set - add , contains , remove , size
map - put , get , containskey , keyset

=: is used to match with a single fieldname or vairable or objectfield { : is used to bind variables }
eg :- WHERE FIRSTNAME =: MYNAME (MYNAME IS A VARIABLE & NOT  A VALUE)
eg :- WHERE rating = 'HOT' (HOT is not a variable so we used = & no bindinding required)

IN: is used for large data , for ollections like list set 
eg :- Industry IN ('energy','consulting','hospitality')

LIKE (works only on string)
eg :- name LIKE '%G%'  (% G cha adi n nantar kahihi asel tari te return karnar eg - parleG , ABCGHI - he words pan search karnya 
    sati % symbol use kela ahe)

ORDERBY (fieldname) DESC or ASC (default is ASC)    

LIMIT = 5

OFFSET = 5 (pehle 5 records nahi show karnar)

Having - for aggregate query