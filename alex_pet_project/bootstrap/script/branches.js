function setBranchAndRedirect(branchName) {
    console.log(`Setting branch in localStorage: ${branchName}`);
    localStorage.setItem("branch", branchName);
    console.log(`Branch "${branchName}" saved to localStorage`);
    setTimeout(() => {
        branchInformation();
    }, 100);
    return false; 
}



// Branch class
class Branch {
    constructor(name, location, img, address, phone) {
        this.name = name;
        this.location = location;
        this.img = img;
        this.address = address;
        this.phone = phone;
    }
}

// Create branch instances
let branchNewYork = new Branch(
    "New York",
    "USA",
    "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "123 Broadway, New York, NY 10001",
    "+1 (212) 555-0100"
);

let branchLosAngeles = new Branch(
    "Los Angeles",
    "USA",
    "https://images.unsplash.com/photo-1444723121867-7a241cacace9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "456 Sunset Blvd, Los Angeles, CA 90028",
    "+1 (323) 555-0200"
);

let branchChicago = new Branch(
    "Chicago",
    "USA",
    "https://images.unsplash.com/photo-1477414956199-7dafc86a4f1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "789 Michigan Ave, Chicago, IL 60611",
    "+1 (312) 555-0300"
);

let branchTelAviv = new Branch(
    "Tel Aviv",
    "Israel",
    "https://www.beauchamp.com/wp-content/uploads/2020/12/xIsrael_TelAviv_City_shai-pal1-1.jpg",
    "101 Rothschild Blvd, Tel Aviv-Yafo, Israel",
    "+972 3-555-0400"
);


// Create branches array
const branches = [branchNewYork, branchLosAngeles, branchChicago, branchTelAviv];

console.log("Branches created:", branches);

// Simple test function
function branchInformation() {
    console.log("branchInformation() called");
    
    const container = document.getElementById("branchContainer");
    console.log("Container found:", container);
    
    if (!container) {
        console.error("Container not found!");
        alert("ERROR: Container with ID 'branchContainer' not found!");
        return;
    }
    
    const selectedBranchName = localStorage.getItem("branch");
    console.log("Selected branch from localStorage:", selectedBranchName);
    
    if (selectedBranchName) {
        const selectedBranch = branches.find(branch => branch.name === selectedBranchName);
        
        if (selectedBranch) {
            container.innerHTML = `
            <div class="container my-5">
                <div class="row justify-content-center">
                    <div class="col-md-8">
                        <div class="alert alert-success text-center">
                            <h4>✅ Selected Branch: ${selectedBranchName}</h4>
                        </div>
                        <div class="card shadow">
                            <img src="${selectedBranch.img}" class="card-img-top" style="height: 300px; object-fit: cover;">
                            <div class="card-body">
                                <h2 class="text-center text-primary">${selectedBranch.name} Branch</h2>
                                <p><strong>Country:</strong> ${selectedBranch.location}</p>
                                <p><strong>Address:</strong> ${selectedBranch.address}</p>
                                <p><strong>Phone:</strong> ${selectedBranch.phone}</p>
                                <div class="text-center">
                                    <button class="btn btn-primary me-2" onclick="showAllBranches()">View All Branches</button>
                                    <button class="btn btn-warning" onclick="clearBranchSelection()">Clear Selection</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            `;
        } else {
            container.innerHTML = `
            <div class="container my-5">
                <div class="alert alert-warning text-center">
                    <h4>⚠️ Branch "${selectedBranchName}" not found!</h4>
                </div>
            </div>
            `;
            showAllBranches();
        }
    } else {
        showAllBranches();
    }
}

function showAllBranches() {
    console.log("showAllBranches() called");
    
    const container = document.getElementById("branchContainer");
    if (!container) return;
    
    let html = `
    <div class="container my-5">
        <h2 class="text-center mb-4">🏢 Choose Your Branch</h2>
        <div class="row">
    `;
    
    branches.forEach(branch => {
        const isSelected = localStorage.getItem("branch") === branch.name;
        
        html += `
        <div class="col-md-6 col-lg-3 mb-4">
            <div class="card shadow ${isSelected ? 'border-success' : ''}" onclick="selectBranch('${branch.name}')" style="cursor: pointer;">
                ${isSelected ? '<div class="card-header bg-success text-white text-center">✅ Selected</div>' : ''}
                <img src="${branch.img}" class="card-img-top" style="height: 200px; object-fit: cover;">
                <div class="card-body text-center">
                    <h5>${branch.name}</h5>
                    <p class="text-muted">${branch.location}</p>
                    <small class="text-muted">${branch.address}</small>
                    <br>
                    <button class="btn ${isSelected ? 'btn-success' : 'btn-primary'} mt-2" ${isSelected ? 'disabled' : ''}>
                        ${isSelected ? 'Selected' : 'Select'}
                    </button>
                </div>
            </div>
        </div>
        `;
    });
    
    html += `</div></div>`;
    container.innerHTML = html;
}

function selectBranch(branchName) {
    console.log(`Selecting branch: ${branchName}`);
    localStorage.setItem("branch", branchName);
    alert(`${branchName} branch selected!`);
    branchInformation();
}

function clearBranchSelection() {
    console.log("Clearing branch selection");
    localStorage.removeItem("branch");
    alert("Branch selection cleared");
    branchInformation();
}

