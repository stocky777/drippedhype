function openNav() {
document.getElementById("Nav1").style.width = "100%";
}

function closeNav()
{
document.getElementById("Nav1").style.width = "0%";
}

function openNav2() {
document.getElementById("Nav2").style.width = "50%";
}

function closeNav2()
{
document.getElementById("Nav2").style.width = "0%";
}



function openHoodie()
{
  document.getElementById("col2").style.display="none"
  document.getElementById("col3").style.display="none"
  document.getElementById("prod11").style.display="block"
  document.getElementById("prod12").style.display="block"
  document.getElementById("forCol1").style.display="block"
  document.getElementsByClassName("button1").style.display="block"
}

function openTee()
{
  document.getElementById("col1").style.display="none"
  document.getElementById("col3").style.display="none"
  document.getElementById("prod21").style.display="block"
  document.getElementById("forCol2").style.display="block"
  document.getElementsByClassName("button1").style.display="block"
}

function openCap()
{
  document.getElementById("col1").style.display="none"
  document.getElementById("col2").style.display="none"
  document.getElementById("prod31").style.display="block"
  document.getElementById("forCol3").style.display="block"
  document.getElementsByClassName("button1").style.display="block"
}

function redo()
{
  document.getElementById("col1").style.display="inline-block"
  document.getElementById("col2").style.display="inline-block"
  document.getElementById("col3").style.display="inline-block"
  document.getElementById("prod31").style.display="none"
  document.getElementById("prod21").style.display="none"
  document.getElementById("prod11").style.display="none"
  document.getElementById("prod12").style.display="none"
  document.getElementById("forCol3").style.display="none"
  document.getElementById("forCol1").style.display="none"
  document.getElementById("forCol2").style.display="none"
  document.getElementsByClassName("button1").style.display="none"
}


var product1_check = false;
var product2_check = false;
var product3_check = false;

var product_count1 = 0;
var product_count2 = 0;
var product_count3 = 0;

function product_click1()
{
  product1_check = true;
  if (product1_check == true) {
    document.getElementById("product1").style.display="block"
    product_count1 += 1
    document.getElementById("count1").value = product_count1;
  }
}
function product_click1_minus()
{
  product1_check = true;
  if (product1_check == true) {
    document.getElementById("product1").style.display="block"
    product_count1 -= 1
    document.getElementById("count1").value = product_count1
  }
}

function product_click2()
{
  product2_check = true;
  if (product2_check == true) {
    document.getElementById("product2").style.display="block"
    product_count2 += 1
    document.getElementById("count2").value = product_count2;
  }
}
function product_click2_minus()
{
  product2_check = true;
  if (product2_check == true) {
    document.getElementById("product2").style.display="block"
    product_count2 -= 1
    document.getElementById("count2").value = product_count2
  }

}

function product_click3()
{
  product3_check = true;
  if (product3_check == true) {
    document.getElementById("product3").style.display="block"
    product_count3 += 1
    document.getElementById("count3").value = product_count3
  }
}

function product_click3_minus()
{
  product3_check = true;
  if (product3_check == true) {
    document.getElementById("product3").style.display="block"
    product_count3 -= 1
    document.getElementById("count3").value = product_count3
  }
}



function message()
{
  alert("OPS, this feature is not available, please contact the customer service")
}
