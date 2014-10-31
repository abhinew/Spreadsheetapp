/**
 * Created by Abhinaya on 10/29/14.
 */

$(document).ready(function(){
    $("#create").click(function(){



            var spreadsheetStructure = {
                name: "Abhi's spreadsheet",
                coloumnHeads : []
            };
            var a = 97;
            var charArray = [];
            for (var i = 0; i<26; i++)
            {
                charArray.push(String.fromCharCode(a + i));
            }

            for (var i=0; i<100; i++ )
            {
                spreadsheetStructure.coloumnHeads.push({ name: 'A'});
            }
            var template = document.getElementById('templates').innerHTML;
            var output = Mustache.render(template, spreadsheetStructure);
            $("#excel").html(output);


    });
});
