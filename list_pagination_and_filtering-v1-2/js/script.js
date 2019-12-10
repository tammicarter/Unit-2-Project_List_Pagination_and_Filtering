/******************************************
Treehouse Techdegree: 
Project 2 "List Pagination and Filter"
TAMMI CARTER (EXCEEDS EXPECTATION ATTEMPT)
******************************************/
/***** DOM CONTENT LOADED EVENT TO MAKE SURE HTML PLACEMENT OF SCRIPT DOES NOT MATTER *****/
document.addEventListener( 'DOMContentLoaded', () => {
   /***** GLOBAL VARIABLES *****/
   //SETS VAR FOR 1ST STUDENT LIST UL
   const studentListUl = document.querySelectorAll( '.student-list' )[0];
   //SETS VAR FOR STUDENT LIST ITEMS
   const studentListLi = studentListUl.children;
   //SETS VAR FOR AMOUNT OF LIST ITEMS PER PAGE
   const itemsPerPage = 10;
   /***** SHOWPAGE FUNCTION TO HIDE ALL BUT TEN STUDENTS ON A PAGE PLUS LOOP CYCLE *****/
   const showPage = ( list, page ) => {
   const startPage = page * itemsPerPage;
   const endPage = ( page + 1 ) * itemsPerPage;
   for( let i = 0; i < list.length; i ++ ){
   //IF CONDITIONAL TO SEE IF ITEMS ARE WITHIN LOW AND HIGH PARAMETERS PER PAGE
   if( i >= startPage && i < endPage ){
   //IF CONDITION IS TRUE, THOSE TEN ITEMS DISPLAYED
   list[i].style.display = 'block';
   //IF CONDITION IS FALSE, NOTHING IS DISPLAYED
   } else {
   list[i].style.display = 'none';
   }
   }
   }
   /***** APPEND PAGE LINKS FUNCTION TO CREATE DYNAMIC PAGINATION BUTTONS *****/
   const appendPageLinks = (list) => {
   //VAR SHOWING THE NUMBER OF STUDENTS
   const numberOfStudents = studentListLi.length;
   //VAR TO FIND TOTAL AMOUNT OF PAGES
   const amountOfPages = Math.ceil( numberOfStudents / itemsPerPage );
   //VAR CREATING NEW DIV FOR PAGINATION
   const newDiv = document.createElement('div');
   //APPENDS PAGINATION CLASS NAME TO NEW DIV
   newDiv.className = 'pagination';
   //SETS VAR FOR 1ST MAIN PAGE DIV
   const firstPage = document.querySelectorAll( '.page' )[0];
   //APPENDS A NEW DIV AS CHILD ITEM TO THE DIV
   firstPage.appendChild(newDiv);
   //VAR CREATING A NEW UL
   const newDivUl = document.createElement('ul');
   //APPENDS NEW UL AS CHILD ITEM TO NEW DIV
   newDiv.appendChild(newDivUl);
   //VAR COLLECTING HTML ANCHOR TAGS 
   const anchorList = document.getElementsByTagName( 'A' );
   //FOR LOOP CYCLING THROUGH THE AMOUNT OF PAGES
   for( let i = 0; i < amountOfPages; i ++ ) {
   //VAR CREATING NEW LIST ITEM
   const newDivLi = document.createElement('li');
   //VAR CREATING AN ANCHOR ELEMENT GIVING THE ANCHOR A # URL ATTRIBUTE 
   const anchor = document.createElement('a');
   anchor.href = '#';
   anchor.textContent = i + 1;
   //APPENDS NEW LI TO NEW UL
   newDivUl.appendChild(newDivLi);
   //APPEND ANCHOR TO NEW LI
   newDivLi.appendChild(anchor);
   //CLICK EVENT LISTENER FOR ANCHOR TAG
   anchor.addEventListener( "click", (e) => {
   //FOR LOOP CYCLING THROUGH ANCHOR ITEMS
   for( let i = 0; i < anchorList.length; i ++ ){
   //CLEARS CLASS NAME ON ANCHOR OBJECTS
   anchorList[i].className = '';
   //SETS ANCHOR CLICK TARGET TO ACTIVE CLASS
   e.target.className = 'active';
   }
   //RETURN PAGE BASED ON CLICK
   showPage( studentListLi, i );
   });
   }
   //SETS ACTIVE CLASS TO FIRST ANCHOR ITEM CLICKED
   anchorList[0].className = 'active';
   }
   //RETURN FIRST PAGE UPON LOAD
   showPage( studentListLi, 0 );
   //RUN APPEND PAGE LINKS FUNCTION TO SHOW PAGE LINKS
   appendPageLinks();
   });
   // TO DO! ADD AN EVENT LISTENER TO MY HTML DYNAMIC SEARCH BOX (EXCEEDS EXPECTAION)
   