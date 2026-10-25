// 1. VARIABLE AND PRODUCT INFORMATION
const shopName = "Grace's Mini Shop";
// Low-stock threshold.
// Products with 5 or fewer items need restocking.
const Low_STOCK_THRESHOLD = 5;
// 2. ARRAY OF OBJECTS
//Each product has an ID, name, price, and quantity in stock.
const products = [
    {
        id: 1,
        name: "Rice",
        price: 2500,
        quantity: 20
    },
    {
        id: 2,
        name: "Cooking Oil",
        price: 6000,
        quantity:4
    },
    {
        id: 3,
        name: "Sugar",
        price: 1800,
        quantity: 3
    },
    {
        id: 4,
        name: "Soap",
        price: 1200,
        quantity: 15
    },
    {
        id: 5,
        name: "Flour",
        price: 1500,
        quantity: 5
    },
    {
        id: 6,
        name: "Milk",
        price: 1000,
        quantity: 12
    },
    {
        id: 7,
        name: "Bottled Water",
        price: 500,
        quantity: 0
    },
];
// 3. FUNCTION TO CALCULATE THE STOCK VALUE OF ONE PRODUCT
function
 calculateProductStockValue(product) {
    return product.price * product.quantity;   
} 
// 4. FUNCTION TO CALCULATE THE TOTAL INVENTORY VALUE
function
calculateTotalInvetoryValue(productList) {
    let totalValue = 0;
    for (let i = 0; i < productList.length; i++) {totalValue += calculateProductStockValue(productList[i])} return totalValue;
 }
// 5. FUNCTION TO IDENTIFY LOW-STOCK PRODUCTS
function
getLowStockProducts(productList) {return productList.filter(function (product) {return product.quantity <= Low_STOCK_THRESHOLD;});
}
// 6. FUNCTION TO FIND A PRODUCT BY NAME
function
findProductByName(productList, productName) {return productList.find(function(product) {return product.name.toLowerCase() === productName.toLowerCase();});
}
// 7. FUNCTION TO CREATE A LIST OF PRODUCT NAMES
function
getProductNames(productList) {return productList.map(function (product) {return product.name;});
}
// 8. FUNCTION TO DISPLAY THE INVENTORY REPORT
function
displayInventoryReport(productList) {
    console.log("========================================");
        console.log("    PRODUCT INVENTORY MANAGER");
    console.log("========================================");
        console.log("Shop Name:", shopName);
        console.log("Total Number of Products:", productList.length);
        console.log("Low-Stock-Threshold:", Low_STOCK_THRESHOLD, "units");
    console.log("----------------------------------------");
        console.log("PRODUCT DETAILS AND STOCK VALUES");
    console.log("-----------------------------------------");
    // Using a loop to process and display every product.
    for (let i = 0; i < productList.length; i++) { const product = productList[i]; const stockValue = calculateProductStockValue(product);
            console.log("Product ID:", product.id);
            console.log("Product Name", product.name);
            console.log("Price per Unit: RWF", product.price.toLocaleString());
            console.log("Quantity in Stock:", product.quantity);
            console.log("Total Stock Value: RWF",stockValue.toLocaleString());
            
            // Conditional statements to identify stock status.
            if (product.quantity === 0) {
                console.log("Stock Status: OUT OFF STOCK");
            } else if (product.quantity <= Low_STOCK_THRESHOLD) {
                console.log("Stock Status: LOW STOCK - RESTOCK NEEDED");
            } else {
                console.log("Stock Status: STOCK AVAILABLE");
            }
    console.log("----------------------------------------");
    }
    // Calculate and display the total inventory value.
    const totalInventoryValue = calculateTotalInvetoryValue(productList);
    console.log("TOTAL INVENTORY VALUE: RWF", totalInventoryValue.toLocaleString());
    // Identify all products that need restocking.
    const lowStockProducts = getLowStockProducts(productList);
    console.log("----------------------------------------");
        console.log("PRODUCTS THAT NEED RESTOCKING");
    console.log("----------------------------------------");
        if (lowStockProducts.length > 0) {
            for (let i = 0; i < lowStockProducts.length; i++) {
                const product = lowStockProducts[i];
                if (product.quantity === 0) {
                    console.log(product.name + ": OUT OF STOCK. Restock immediately."); } else {
                        console.log(product.name + ": Only" + product.quantity + "units remaining.");
                    }
            }
        } else {
            console.log("No products need restocking.");
        }
    // Display the names using map().
    console.log("---------------------------------------");
        console.log("ALL PRODUCT NAMES");
    console.log("---------------------------------------");
    console.log(getProductNames(productList));
    // Find a specific product using find()
    console.log("---------------------------------------");
        console.log("PRODUCT SEARCH");
    console.log("---------------------------------------");
        const searchedProduct = findProductByName(productList, "Rice");
        if (searchedProduct) {
            console.log("Product Found:", searchedProduct.name);
            console.log("Price: RWF", searchedProduct.price.toLocaleString());
            console.log("Quantity:", searchedProduct.quantity);
        } else {
            console.log("Product not found.");
        }
    console.log("=======================================");
        console.log("    END OF INVENTORY REPORT");
    console.log("========================================");
        }
// 9. TESTING AND DEBUGGING
function runTests() {
    console.log("");
console.log("=======================================");
    console.log("PROGRAM TESTS");
console.log("=======================================");
    // Test 1: Calculate the stock value of Rice.
    const rice = findProductByName(products, "Rice")
    console.assert(calculateProductStockValue(rice) === 50000, "Test failed: Rice stock value should be 50000.");
    // Test 2: Calculate the total inventory value.
    console.assert(calculateTotalInvetoryValue(products) === 116900, "Test failed: Total inventory value should be 116900.");
    // Test 3: Check whether low-stock products are identified.
    const lowStockProducts = getLowStockProducts(products);
    console.assert(lowStockProducts.length === 4,"Test failed: There should be 4 low-stock products.");
    // Test 4: Check whether find() works correctly
    console.assert(findProductByName(products, "Rice") !== undefined, "Test failed: Rice should be found.");
    // Test 5: Check whether a nonexistent product is handled
    console.assert(findProductByName(products, "Bread") === undefined, "Test failed: Bread should not be found.");
    // Test 6: Check whether the program handles an empty list.
    console.assert(calculateTotalInvetoryValue([]) === 0, "Test failed: An empty invetory should have value 0.");
    console.log("Testing complete. check for any assertion errors.");
    console.log("========================================");
}
// 10. RUN THE PROGRAM
displayInventoryReport(products);
runTests();
    
    
    



            
              
            
            

        
        
        
            
            
            
            
        
        
    

    
        
        
              
            
                        
                    
        
        
    
        
    
                
                
                
            
            
            
            
             
        
        
        
        
        
         
        
        
    
    


    

