<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $formData = $_POST['myInput'];
    
    // Get the IP address of the user
    $userIP = $_SERVER['REMOTE_ADDR'];
    
    // Get the current date and time
    $currentTime = date('Y-m-d H:i:s');

    // Define the path to the text file where you want to store the data
    $filePath = 'form_data.txt';

    // Prepare the data to be saved
    $dataToSave = "IP: $userIP, Time: $currentTime, Value: $formData\n";

    // Open the file for writing (create it if it doesn't exist)
    $file = fopen($filePath, 'a');

    // Write the form data to the file
    fwrite($file, $dataToSave);

    // Close the file
    fclose($file);
}
?>
