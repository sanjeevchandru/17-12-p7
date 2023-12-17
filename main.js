document.write("7. to sort the items of an array."+"<br>");
function test7(arr){
    return arr.sort(function(a,b)
    {
        return a-b;
    }
    )
}
document.write("Original array : [-3, 8, 7, 6, 5, -4, 3, 2, 1] "+"<br>");
document.write("Sort array of : "+test7([-3, 8, 7, 6, 5, -4, 3, 2, 1])+"<br><br>");