<?php
session_start();
include "dbh.inc.php";

declare(strict_types=1);


function set_username(object $pdo, string $username): void
{
    // Your logic to set the username in the database or update session
    $_SESSION['username'] = $username;

    // Redirect to the index page
    header("Location: ../index.php");
    die();
}

function is_input_empty(string $username, string $pwd, string $email): bool 
{
    return empty($username) || empty($pwd) || empty($email);
}

function is_email_invalid(string $email): bool
{
    return !filter_var($email, FILTER_VALIDATE_EMAIL);
}

function is_username_taken(object $pdo, string $username): bool
{
    try {
    return get_username($pdo, $username) !== null;
    } catch (PDOException $e) {
        // Log the error or handle it appropriately
        return false;
    }
}

function is_email_registered(object $pdo, string $email): bool
{
    try {
    return get_email($pdo, $email) !== null;
    }catch (PDOException $e) {
        // Log the error or handle it appropriately
        return false;
    }
}

function create_user(object $pdo, string $pwd, string $username, string $email): bool
{
    return set_user( $pdo,  $pwd,  $username,  $email);
}

