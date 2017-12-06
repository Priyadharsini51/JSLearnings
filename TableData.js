// Detail Class
function detail(name, project, location)
{
    this.Name = name;
    this.Project = project;
    this.Location = location;
}

// Populate data for detail class and return detail array
function PopulateDetails()
{
    var person1 = new detail('Priyadharsini', 'PGS', 'India');
    var person2 = new detail('Rakshitha', 'Finance', 'India');
    var person3 = new detail('Rambabu', 'RouteMax', 'India');
    var person4 = new detail('Sai', 'PGS', 'India');
    var person5 = new detail('Yadu', 'SkySym', 'India');
    
    var personArray = [];
    personArray.push(person1, person2, person3, person4, person5);
    return personArray;
}

// Display details in table format
function displayDetailsInTable()
{
    var table = document.getElementById("PersonDetails");
    var personDetails = PopulateDetails();

    for(var i = 0; i < personDetails.length; i++)
    {
        // add Row
        var newRow = table.insertRow();

        // add columns
        var column1 = newRow.insertCell(0);
        column1.innerHTML = personDetails[i].Name;

        var column2 = newRow.insertCell(1);
        column2.innerHTML = personDetails[i].Project;

        var column3 = newRow.insertCell(2);
        column3.innerHTML = personDetails[i].Location;     
        
        //console.log(personDetails[i].Name + personDetails[i].Project + personDetails[i].Location);
    }    
}

displayDetailsInTable()

