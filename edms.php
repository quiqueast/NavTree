<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>EDMS</title>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
  <link rel="stylesheet" href="./assets/css/style.css">

</head>
<body>
<!-- partial:index.partial.html -->
<div class="page ">
  <div class="pageHeader">
    <div class="title">V1 Electornic Document Management System</div>
    <div class="userPanel">
      <i class="fa fa-chevron-down"></i>
        <span class="username">Home</span>
    </div>
  </div>
  
  <div class="main">  
    <div class="nav">
    </div>


    <div class="view ">
      
      <div class=" container ">
          <div class="row">
            <div class="col-7">
              <br>
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">Search by Part Number: </span>
                </div>
                <input type="text" id="PartN" placeholder="Enter Part" class="form-control">
              </div>
              <br>

              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">Search by Description: </span>
                </div>
                <input type="text" id="Desc" placeholder="Enter Part" class="form-control">
              </div>
            </div>
            
            <div class="col-2">
              <br>
              <button type="button" id="bntBuscar" class="btn btn-outline-dark" style="width: 100px;height: 100px;">
                  <i class="fas fa-search"style="font-size: 30px;" ></i>
              </button>
            </div>
            
          </div>
      <br>
      <div class="row">
              <div class="col-lg-12">
                  <div class="card">
                    <div class="card-body">
                      <div class="conTabl">
                        
                        <div class="table-responsive">
                          
                        <table class="table table-borderles table-sm">
                            <thead>
                              <tr>
                                <th> Part No </th>
                                <th> Qty </th>
                                <th> Description </th>
                                <th> Rev </th>
                                <th> Status </th>
                                <th> V1 Doc. </th>
                                <th> Cust. Doc </th>
                              </tr>
                            </thead>

                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

      </div>
    </div>
</div>
<!-- partial -->

<script src="./assets/jq/jquery-3.5.1.js"></script>
<script src="./script.js"></script>
<script src="https://kit.fontawesome.com/cf1c1b2c69.js" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>



</body>
</html>
