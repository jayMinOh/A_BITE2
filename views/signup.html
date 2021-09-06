<!DOCTYPE html>
<html lang="en">

<head>
    <!-- Required meta tags-->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="Colorlib Templates">
    <meta name="author" content="Colorlib">
    <meta name="keywords" content="Colorlib Templates">

    <!-- Title Page-->
    <title>WC</title>
    <link rel='stylesheet prefetch' href='https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css'>
    <link rel='stylesheet prefetch' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.2/css/font-awesome.min.css'>
    
  
    
    <!-- Icons font CSS-->
    <link href="/vendor/mdi-font/css/material-design-iconic-font.min.css" rel="stylesheet" media="all">
    <link href="/vendor/font-awesome-4.7/css/font-awesome.min.css" rel="stylesheet" media="all">
    <!-- Font special for pages-->
    <link href="https://fonts.googleapis.com/css?family=Poppins:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet">

    <!-- Vendor CSS-->
    <link href="/vendor/select2/select2.min.css" rel="stylesheet" media="all">
    <link href="/vendor/datepicker/daterangepicker.css" rel="stylesheet" media="all">

    <!-- Main CSS-->
    <link href="/css/main.css" rel="stylesheet" media="all">
</head>

<body>
    <div class="page-wrapper bg-gra-01 p-t-150 p-b-100 font-poppins">
        <div class="wrapper wrapper--w780">
            <div class="card card-3">
                <div class="card-heading"></div>
                <div class="card-body">
                    <div style="display: flex;">
                         <h2 class="title">WC SIGN UP</h2>
                    </div>
                    <form id="form" action="/signup.json" method="post" enctype="multipart/form-data">
                        <div class="input-group" style="display: flex;" id="checkForm">
                            <input class="input--style-3" type="text" placeholder="ID" name="USER_ID" id="USER_ID">
                            <button class="btn btn--blue" type="button" style="width: 90px;padding: 0 0;" id="CHK_DUPL" checking="false">CHK</button>
                        </div>
                        <div id="comment" style="display: none;margin-top: -12px;height:33px;"></div>
                        <div class="input-group">
                            <input class="input--style-3" type="text" placeholder="NAME" name="USER_NAME" id="USER_NAME">
                        </div>
                        <div class="input-group">
                            <input class="input--style-3" type="text" placeholder="LANGUAGE" name="USER_LANG_TYPE" id="USER_LANG_TYPE">
                        </div>
                        <div class="input-group">
                            <input class="input--style-3" type="password" placeholder="password" name="PASSWORD" id="PASSWORD">
                        </div>
                        <div class="input-group">
                            <input class="input--style-3" type="file" placeholder="USER_IMG" name="USER_IMG" id="USER_IMG">
                        </div>
                        <div class="p-t-10">
                            <button class="btn btn--pill btn--green" type="submit" id="submit">Sign Up</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <!-- Jquery JS-->
    <script src="/vendor/jquery/jquery.min.js"></script>
    <script src="/js/common.js"></script>
    <!-- Vendor JS-->
    <script src="/vendor/select2/select2.min.js"></script>
    <script src="/vendor/datepicker/moment.min.js"></script>
    <script src="/vendor/datepicker/daterangepicker.js"></script>

    <!-- Main JS-->
    <script src="/js/global.js"></script> 


    <script>
        $(function(){
            $("#CHK_DUPL").on('click', function(){
                var userid = $("#USER_ID").val();
                if (!userid) {
                    $("#USER_ID").css('border', '1px solid red');
                    $("#checkForm").css('margin-bottom', '12px');
                    $("#comment").text('please enter userId');
                    $("#comment").css('color', 'red');
                    $("#comment").show();
                    return;
                }
                $.ajax({
                    type: "post",
                    url: "checkDupl.json",
                    data : {userid : userid},
                    success : function(result){
                        if (result == "DUPL") {
                            $("#USER_ID").css('border', '1px solid red');
                            $("#checkForm").css('margin-bottom', '12px');
                            $("#comment").text('duplicated userId');
                            $("#comment").css('color', 'red');
                            $("#comment").show();
                            $("#CHK_DUPL").attr('checking', false);
                            $("#CHK_DUPL").css('border', '1px solid red');
                         
                        } else {
                            $("#USER_ID").css('border', '1px solid green');
                            $("#checkForm").css('margin-bottom', '12px');
                            $("#comment").text("It's possible to use");
                            $("#comment").css('color', 'green');
                            $("#comment").show();
                            $("#CHK_DUPL").attr('checking', true);
                            $("#CHK_DUPL").css('border', '1px solid green');
                        }
                    }
                });
            });
            $("#USER_ID").on('focus', function(){
                $("#CHK_DUPL").attr('checking', false);
                $("#checkForm").css('margin-bottom', '33px');
                $("#comment").hide();
            });

            $("#submit").on('click', function(){
                var chkFlag = $("#CHK_DUPL").attr('checking');
                if (chkFlag == "false") {
                    $("#CHK_DUPL").css('border', '1px solid red');
                    return false;
                } else {
                    $("#CHK_DUPL").css('border', '1px solid green');
                }
                var param = {
                    USER_ID : $("#USER_ID").val() || '',
                    USER_NAME : $("#USER_NAME").val() || '',
                    USER_LANG_TYPE : $("#USER_LANG_TYPE").val() || '',
                    PASSWORD : $("#PASSWORD").val() || '',
                    USER_IMG : $("#USER_IMG").val() || ''
                };
                if(checkValidation(param)) {
                    for(let key in param) {
                        if (param[key] == ''){
                            $("#" + key).css('border', '1px solid red');
                        } else {
                            $("#" + key).css('border', '0');
                        }
                    }
                    return false;
                }   
                return true;
            });
        });
      
    </script>
</body><!-- This templates was made by Colorlib (https://colorlib.com) -->

</html>
<!-- end document-->