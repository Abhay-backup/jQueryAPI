// fetch("https://fakestoreapi.com/products").then((data)=>{
//     //console.log(data);
//     return data.json();
// }).then((objectData)=>{
//     console.log(objectData);
// })


$(document).ready(function(){
  $("#submit").click(function(){
        var url = "https://dummyjson.com/products";
       
        $.ajax({
            url:url,
            dataType:'json',
            type:'get',
            beforeSend : function(){
              $('#spinner').removeClass('d-none')
            },
            complete : function(){
              $('#spinner').addClass('d-none')
            },
            success: function(result){
      //  console.log(result.products[0])
          var table = $("<table style='width:100%'>")
                      .append("<tr> <td style='background-color: azure;'><b>Id</b></td> <td style='background-color: azure;'><b>Name</b></td> \
                                    <td style='background-color: azure;'><b>Price</b></td> <td style='background-color: azure;'><b>Rating<b></td> \
                                    <td style='background-color: azure;'><b>Stock</b></td> <td style='background-color: azure;'><b>Brand</b></td> \
                                    <td style='background-color: azure;'><b>Category</b></td>  <td style='background-color: azure;'><b>DiscountPercentage</b></td>\
                                    <td style='background-color: azure;'><b>Product Image</b></td>\
                              </tr>");
                
                for(i = 0; i < result.products.length; i++)
                {
                     table.append(`<tr><td>` + result.products[i].id +
                                  `</td><td>` + result.products[i].title +
                                  `</td><td>` + result.products[i].price +
                                  `</td><td>` + result.products[i].rating +
                                  `</td><td>` + result.products[i].stock +
                                  `</td><td>` + result.products[i].brand +
                                  `</td><td>` + result.products[i].category +
                                  `</td><td>` + result.products[i].discountPercentage +
                                  `</td><td style="padding:10px;"><img width="100px" height="100px" src='${result.products[i].thumbnail}'/>` +
                                  `</td></tr>`
                                  
                                    //   "</td><td>" + result[i].address.street +
                                    //   "</td><td>" + result[i].address.city +
                                    //   "</td><td>" + result[i].address.zipcode +
                                    //   "</td><td>" + result[i].phone +
                                    //   "</td><td>" + result[i].website +
                                  )
                  }
                                  
                $("#message").html(table.append('</table>'));
            },
            
            error: function (error){
                alert(error);
            }
        })

        // $.get('https://jsonplaceholder.typicode.com/users', function (data) {
            
        //     var table = $("<table style='border:1px solid black'>")
        //                 .append("<tr> <b><td>id</td> <td>name</td> <td>username</td> <td>email</td>  <td>street</td> <td>city</td> <td>zipcode</td></b></tr>");
                
        //         for(i = 0; i < data.length; i++){
        //             table.append("<tr><td>"  + data[i].id +
        //                          "</td><td>" + data[i].name +
        //                          "</td><td>" + data[i].username +
        //                          "</td><td>" + data[i].email +
        //                          "</td><td>" + data[i].address.street +
        //                          "</td><td>" + data[i].address.city +
        //                          "</td><td>" + data[i].address.zipcode +

        //                          "</td></tr>")
        //         }
                
        //         $("#message").html(table);
            
        // })
  })  
})