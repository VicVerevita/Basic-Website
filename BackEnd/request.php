<?php

    include 'connection.php';


$email = filter_input(INPUT_POST, 'email');
    $name = filter_input(INPUT_POST, 'name');
    $description = filter_input(INPUT_POST, 'description');

    $host = "localhost";
    $dbusername = "osadmin";
    $dbpassword = "1234";
    $dbname = "osa";

    $conn = OpenCon();

    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }
    else{
        $sql = "INSERT INTO request (email, full_name, vid_description)
        VALUES ('$email', '$name', '$description')";

        if($conn->query($sql)){
            echo "Your request has been submited!";
        }
        else{
            echo "Error: ". $sql ."<br>". $conn->error;
        }
        CloseCon($conn);
    }