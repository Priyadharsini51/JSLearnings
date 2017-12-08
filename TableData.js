// Detail Class
window.onload = function() {
    PopulateInitialDetails();
    displayDetailsInTable(personArray);
};

var personArray = [];
function detail(name, project, location)
{
    this.Name = name;
    this.Project = project;
    this.Location = location;
}


// Populate data for detail class and return detail array
function PopulateInitialDetails()
{
    var person1 = new detail('Priyadharsini', 'PGS', 'India');
    var person2 = new detail('Rakshitha', 'Finance', 'India');
    var person3 = new detail('Rambabu', 'RouteMax', 'India');
    var person4 = new detail('Sai', 'PGS', 'India');
    var person5 = new detail('Yadu', 'SkySym', 'India');
    
    
    personArray.push(person1, person2, person3, person4, person5);

 //var obj =   [{Name:"Priyadharsini", Project:"PGS", Location: "India" }, {Name:"Priyadharsini", Project:"PGS", Location: "India" }];
}

// Display details in table format
function displayDetailsInTable(displayPersons)
{
    var table = document.getElementById("PersonDetails");
    table.innerHTML = null;    

    var header = "<tr><th>Name</th><th>Project</th><th>Location</th></tr>";
    table.innerHTML = header;   

    for(var i = 0; i < displayPersons.length; i++)
    {
        // add Row
        var newRow = table.insertRow();

        // add columns
        var column1 = newRow.insertCell(0);
        column1.innerHTML = displayPersons[i].Name;

        var column2 = newRow.insertCell(1);
        column2.innerHTML = displayPersons[i].Project;

        var column3 = newRow.insertCell(2);
        column3.innerHTML = displayPersons[i].Location;     

        //var html = "<tr><td>{0}</td></tr>"
        
        //console.log(personDetails[i].Name + personDetails[i].Project + personDetails[i].Location);
    }    
}

function AddDetail()
{
        var empName = document.getElementById("EmpName").value;
        var proj = document.getElementById("Project").value;
        var loc = document.getElementById("Location").value;

        personArray.push(new detail(empName, proj, loc));
        displayDetailsInTable(personArray);        
}

function SearchName()
{
    var searchName = document.getElementById("Search").value.toLowerCase();
    var searchResult = [];

    for(var i=0 ; i<personArray.length; i++)
    {
        if (personArray[i].Name.toLowerCase().indexOf(searchName) !== -1)
        {
            searchResult.push(personArray[i]);
        }
    }

    displayDetailsInTable(searchResult);    
}

function DeleteDetail()
{
    var EmpNameToDeleteTextBox = document.getElementById("EmpNameToDelete");
    var empToDelete = EmpNameToDeleteTextBox.value.toLowerCase();

    for(var i=0 ; i<personArray.length; i++)
    {
        if (personArray[i].Name.toLowerCase() === empToDelete)
        {
            personArray.splice(i, 1);
        }
        else
        {
            alert("No Employee as " + EmpNameToDeleteTextBox.value + "  to delete")
            break;
        }
    }
    
    EmpNameToDeleteTextBox.value = null;
    displayDetailsInTable(personArray);  
}





