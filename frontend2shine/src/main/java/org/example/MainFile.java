package org.example;

import static spark.Spark.*;

public class MainFile {
    public static void main(String[] args) {
        System.out.println("Test");
        port(8080);

        get("/", (req, res) -> "<h2>Hello, this is a simple dummy web application!</h2>");
    }
}
