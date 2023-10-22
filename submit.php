<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $inputValue = $_POST['value'];
    $userIP = $_SERVER['REMOTE_ADDR'];
    $timestamp = date('Y-m-d H:i:s');

    // Create or append to a text file
    $logFile = 'data.txt';
    $logEntry = "$timestamp - User IP: $userIP - Value: $inputValue\n";

    file_put_contents($logFile, $logEntry, FILE_APPEND);

    // Respond with a JSON success message
    echo json_encode(['message' => 'Data stored successfully']);
} else {
    http_response_code(405); // Method Not Allowed
    echo json_encode(['error' => 'Invalid request method']);
}
?>
