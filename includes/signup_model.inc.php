<?php
session_start();
include("dbh.inc.php");

declare(strict_types=1);

function get_username(object $pdo, string $username) 
{
    $query = "SELECT username FROM signup WHERE username = :username;";
    $stmt = $pdo->prepare($query);
    $stmt->bindParam(":username", $username);
    $stmt->execute();

    $result = $stmt->fetch(PDO::FETCH_ASSOC);
    return $result;
}

function get_email(object $pdo, string $email) 
{
    $query = "SELECT username FROM signup WHERE email = :usernamemaile;";
    $stmt = $pdo->prepare($query);
    $stmt->bindParam(":email", $email);
    $stmt->execute();

    $result = $stmt->fetch(PDO::FETCH_ASSOC);
    return $result;
}

function set_user(object $pdo, string $pwd, string $username, string $email)
{
    $query = "INSERT INTO signup (username, pwd, email) VALUES (:username, :pwd, :email)";
    $stmt = $pdo->prepare($query);

    $options = [
        'cost' => 12
    ];
    $hasedPwd = password_hash($pwd, PASSWORD_BCRYPT, $options);

    $stmt->bindParam(":username", $username);
    $stmt->bindParam(":pwd", $hasedPwd);
    $stmt->bindParam(":email", $email);
    $stmt->execute();
}

function create_user(object $pdo, string $pwd, string $username, string $email) {
    $query = "INSERT INTO signup (username, pwd, email) VALUES (:username, :pwd, :email);";
    $stmt = $pdo->prepare($query);

    $options = [
        'cost' => 12
    ];
    $hashedPWD = password_hash($pwd, PASSWORD_BCRYPT, $options);

    $stmt->bindParam(":username", $username);
    $stmt->bindParam(":pwd", $pwd);
    $stmt->bindParam(":email", $email);
    $stmt->execute(); 
}